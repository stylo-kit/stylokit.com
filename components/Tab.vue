<script setup lang="ts">
  const props = defineProps({
    icon: {
      required: false,
      type: String,
      default: null,
    },
    label: {
      required: true,
      type: String,
    },
    active: {
      required: false,
      type: Boolean,
      default: false,
    },
  });

  const tagClass = computed(() => {
    return {
      "tag-bg transition hover:tag-bg-hover hover:tag-shadow": !props.active,
      "tag-shadow bg-zing-700": props.active,
    };
  });

  const iconClass = computed(() => {
    return {
      "text-zing-400 group-hover:text-zing-100 transition": !props.active,
      "text-zing-100": props.active,
    };
  });

  const textClass = computed(() => {
    return {
      "text-zing-400 font-regular group-hover:text-zing-100 transition":
        !props.active,
      "text-zing-100": props.active,
    };
  });
</script>

<template>
  <button
    type="button"
    class="flex flex-row items-center justify-center flex-nowrap gap-[8px] py-[8px] px-[16px] overflow-hidden group relative transition rounded-md outline-none"
    :class="tagClass"
  >
    <template v-if="icon == 'tabler:brand-framer'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-[18px]"
        :class="iconClass"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
      </svg>
    </template>
    <template v-if="icon == 'tabler:brand-nuxt'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-[18px]"
        :class="iconClass"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12.146 8.583l-1.3 -2.09a1.046 1.046 0 0 0 -1.786 .017l-5.91 9.908a1.046 1.046 0 0 0 .897 1.582h3.913"
        />
        <path
          d="M20.043 18c.743 0 1.201 -.843 .82 -1.505l-4.044 -7.013a.936 .936 0 0 0 -1.638 0l-4.043 7.013c-.382 .662 .076 1.505 .819 1.505h8.086z"
        />
      </svg>
    </template>
    <template v-if="icon == 'tabler:brand-figma'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-[18px]"
        :class="iconClass"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path
          d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"
        />
        <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
      </svg>
    </template>
    <span class="body-2" :class="textClass">{{ label }}</span>
  </button>
</template>
