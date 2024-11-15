<script setup lang="ts">
  const appConfig = useAppConfig();
</script>

<template>
  <div
    v-if="
      appConfig.sidebar.author.designer.display === 'block' ||
      appConfig.sidebar.author.developer.display === 'block'
    "
    class="flex flex-col gap-[4px] px-[24px] py-[16px] border-t border-zing-800"
  >
    <p
      v-if="appConfig.sidebar.author.designer.display === 'block'"
      class="text-zing-500 body-2"
    >
      <span>DESIGN BY</span>
      <NuxtLink
        :to="appConfig.sidebar.author.designer.link"
        target="_blank"
        class="text-zing-400 hover:text-zing-100 ml-1"
        >{{ appConfig.sidebar.author.designer.handle }}</NuxtLink
      >
    </p>
    <p
      v-if="appConfig.sidebar.author.developer.display === 'block'"
      class="text-zing-500 body-2"
    >
      <span>DEVELOPED BY</span>
      <NuxtLink
        :to="appConfig.sidebar.author.developer.link"
        target="_blank"
        class="text-zing-400 hover:text-zing-100 ml-1"
        >{{ appConfig.sidebar.author.developer.handle }}</NuxtLink
      >
    </p>
  </div>
</template>
