<script setup lang="ts">
import { siteConfig } from "~/data/site";
</script>

<template>
  <NuxtLink
    to="/"
    aria-label="Trey Botard, Home"
    class="group inline-flex flex-col items-start rounded p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
  >
    <img
      class="h-14 w-14 transition-opacity group-hover:opacity-90"
      src="~/assets/images/TB-logo-dark.png"
      alt=""
      width="56"
      height="56"
    />
    <span
      class="mt-2.5 font-display text-2xl font-medium tracking-tight text-white"
    >
      {{ siteConfig.name }}
    </span>
  </NuxtLink>
</template>
