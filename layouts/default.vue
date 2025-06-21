<template>
  <div class="flex flex-col lg:flex-row justify-center items-start max-w-3xl mx-auto pt-8 lg:pt-32">
    <LeftNav class="hidden lg:block m-4 flex-none w-36 sticky top-8" />
    <div class="w-full lg:w-auto">
      <div class="lg:hidden mb-8 flex justify-center space-x-6">
        <a href="/" class="text-blue-400 hover:text-blue-300 transition-colors">Home</a>
        <a href="/#experience" class="text-blue-400 hover:text-blue-300 transition-colors">Experience</a>
        <a href="/#speaking" class="text-blue-400 hover:text-blue-300 transition-colors">Speaking</a>
      </div>
      <slot />
    </div>
  </div>
</template>
