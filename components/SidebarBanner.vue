<script setup lang="ts">
  const appConfig = useAppConfig();
</script>

<template>
  <div
    v-if="appConfig.sidebar.banner.display === 'block'"
    class="flex items-center justify-center px-[12px] pb-[16px]"
  >
    <div
      class="flex flex-col gap-[24px] p-[16px] bg-zing-800 rounded-md sidebar-banner-shadow"
    >
      <div class="flex flex-col gap-[10px]">
        <span class="flex items-center gap-[6px] heading-5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-[20px]"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
          </svg>
          {{ appConfig.sidebar.banner.title }}</span
        >
        <p class="body-2 text-zing-400">
          {{ appConfig.sidebar.banner.description }}
        </p>
      </div>

      <Button
        @click="
          navigateTo(appConfig.sidebar.banner.button.link, {
            external: true,
            open: {
              target: '_blank',
            },
          })
        "
        variant="purple"
        size="md"
        :rounded="false"
        >{{ appConfig.sidebar.banner.button.text }}</Button
      >
    </div>
  </div>
</template>
