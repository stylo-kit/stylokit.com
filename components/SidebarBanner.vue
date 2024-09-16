<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-center px-[12px] pb-[16px]">
    <div
      class="flex flex-col gap-[24px] p-[16px] bg-zing-800 rounded-md sidebar-banner-shadow"
    >
      <div class="flex flex-col gap-[10px]">
        <span class="flex items-center gap-[6px] heading-5 text-white"
          ><Icon name="tabler:brand-framer" size="20px" /> Framer</span
        >
        <p class="body-2 text-zing-400">
          Design and ship your dream site. Zero code, maximum speed.
        </p>
      </div>

      <Button
        @click="
          navigateTo('https://www.framer.com/?via=dmytri_design', {
            external: true,
            open: {
              target: '_blank',
            },
          })
        "
        variant="purple"
        size="md"
        :rounded="false"
        >Get Started</Button
      >
    </div>
  </div>
</template>
