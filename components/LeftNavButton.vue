<template>
  <button>
    <NuxtLink
      class="rounded px-2 py-1 w-16 font-serif font-medium bg-zinc-800 hover:bg-zinc-600"
      :to="props.to">
      {{ text }}
    </NuxtLink>
  </button>
</template>

<script setup lang="ts">
export type LeftNavItem = {
  to: string;
  text: string;
};

const props = defineProps<LeftNavItem>();
</script>
