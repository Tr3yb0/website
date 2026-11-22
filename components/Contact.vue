<script setup lang="ts">
import { siteConfig } from "~/data/site";
</script>

<template>
  <section
    id="connect"
    class="mt-20 scroll-mt-24 rounded-lg border border-zinc-800 bg-zinc-900/70 p-6"
  >
    <h2
      class="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl"
    >
      Connect
    </h2>
    <p class="mt-3 max-w-2xl leading-7 text-zinc-300">
      Working on developer experience, customer operations, or practical AI
      workflows? Happy to compare notes.
    </p>

    <div class="mt-6 flex flex-wrap gap-3">
      <NuxtLink
        :to="siteConfig.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1.5 rounded bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        <span>LinkedIn</span>
        <span
          aria-hidden="true"
          class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >↗</span
        >
        <span class="sr-only"> (opens in new tab)</span>
      </NuxtLink>
      <NuxtLink
        :to="siteConfig.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1.5 rounded border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        <span>GitHub</span>
        <span
          aria-hidden="true"
          class="text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-200"
          >↗</span
        >
        <span class="sr-only"> (opens in new tab)</span>
      </NuxtLink>
    </div>
  </section>
</template>
