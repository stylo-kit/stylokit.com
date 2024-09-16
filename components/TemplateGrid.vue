<script setup lang="ts">
  import type { Template } from "~/types";
  import type { PropType } from "vue";

  defineProps({
    items: {
      required: true,
      type: Array as PropType<Template[]>,
    },
    loading: {
      required: false,
      type: Boolean,
      default: false
    }
  });
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
    <template v-if="loading">
      <div class="flex flex-col relative group gap-[12px]" v-for="i in 8">
        <div class="w-full h-[290px] bg-[rgba(9,9,11,0.4)] border border-white/5 rounded animate-pulse"></div>
        <div class="w-[150px] h-[20px] bg-[rgba(9,9,11,0.4)] border border-white/5 rounded animate-pulse"></div>
        <div class="w-[80px] h-[20px] bg-[rgba(9,9,11,0.4)] border border-white/5 rounded animate-pulse"></div>
      </div>
    </template>
    <template v-else>
      <TemplateCard
        v-for="template in items"
        :key="template.id"
        :template="template"
      />
    </template>
  </div>
</template>
