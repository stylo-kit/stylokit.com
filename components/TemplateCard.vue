<script setup lang="ts">
  import type { Template } from "~/types";
  defineProps({
    template: {
      required: true,
      type: Object as PropType<Template>,
    },
  });
</script>

<template>
  <NuxtLink
    :to="'/templates/' + template.slug"
    class="flex flex-col relative group gap-[12px]"
  >
    <div
      class="relative grow transition group-hover:-translate-y-1 duration-300 w-full h-[208px] md:h-auto overflow-hidden"
    >
      <img
        v-if="template.thumbImage"
        :src="template.thumbImage"
        alt="Image"
        class="w-full h-[208px] md:h-full object-cover object-center rounded-md border border-white/10"
      />
      <div
        @click.prevent="
          navigateTo(template.previewLink, {
            external: true,
            open: {
              target: '_blank',
            },
          })
        "
        class="flex items-center justify-center p-[6px] rounded-md template-card-icon-button-bg absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-[20px] text-white font-regular"
        >
          <path
            fill-rule="evenodd"
            d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-col gap-[2px]">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row gap-[8px] items-center justify-center">
          <h5 class="heading-5 text-white">{{ template.name }}</h5>
          <Badge
            v-for="tag in template.tags"
            :variant="
              tag.toLowerCase() == 'popular'
                ? 'neo'
                : tag.toLowerCase() == 'new'
                ? 'green'
                : tag.toLowerCase() == 'gift'
                ? 'red'
                : 'gray'
            "
            size="xs"
            >{{ tag }}</Badge
          >
        </div>
        <span v-if="template.price > 0" class="body-2 text-zing-500"
          >${{ template.price }}</span
        >
        <span v-else class="body-2 text-purple-400">Free</span>
      </div>
      <div
        class="flex flex-row justify-start items-center flex-nowrap gap-[8px]"
      >
        <span class="body-2 text-zing-500">{{ template.category }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
  .template-card-icon-button-bg {
    background: rgba(9, 9, 11, 0.4);
    backdrop-filter: blur(8px);
  }
</style>
