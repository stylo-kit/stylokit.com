<template>
  <button class="flex flex-row items-center justify-center transition-all rounded gap-2.5 px-5 py-2.5 heading-6 text-inverse submit-button-fill hover:submit-button-fill-hover" :disabled="loading">
    <template v-if="loading">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[16px]">
        <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
      </svg>
    </template>
    <template v-else>
      <slot />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[16px]">
        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </template>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  loading: {
    required: false,
    type: Boolean,
    default: false,
  }
})
</script>

<style scoped>
.submit-button-fill {
  background-color: #FAF9F7;
}
.submit-button-fill-hover {
  background-color: #D1CEC7;
}
</style>