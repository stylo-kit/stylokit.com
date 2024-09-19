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
      <template v-if="icon == 'heroicons:home'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[20px]" :class="iconClass">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </template>
      <template v-else-if="icon == 'heroicons:tag'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[20px]" :class="iconClass">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
      </template>
      <template v-else-if="icon == 'heroicons:currency-dollar'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[20px]" :class="iconClass">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </template>
      <template v-else-if="icon == 'heroicons:pencil'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[20px]" :class="iconClass">
          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>
      </template>
      <template v-else-if="icon == 'tabler:brand-x'">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-[20px]" :class="iconClass" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      </template>
      <span class="body-2 font-normal" :class="textClass"><slot /></span>
    </div>
  </NuxtLink>
</template>
