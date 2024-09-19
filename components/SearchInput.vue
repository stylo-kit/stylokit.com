<template>
  <div class="flex flex-row rounded gap-2.5 px-3 py-2.5 bg-hover-none group hover:bg-hover focus-within:bg-hover transition-all" :class="{'cursor-pointer': pointer}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[20px] text-placeholder group-hover:text-secondary group-focus:text-secondary transition-all">
      <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
    </svg>
    <input type="text" v-model="model" :placeholder="placeholder" class="placeholder:text-placeholder group-hover:placeholder:text-secondary text-secondary outline-none bg-transparent body-2  transition-all" :class="{'cursor-pointer': pointer}">
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
const props = defineProps({
  placeholder: {
    required: false,
    type: String,
    default: 'Search',
  },
  pointer: {
    required: false,
    type: Boolean,
    default: false,
  },
});
</script>