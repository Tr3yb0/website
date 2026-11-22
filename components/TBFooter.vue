<script setup lang="ts">
import { siteConfig, socialProfiles } from "~/data/site";
</script>

<template>
  <footer class="border-t border-zinc-800/80 pt-8 text-sm text-zinc-500">
    <p class="text-zinc-300">{{ siteConfig.name }}</p>
    <p class="mt-1">{{ siteConfig.role }} at {{ siteConfig.company }} · {{ siteConfig.location }}</p>
    <nav class="mt-4 flex flex-row gap-1" aria-label="Social profiles">
      <NuxtLink
        v-for="profile in socialProfiles"
        :key="profile.name"
        :to="profile.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${profile.name} (opens in new tab)`"
        class="inline-flex rounded p-2 text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
      >
        <Icon :name="profile.icon" class="h-5 w-5" aria-hidden="true" />
      </NuxtLink>
    </nav>
  </footer>
</template>
