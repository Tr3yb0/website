<script setup lang="ts">
import { experienceItems } from "~/data/site";
</script>

<template>
  <section id="experience" class="mt-24 scroll-mt-24">
    <p
      class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400"
    >
      Experience
    </p>
    <h2
      class="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-[2rem]"
    >
      Where I’ve worked
    </h2>

    <div class="mt-10 space-y-8">
      <article
        v-for="item in experienceItems"
        :key="item.role"
        class="border-l-2 pl-5"
        :class="item.current ? 'border-atomic' : 'border-zinc-700'"
      >
        <div class="flex flex-wrap items-center gap-2.5">
          <h3 class="text-lg font-semibold text-white">
            {{ item.role }}
          </h3>
          <span
            v-if="item.current"
            class="rounded-full border border-atomic/30 bg-atomic/10 px-2.5 py-0.5 font-mono text-xs text-atomic-light"
          >
            Current
          </span>
        </div>
        <p class="mt-0.5 text-sm text-zinc-400">
          <template
            v-for="(company, index) in item.companies"
            :key="company.name"
          >
            <span v-if="index > 0"> · </span>
            <NuxtLink
              v-if="company.url"
              :to="company.url"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              :class="
                company.highlight
                  ? 'font-medium text-atomic hover:text-atomic-light focus-visible:outline-atomic'
                  : 'text-zinc-300 hover:text-white focus-visible:outline-blue-400'
              "
            >
              {{ company.name }}<span class="sr-only"> (opens in new tab)</span>
            </NuxtLink>
            <span v-else>{{ company.name }}</span>
          </template>
        </p>
        <p class="mt-3 max-w-2xl leading-7 text-zinc-300">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>
