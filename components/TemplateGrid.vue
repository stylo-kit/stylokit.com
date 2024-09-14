<script setup lang="ts">
import type { Template } from '~/types';
import type { PropType } from 'vue';

defineProps({
  items: {
    required: true,
    type: Array as PropType<Template[]>,
  }
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
    <TemplateCard
      v-for="template in items"
      :key="template.id"
      :template="template"
    />
  </div>
</template>