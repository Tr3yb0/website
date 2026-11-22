<script setup lang="ts">
import { siteConfig } from "~/data/site";
</script>

<template>
  <section id="top" class="scroll-mt-24">
    <div class="flex items-center gap-3.5">
      <NuxtLink
        to="/"
        aria-label="Trey Botard — Home"
        class="inline-flex rounded p-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 lg:hidden"
      >
        <img
          class="h-11 w-11"
          src="~/assets/images/TB-logo-dark.png"
          alt=""
          width="44"
          height="44"
        />
      </NuxtLink>
      <div>
        <h1
          class="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
        >
          {{ siteConfig.name }}
        </h1>
        <p class="mt-1 text-sm text-zinc-400">
          {{ siteConfig.role }} at
          <NuxtLink
            :to="siteConfig.companyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-blue-300 hover:decoration-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            {{ siteConfig.company
            }}<span class="sr-only"> (opens in new tab)</span>
          </NuxtLink>
          · Raleigh, NC
        </p>
      </div>
    </div>

    <p class="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
      I work at the intersection of developer experience, customer operations,
      and engineering—building docs, tools, and workflows that clear recurring
      friction. Lately, I’ve also been building practical AI workflows for
      day-to-day coordination and ops.
    </p>
  </section>
</template>
