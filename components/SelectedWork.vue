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
