<script setup lang="ts">
const props = defineProps({
  icon: {
    required: false,
    type: String,
    default: null
  },
  label: {
    required: true,
    type: String
  },
  active: {
    required: false,
    type: Boolean,
    default: false,
  }
});

const tagClass = computed(() => {
  return {
    'tag-bg transition hover:tag-bg-hover hover:tag-shadow': !props.active,
    'tag-shadow bg-zing-700': props.active
  }
});

const iconClass = computed(() => {
  return {
    'text-zing-400 group-hover:text-zing-100 transition': !props.active,
    'text-zing-100': props.active,
  }
});

const textClass = computed(() => {
  return {
    'text-zing-400 font-regular group-hover:text-zing-100 transition': !props.active,
    'text-zing-100': props.active,
  }
});
</script>

<template>
  <HeadlessTab as="a" :href="'#' + label.toLowerCase()" class="flex flex-row items-center justify-center flex-nowrap gap-[8px] py-[8px] px-[16px] overflow-hidden group relative transition rounded-md outline-none" :class="tagClass">
    <Icon v-if="icon" :name="icon" size="18px" :class="iconClass" />
    <span class="body-2" :class="textClass">{{ label }}</span>
  </HeadlessTab>
</template>