<script setup lang="ts">
import { experienceItems } from "~/data/site";
</script>

<template>
  <section id="experience" class="mt-24 scroll-mt-24">
    <p class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
      Experience
    </p>
    <h2 class="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-[2rem]">
      Across the developer and customer journey
    </h2>

    <div class="mt-10 space-y-8">
      <article
        v-for="item in experienceItems"
        :key="`${item.role}-${item.company}`"
        class="border-l-2 pl-5"
        :class="item.current ? 'border-blue-500' : 'border-zinc-700'"
      >
        <div class="flex flex-wrap items-center gap-2.5">
          <h3 class="text-lg font-semibold text-white">
            {{ item.role }}
          </h3>
          <span
            v-if="item.current"
            class="rounded-full border border-blue-500/30 bg-blue-950/50 px-2.5 py-0.5 font-mono text-xs text-blue-300"
          >
            Current
          </span>
        </div>
        <p class="mt-0.5 text-sm" :class="item.current ? 'text-blue-400' : 'text-zinc-400'">
          <NuxtLink
            v-if="item.companyUrl"
            :to="item.companyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded hover:text-blue-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            {{ item.company }}<span class="sr-only"> (opens in new tab)</span>
          </NuxtLink>
          <span v-else>{{ item.company }}</span>
        </p>
        <p class="mt-3 max-w-2xl leading-7 text-zinc-300">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>
