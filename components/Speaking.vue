<script setup lang="ts">
import { speakingItems } from "~/data/site";
</script>

<template>
  <section id="speaking" class="mt-20 scroll-mt-24">
    <h2
      class="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl"
    >
      Speaking & community
    </h2>

    <ul class="mt-6 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
      <li
        v-for="item in speakingItems"
        :key="item.venue"
        class="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
      >
        <div class="min-w-0">
          <NuxtLink
            v-if="item.url"
            :to="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-baseline gap-1.5 rounded font-medium text-blue-400 transition-colors hover:text-blue-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            <span>{{ item.venue }}</span>
            <span
              aria-hidden="true"
              class="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >↗</span
            >
            <span class="sr-only"> (opens in new tab)</span>
          </NuxtLink>
          <span v-else class="font-medium text-white">{{ item.venue }}</span>
          <p class="mt-1 text-sm text-zinc-400">
            {{ item.detail }}
          </p>
        </div>

        <span
          class="w-fit shrink-0 rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 font-mono text-xs text-zinc-400"
        >
          {{ item.format }}
        </span>
      </li>
    </ul>
  </section>
</template>
