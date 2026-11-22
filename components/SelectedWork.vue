<script setup lang="ts">
import { selectedWorkItems } from "~/data/site";
</script>

<template>
  <section id="work" class="mt-16 scroll-mt-24">
    <h2
      class="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl"
    >
      Selected work
    </h2>

    <div class="mt-6 space-y-5">
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
          class="font-mono text-xs font-medium uppercase tracking-[0.14em]"
          :class="item.featured ? 'text-blue-400' : 'text-zinc-400'"
        >
          {{ item.eyebrow }}
        </p>
        <h3 class="mt-2 text-lg font-semibold text-white">
          {{ item.title }}
        </h3>
        <p
          v-for="(paragraph, index) in item.paragraphs"
          :key="index"
          class="mt-3 max-w-2xl leading-7 text-zinc-300"
        >
          {{ paragraph }}
        </p>
        <ul class="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
          <li
            v-for="tag in item.tags"
            :key="tag"
            class="rounded-full border px-2.5 py-0.5 text-xs"
            :class="
              item.featured
                ? 'border-blue-500/25 bg-blue-950/50 text-blue-200'
                : 'border-zinc-800 bg-zinc-950/70 text-zinc-400'
            "
          >
            {{ tag }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
