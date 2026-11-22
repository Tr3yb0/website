<script setup lang="ts">
import { connectTopics, siteConfig } from "~/data/site";
</script>

<template>
  <section
    id="connect"
    class="mt-24 scroll-mt-24 rounded-lg border border-zinc-800 bg-zinc-900/70 p-7"
  >
    <p
      class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400"
    >
      Connect
    </p>
    <h2
      class="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-[2rem]"
    >
      Get in touch
    </h2>
    <p class="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
      If you’re working on new product launches, developer experience, customer
      operations, or AI workflows, feel free to reach out.
    </p>

    <ul class="mt-5 flex flex-wrap gap-2" aria-label="Conversation topics">
      <li
        v-for="topic in connectTopics"
        :key="topic"
        class="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-300"
      >
        {{ topic }}
      </li>
    </ul>

    <div class="mt-7 flex flex-wrap gap-3">
      <NuxtLink
        :to="siteConfig.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1.5 rounded bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
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
        class="group inline-flex items-center gap-1.5 rounded border border-zinc-700 px-5 py-3 font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
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
