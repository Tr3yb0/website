<script setup lang="ts">
import { siteConfig, socialProfiles } from "~/data/site";
</script>

<template>
  <footer class="border-t border-zinc-800 pt-8 text-sm text-zinc-400">
    <p class="font-medium text-zinc-200">{{ siteConfig.name }}</p>
    <p class="mt-1">{{ siteConfig.role }} at {{ siteConfig.company }}</p>
    <p>{{ siteConfig.location }}</p>
    <nav class="mt-5 flex flex-row gap-1.5" aria-label="Social profiles">
      <NuxtLink
        v-for="profile in socialProfiles"
        :key="profile.name"
        :to="profile.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${profile.name} (opens in new tab)`"
        class="inline-flex rounded p-1.5 text-zinc-300 transition-colors hover:bg-zinc-800/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        <Icon :name="profile.icon" class="h-7 w-7" aria-hidden="true" />
      </NuxtLink>
    </nav>
  </footer>
</template>
