<template>
  <NuxtLink
    :to="props.to"
    :aria-current="props.active ? 'location' : undefined"
    class="block rounded py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
    :class="
      props.active
        ? 'font-medium text-white'
        : 'text-zinc-500 hover:text-zinc-200'
    "
  >
    {{ props.text }}
  </NuxtLink>
</template>

<script setup lang="ts">
export type LeftNavItem = {
  to: string;
  text: string;
  active?: boolean;
};

const props = defineProps<LeftNavItem>();
</script>
