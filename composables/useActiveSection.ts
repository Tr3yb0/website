import { navItems } from "~/data/site";

export function useActiveSection() {
  const activeSection = useState<string>("active-section", () => "");

  if (import.meta.client) {
    let observer: IntersectionObserver | null = null;
    let onScroll: (() => void) | null = null;
    let onHashChange: (() => void) | null = null;

    const sectionIds = navItems.map((item) => item.id);

    const syncFromScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 48) {
        activeSection.value = sectionIds[sectionIds.length - 1] ?? "";
        return;
      }

      if (window.scrollY < 160) {
        activeSection.value = "";
      }
    };

    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (sectionIds.includes(hash)) {
        activeSection.value = hash;
      }
    };

    onMounted(() => {
      syncFromHash();

      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length > 0 && "IntersectionObserver" in window) {
        const visibleRatios = new Map<string, number>();

        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              visibleRatios.set(
                entry.target.id,
                entry.isIntersecting ? entry.intersectionRatio : 0,
              );
            }

            let bestId = "";
            let bestScore = 0;
            for (const id of sectionIds) {
              const score = visibleRatios.get(id) ?? 0;
              if (score > bestScore) {
                bestScore = score;
                bestId = id;
              }
            }

            if (bestId) {
              activeSection.value = bestId;
            } else {
              syncFromScroll();
            }
          },
          {
            rootMargin: "-18% 0px -55% 0px",
            threshold: [0, 0.15, 0.35, 0.6],
          },
        );

        for (const el of elements) {
          observer.observe(el);
        }
      }

      onScroll = syncFromScroll;
      onHashChange = syncFromHash;
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("hashchange", onHashChange);
    });

    onUnmounted(() => {
      observer?.disconnect();
      if (onScroll) window.removeEventListener("scroll", onScroll);
      if (onHashChange) window.removeEventListener("hashchange", onHashChange);
    });
  }

  return activeSection;
}
