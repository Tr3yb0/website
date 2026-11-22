<script setup lang="ts">
import { speakingItems } from "~/data/site";
</script>

<template>
  <section
    id="speaking"
    class="mt-16 scroll-mt-24 border-t border-zinc-800/80 pt-12"
  >
    <h2 class="text-lg font-medium text-white">Speaking & community</h2>
    <p class="mt-2 text-base leading-7 text-zinc-400">
      Conference talks, podcasts, advisory work, demos, diagrams, documentation,
      and direct developer education.
    </p>

    <ul class="mt-7 space-y-4">
      <li v-for="item in speakingItems" :key="item.venue" class="text-base">
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <NuxtLink
            v-if="item.url"
            :to="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-baseline gap-1 rounded font-medium text-zinc-100 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
          >
            <span>{{ item.venue }}</span>
            <span aria-hidden="true" class="text-xs text-zinc-500">↗</span>
            <span class="sr-only"> (opens in new tab)</span>
          </NuxtLink>
          <span v-else class="font-medium text-zinc-100">{{ item.venue }}</span>
          <span class="text-xs text-zinc-500">{{ item.format }}</span>
        </div>
        <p class="mt-0.5 text-sm text-zinc-400">
          {{ item.detail }}
        </p>
      </li>
    </ul>
  </section>
</template>
