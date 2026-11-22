<script setup lang="ts">
import { navItems } from "~/data/site";

const activeSection = useActiveSection();
</script>

<template>
  <div
    class="mx-auto flex max-w-5xl flex-col items-start justify-center pt-4 lg:flex-row lg:gap-12 lg:px-6 lg:pt-20"
  >
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
    >
      Skip to main content
    </a>

    <LeftNav
      :active-section="activeSection"
      class="sticky top-8 hidden w-44 flex-none lg:block"
    />

    <div class="w-full max-w-3xl">
      <div
        class="sticky top-0 z-10 mb-8 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur lg:hidden"
      >
        <nav
          aria-label="Primary navigation"
          class="flex w-full gap-1 overflow-x-auto px-3 py-2"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :aria-current="activeSection === item.id ? 'location' : undefined"
            class="inline-flex min-h-[44px] items-center whitespace-nowrap rounded px-2.5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            :class="
              activeSection === item.id
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-100'
            "
          >
            {{ item.text }}
          </NuxtLink>
        </nav>
      </div>
      <slot />
    </div>
  </div>
</template>
