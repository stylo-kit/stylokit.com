<script setup lang="ts">
  const route = useRoute();
  const props = defineProps({
    to: {
      required: false,
      type: String,
      default: "#",
    },
    icon: {
      required: false,
      type: String,
      default: "#",
    },
  });

  const active = computed(() => {
    return props.to.startsWith("http://") || props.to.startsWith("https://")
      ? false
      : route.path == props.to;
  });
  const itemClass = computed(() => {
    return {
      "border-transparent hover:border-zing-600": !active.value,
      "border-white": active.value,
    };
  });

  const iconClass = computed(() => {
    return {
      "text-zing-500 group-hover:text-zing-200": !active.value,
      "text-zing-200": active.value,
    };
  });

  const textClass = computed(() => {
    return {
      "text-zing-400 group-hover:text-zing-200": !active.value,
      "text-zing-200": active.value,
    };
  });

  const sidebarOpen = useState<boolean>("sidebarOpen");
</script>

<template>
  <NuxtLink
    :to="to"
    :target="
      to.startsWith('http://') || to.startsWith('https://') ? '_blank' : '_self'
    "
    @click="sidebarOpen = false"
    class="h-[24px] relative flex flex-row items-center group overflow-hidden transition-all border-l-2"
    :class="itemClass"
  >
    <div
      class="relative w-full gap-[12px] px-[24px] flex flex-row items-center rounded"
    >
      <Icon :name="icon" size="20px" :class="iconClass" />
      <span class="body-2 font-normal" :class="textClass"><slot /></span>
    </div>
    <!-- <div v-show="active" class="absolute h-full w-px left-0 opacity-100" style="background: linear-gradient(180deg, rgba(162, 228, 53, 0) 0%, rgb(255, 72, 0) 49.82638888888889%, rgba(162, 228, 53, 0) 100%);"></div> -->
    <!-- <div v-show="active" class="absolute h-2 w-2 left-0 my-auto bg-brand-4 opacity-100" style="filter: blur(20px);"></div> -->
    <!-- <div v-show="active" class="absolute h-2 w-6 left-0 my-auto bg-brand-4 blur-xl opacity-100"></div> -->
  </NuxtLink>
</template>
