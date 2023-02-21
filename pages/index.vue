<script lang="ts" setup>
import Bio from '~~/components/Bio.vue';
import TBFooter from '~~/components/TBFooter.vue';
useHead({
  title: 'Trey Botard',
});
</script>

<template>
  <main class="ml-2 mt-2">
    <section class="w-full">
      <Bio />
    </section>
    <TBFooter class="mt-4" />
  </main>
</template>
