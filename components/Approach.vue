<script setup lang="ts">
import { approachSteps } from "~/data/site";
</script>

<template>
  <section id="approach" class="mt-24 scroll-mt-24">
    <p
      class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400"
    >
      Approach
    </p>
    <h2
      class="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-[2rem]"
    >
      How I work
    </h2>

    <ol class="mt-10 grid gap-8 md:grid-cols-3">
      <li
        v-for="step in approachSteps"
        :key="step.number"
        class="border-t border-zinc-800 pt-5"
      >
        <p class="font-mono text-sm font-medium text-blue-400">
          {{ step.number }}
        </p>
        <h3 class="mt-3 text-lg font-semibold text-white">
          {{ step.title }}
        </h3>
        <p class="mt-3 leading-7 text-zinc-300">
          {{ step.description }}
        </p>
      </li>
    </ol>
  </section>
</template>
