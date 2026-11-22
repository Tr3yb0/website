<script setup lang="ts">
import { navItems } from "~/data/site";

const activeSection = useActiveSection();
</script>

<template>
  <div>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
    >
      Skip to main content
    </a>

    <div class="flex justify-center px-4 pb-1 pt-5 sm:hidden">
      <LogoButton />
    </div>

    <header
      class="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur lg:hidden"
    >
      <div
        class="mx-auto flex max-w-3xl items-center justify-center px-3 py-2.5 sm:justify-between sm:gap-4 sm:px-4 sm:py-3"
      >
        <div class="hidden shrink-0 sm:block">
          <LogoButton class="-ml-1" />
        </div>
        <nav
          aria-label="Primary navigation"
          class="flex min-w-0 items-center justify-center gap-1 overflow-x-auto sm:justify-end"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :aria-current="activeSection === item.id ? 'location' : undefined"
            class="inline-flex min-h-[36px] items-center whitespace-nowrap rounded px-2 py-1.5 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:px-2.5 sm:text-sm"
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
    </header>

    <div
      class="mx-auto flex max-w-5xl flex-col items-start justify-center pt-8 lg:flex-row lg:gap-12 lg:px-6 lg:pt-20"
    >
      <LeftNav
        :active-section="activeSection"
        class="sticky top-8 hidden w-48 flex-none lg:block"
      />

      <div class="mx-auto w-full min-w-0 max-w-3xl lg:mx-0">
        <slot />
      </div>
    </div>
  </div>
</template>
