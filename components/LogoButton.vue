<script setup lang="ts">
import { siteConfig } from "~/data/site";
</script>

<template>
  <NuxtLink
    to="/"
    aria-label="Trey Botard, Home"
    class="group inline-flex items-center gap-2.5 rounded p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
  >
    <img
      class="h-9 w-9 shrink-0 transition-opacity group-hover:opacity-90"
      src="~/assets/images/TB-logo-dark.png"
      alt=""
      width="36"
      height="36"
    />
    <span
      class="whitespace-nowrap font-display text-lg font-medium tracking-tight text-white"
    >
      {{ siteConfig.name }}
    </span>
  </NuxtLink>
</template>
