<script setup lang="ts">
import { selectedWorkItems } from "~/data/site";
</script>

<template>
  <section id="work" class="mt-16 scroll-mt-24 border-t border-zinc-800/80 pt-12">
    <h2 class="text-lg font-medium text-white">Selected work</h2>
    <p class="mt-2 text-base leading-7 text-zinc-400">
      The best systems do more than solve one urgent problem. They make the next
      problem easier to understand, route, and resolve.
    </p>

    <div class="mt-8 divide-y divide-zinc-800/70">
      <article
        v-for="item in selectedWorkItems"
        :key="item.title"
        class="py-7 first:pt-0 last:pb-0"
      >
        <p class="text-xs text-zinc-500">
          {{ item.eyebrow }}
        </p>
        <h3 class="mt-1.5 text-base font-medium text-zinc-100">
          {{ item.title }}
        </h3>
        <p
          v-for="(paragraph, index) in item.paragraphs"
          :key="index"
          class="mt-3 text-base leading-7 text-zinc-400"
        >
          {{ paragraph }}
        </p>
        <p class="mt-4 text-xs text-zinc-500">
          {{ item.tags.join(" · ") }}
        </p>
      </article>
    </div>
  </section>
</template>
