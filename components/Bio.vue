<script setup lang="ts">
import { siteConfig } from "~/data/site";
</script>

<template>
  <section id="top" class="scroll-mt-24">
    <div class="mb-10 flex items-center lg:hidden">
      <NuxtLink
        to="/"
        aria-label="Trey Botard — Home"
        class="inline-flex items-center rounded p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        <img
          class="h-12 w-12"
          src="~/assets/images/TB-logo-dark.png"
          alt=""
          width="48"
          height="48"
        />
        <span
          class="ml-3 font-display text-2xl font-medium tracking-tight text-white"
        >
          {{ siteConfig.name }}
        </span>
      </NuxtLink>
    </div>

    <p
      class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400"
    >
      {{ siteConfig.role }} · {{ siteConfig.company }}
    </p>
    <h1
      class="mt-5 font-display text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl"
    >
      Building clearer paths for developers and teams.
    </h1>
    <p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
      I work at the intersection of developer experience, customer operations,
      and engineering at
      <NuxtLink
        :to="siteConfig.companyUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-blue-300 hover:decoration-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        {{ siteConfig.company
        }}<span class="sr-only"> (opens in new tab)</span></NuxtLink
      >—building docs, tools, and internal workflows that remove recurring
      friction. Lately, I’ve also been building practical AI workflows for
      day-to-day coordination and ops.
    </p>

    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink
        to="/#work"
        class="rounded bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        Selected work
      </NuxtLink>
      <NuxtLink
        :to="siteConfig.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1.5 rounded border border-zinc-700 px-5 py-3 font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        <span>LinkedIn</span>
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
