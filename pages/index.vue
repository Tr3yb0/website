<script lang="ts" setup>
import Bio from '~~/components/Bio.vue';
import Speaking from '~~/components/Speaking.vue';
import Experience from '~~/components/Experience.vue';
import Contact from '~~/components/Contact.vue';
import TBFooter from '~~/components/TBFooter.vue';
useHead({
  title: 'Trey Botard',
});
</script>

<template>
  <main class="ml-2 mt-2">
    <section class="w-full">
      <Bio />
      <Speaking />
      <Experience />
      <Contact />
    </section>
    <TBFooter class="mt-8" />
  </main>
</template>
