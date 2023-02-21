<template>
  <aside>
    <LogoButton />
    <section class="flex flex-col mt-4 space-y-3">
      <div v-for="item of navItems">
        <LeftNavButton :to="item.to" :text="item.text" />
      </div>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { LeftNavItem } from '~/components/LeftNavButton.vue';

const navItems = new Array<LeftNavItem>(
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/about',
    text: 'About',
  }
);
</script>
