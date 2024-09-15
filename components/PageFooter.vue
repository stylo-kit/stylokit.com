<template>
  <footer class="flex flex-row justify-between items-center flex-wrap w-full gap-6">
    <div class="flex flex-row w-auto text-zing-500 body-2">
      © 2024 Stylokit. All rights reserved
    </div>

    <div class="flex flex-row w-auto gap-4">
      <NuxtLink to="/terms" class="text-zing-500 hover:text-white transition body-2" activeClass="text-white">Terms of Use</NuxtLink>
      <NuxtLink to="/privacy" class="text-zing-500 hover:text-white transition body-2" activeClass="text-white">Privacy Policy</NuxtLink>
      <NuxtLink to="/license" class="text-zing-500 hover:text-white transition body-2" activeClass="text-white">License</NuxtLink>
    </div>
  </footer>
</template>