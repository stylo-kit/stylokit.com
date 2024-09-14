<template>
  <button type="button" @click="handleClick" class="flex flex-col gap-1 py-4 px-5 bg-hover hover:bg-alpha-5">
    <h3 class="heading-6 text-primary">{{ title }}</h3>
    <p class="body-2 text-help">{{ desc }}</p>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    required: true,
    type: String,
    default: null,
  },
  desc: {
    required: false,
    type: String,
    default: null,
  },
  to: {
    required: true,
    type: String,
    default: null,
  },
});

function handleClick() {
  if (props.to) {
    if (props.to.startsWith('http://') || props.to.startsWith('https://')) {
      navigateTo(props.to, { external: true, open: { target: '_blank' } });
    } else {
      navigateTo(props.to);
    }
  }
}
</script>

<style scoped>
.search-result-item-hover {
  background-color: rgba(250, 249, 247, 0.06);
}
</style>