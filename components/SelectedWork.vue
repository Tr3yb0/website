<script setup lang="ts">
import { selectedWorkItems } from "~/data/site";
</script>

<template>
  <section id="work" class="mt-24 scroll-mt-24">
    <p
      class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400"
    >
      Selected work
    </p>
    <h2
      class="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-[2rem]"
    >
      Systems built from real work
    </h2>

    <div class="mt-8 space-y-6">
      <article
        v-for="item in selectedWorkItems"
        :key="item.title"
        class="rounded-lg border p-6 transition-colors"
        :class="
          item.featured
            ? 'border-blue-500/30 bg-blue-950/25 hover:border-blue-500/50'
            : 'border-zinc-800 bg-zinc-900/70 hover:border-zinc-700'
        "
      >
        <p
          class="font-mono text-xs font-medium uppercase tracking-[0.16em]"
          :class="item.featured ? 'text-blue-400' : 'text-zinc-400'"
        >
          <span :class="item.organizationHighlight ? 'text-atomic' : ''">{{
            item.organization
          }}</span>
          <span> · {{ item.category }}</span>
        </p>
        <h3 class="mt-2.5 text-xl font-semibold text-white">
          {{ item.title }}
        </h3>
        <p
          v-for="(paragraph, index) in item.paragraphs"
          :key="index"
          class="mt-4 max-w-2xl leading-7 text-zinc-300"
        >
          {{ paragraph }}
        </p>
        <div
          v-if="item.links?.length"
          class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm"
        >
          <NuxtLink
            v-for="link in item.links"
            :key="link.url"
            :to="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-baseline gap-1 rounded font-medium text-atomic transition-colors hover:text-atomic-light hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atomic"
          >
            <span>{{ link.label }}</span>
            <span
              aria-hidden="true"
              class="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >↗</span
            >
            <span class="sr-only"> (opens in new tab)</span>
          </NuxtLink>
        </div>
        <ul class="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
          <li
            v-for="tag in item.tags"
            :key="tag"
            class="rounded-full border px-2.5 py-1 text-xs"
            :class="
              item.featured
                ? 'border-blue-500/25 bg-blue-950/50 text-blue-200'
                : 'border-zinc-800 bg-zinc-950/70 text-zinc-300'
            "
          >
            {{ tag }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
