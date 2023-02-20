<script lang="ts" setup>
useHead({
  title: 'Trey Botard',
});
</script>

<template>
  <main>
    <section class="w-full">
      <Bio />
      <NuxtLink to="/about">About page</NuxtLink>
    </section>
    <MyFooter />
  </main>
</template>
