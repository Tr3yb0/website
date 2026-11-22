<template>
  <aside aria-label="Site navigation">
    <LogoButton />
    <nav aria-label="Primary navigation" class="mt-6 flex flex-col space-y-1">
      <LeftNavButton
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :text="item.text"
        :active="activeSection === item.id"
      />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { navItems } from "~/data/site";

defineProps<{
  activeSection?: string;
}>();
</script>
