<template>
  <NuxtLink
    :to="props.to"
    :aria-current="props.active ? 'location' : undefined"
    class="block rounded-r border-l-2 px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
    :class="
      props.active
        ? 'border-blue-400 bg-zinc-900 text-white'
        : 'border-transparent text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900/60 hover:text-zinc-100'
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
