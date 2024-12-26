<script setup lang="ts">
  import { HeadlessTransitionChild } from "#build/components";

  defineProps({
    closeable: {
      required: false,
      type: Boolean,
      default: true,
    },
  });

  const isOpen = defineModel<boolean>();

  function setIsOpen(value: boolean) {
    isOpen.value = value;
  }
</script>

<template>
  <HeadlessTransitionRoot :show="isOpen" appear>
    <div class="fixed right-0 bottom-0 p-[32px] pr-[42px]">
      <div
        class="max-w-[394px] flex flex-row gap-[12px] p-[12px] h-auto banner-bg banner-shadow banner-border justify-start items-start"
      >
        <p class="banner-text-color font-medium text-[16px] leading-[24px]">
          <slot />
        </p>
        <button
          class="flex items-center justify-center p-[6px] banner-icon-text-color hover:banner-icon-text-hover"
          @click="setIsOpen(false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-[20px]"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </HeadlessTransitionRoot>
</template>
