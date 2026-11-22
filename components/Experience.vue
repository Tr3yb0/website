<script setup lang="ts">
import { experienceItems } from "~/data/site";
</script>

<template>
  <section
    id="experience"
    class="mt-16 scroll-mt-24 border-t border-zinc-800/80 pt-12"
  >
    <h2 class="text-lg font-medium text-white">Experience</h2>

    <div class="mt-8 space-y-7">
      <article
        v-for="item in experienceItems"
        :key="`${item.role}-${item.company}`"
        class="border-l pl-4"
        :class="item.current ? 'border-zinc-400' : 'border-zinc-800'"
      >
        <h3 class="text-base font-medium text-zinc-100">
          {{ item.role }}
        </h3>
        <p class="mt-0.5 text-sm text-zinc-500">
          <NuxtLink
            v-if="item.companyUrl"
            :to="item.companyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
          >
            {{ item.company }}<span class="sr-only"> (opens in new tab)</span>
          </NuxtLink>
          <span v-else>{{ item.company }}</span>
          <span v-if="item.current"> · Current</span>
        </p>
        <p class="mt-2.5 text-base leading-7 text-zinc-400">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>
