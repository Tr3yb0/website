<script setup lang="ts">
import { approachSteps } from "~/data/site";
</script>

<template>
  <section
    id="approach"
    class="mt-16 scroll-mt-24 border-t border-zinc-800/80 pt-12"
  >
    <h2 class="text-lg font-medium text-white">Approach</h2>
    <p class="mt-2 text-base leading-7 text-zinc-400">
      Problem → deployed system → reusable pattern
    </p>

    <ol class="mt-8 space-y-6">
      <li
        v-for="step in approachSteps"
        :key="step.number"
        class="grid gap-1 sm:grid-cols-[2.5rem_1fr] sm:gap-4"
      >
        <span class="font-mono text-xs text-zinc-500 sm:pt-1">
          {{ step.number }}
        </span>
        <div>
          <h3 class="text-base font-medium text-zinc-100">
            {{ step.title }}
          </h3>
          <p class="mt-1.5 text-base leading-7 text-zinc-400">
            {{ step.description }}
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>
