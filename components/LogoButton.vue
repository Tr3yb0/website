<script setup lang="ts">
import { siteConfig } from "~/data/site";
</script>

<template>
  <NuxtLink
    to="/"
    aria-label="Trey Botard — Home"
    class="group inline-flex flex-col items-start rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
  >
    <img
      class="h-10 w-10 opacity-90 transition-opacity group-hover:opacity-100"
      src="~/assets/images/TB-logo-dark.png"
      alt=""
      width="40"
      height="40"
    />
    <span class="mt-3 text-sm font-medium text-zinc-100">
      {{ siteConfig.name }}
    </span>
  </NuxtLink>
</template>
