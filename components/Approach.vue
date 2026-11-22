<script setup lang="ts">
import { approachSteps } from "~/data/site";
</script>

<template>
  <section id="approach" class="mt-20 scroll-mt-24">
    <h2
      class="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl"
    >
      How I work
    </h2>

    <ol class="mt-7 grid gap-8 md:grid-cols-3">
      <li
        v-for="step in approachSteps"
        :key="step.number"
        class="border-t border-zinc-800 pt-5"
      >
        <p class="font-mono text-xs font-medium text-blue-400">
          {{ step.number }}
        </p>
        <h3 class="mt-2.5 text-base font-semibold text-white">
          {{ step.title }}
        </h3>
        <p class="mt-2 leading-7 text-zinc-300">
          {{ step.description }}
        </p>
      </li>
    </ol>
  </section>
</template>
