<template>
  <div
    class="flex flex-col lg:flex-row justify-center items-start max-w-3xl mx-auto pt-8 lg:pt-32"
  >
    <LeftNav class="hidden lg:block m-4 flex-none w-36 sticky top-8" />

    <!-- Mobile Header -->
    <div class="w-full lg:w-auto">
      <div
        class="lg:hidden mb-8 sticky top-0 bg-neutral-900 py-4 flex justify-center space-x-2 z-10"
      >
        <a
          href="/"
          class="rounded px-3 py-2 font-caveat text-2xl text-gray-200 hover:bg-zinc-700 transition-colors"
          >Home</a
        >
        <a
          href="/#experience"
          class="rounded px-3 py-2 font-caveat text-2xl text-gray-200 hover:bg-zinc-700 transition-colors"
          >Experience</a
        >
        <a
          href="/#speaking"
          class="rounded px-3 py-2 font-caveat text-2xl text-gray-200 hover:bg-zinc-700 transition-colors"
          >Speaking</a
        >
      </div>
      <slot />
    </div>
  </div>
</template>
