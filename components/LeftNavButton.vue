<template>
  <button>
    <NuxtLink
      class="rounded p-2 w-16 font-caveat text-2xl hover:bg-zinc-700"
      :to="props.to"
    >
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
