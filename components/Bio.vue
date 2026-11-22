<script setup lang="ts">
import { siteConfig } from "~/data/site";
</script>

<template>
  <section id="top" class="scroll-mt-24">
    <div class="mb-8 flex items-center lg:hidden">
      <NuxtLink
        to="/"
        aria-label="Trey Botard — Home"
        class="inline-flex items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
      >
        <img
          class="h-9 w-9"
          src="~/assets/images/TB-logo-dark.png"
          alt=""
          width="36"
          height="36"
        />
        <span class="ml-3 text-base font-medium text-zinc-100">
          {{ siteConfig.name }}
        </span>
      </NuxtLink>
    </div>

    <p class="text-sm text-zinc-500">
      Developer Relations · Technical Adoption · Applied AI
    </p>
    <h1
      class="mt-4 text-3xl font-medium leading-snug tracking-tight text-white sm:text-[2.15rem] sm:leading-[1.2]"
    >
      I turn fragmented developer and customer work into systems that help teams
      ship, learn, and scale.
    </h1>
    <p class="mt-6 text-base leading-7 text-zinc-300">
      I’m the {{ siteConfig.role }} at
      <NuxtLink
        :to="siteConfig.companyUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded text-zinc-100 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
      >
        {{ siteConfig.company
        }}<span class="sr-only"> (opens in new tab)</span></NuxtLink
      >. I work where customer reality, product, and engineering meet, finding
      recurring friction, building workflows and tools that remove it, and
      turning what works into reusable operating systems, documentation, and
      enablement.
    </p>
    <p class="mt-4 text-base leading-7 text-zinc-400">
      Today, that includes applying AI where it can improve context,
      coordination, and decision-making, not adding AI for its own sake.
    </p>

    <div class="mt-7 flex flex-wrap items-center gap-5 text-sm">
      <NuxtLink
        to="/#work"
        class="rounded bg-zinc-100 px-4 py-2 font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
      >
        Selected work
      </NuxtLink>
      <NuxtLink
        :to="siteConfig.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 rounded text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
      >
        <span>LinkedIn</span>
        <span aria-hidden="true" class="text-xs text-zinc-500">↗</span>
        <span class="sr-only"> (opens in new tab)</span>
      </NuxtLink>
    </div>
  </section>
</template>
