<script setup lang="ts">
import { siteConfig } from "~/data/site";
</script>

<template>
  <section
    id="connect"
    class="mt-16 scroll-mt-24 border-t border-zinc-800/80 pt-12"
  >
    <h2 class="text-lg font-medium text-white">Connect</h2>
    <p class="mt-2 text-base leading-7 text-zinc-400">
      If you’re working on developer adoption, customer-facing systems, or
      practical AI workflows, I’m always interested in comparing notes.
    </p>

    <div class="mt-6 flex flex-wrap items-center gap-5 text-sm">
      <NuxtLink
        :to="siteConfig.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 rounded bg-zinc-100 px-4 py-2 font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
      >
        <span>LinkedIn</span>
        <span aria-hidden="true" class="text-xs">↗</span>
        <span class="sr-only"> (opens in new tab)</span>
      </NuxtLink>
      <NuxtLink
        :to="siteConfig.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 rounded text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
      >
        <span>GitHub</span>
        <span aria-hidden="true" class="text-xs text-zinc-500">↗</span>
        <span class="sr-only"> (opens in new tab)</span>
      </NuxtLink>
    </div>
  </section>
</template>
