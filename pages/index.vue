<script lang="ts" setup>
import Bio from '~~/components/Bio.vue';
import MyFooter from '~~/components/MyFooter.vue';
useHead({
  title: 'Trey Botard',
});
</script>

<template>
  <main>
    <section class="w-full">
      <Bio class="max-w-sm" />
    </section>
    <MyFooter class="mt-4" />
  </main>
</template>
