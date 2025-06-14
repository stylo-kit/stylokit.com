<template>
  <button class="font-medium flex flex-row items-center justify-center transition-all" :class="buttonClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    required: false,
    type: String,
    default: 'primary', // primary, secondary, ghost, inverse, link, neo-green, purple
  },
  size: {
    required: false,
    type: String,
    default: 'md', // sm, md, lg
  },
  rounded: {
    required: false,
    type: Boolean,
    default: true,
  }
});

const buttonClass = ref({
  'gap-1.5 px-3.5 py-1 body-2': props.size == 'sm' && props.variant != 'link',
  'gap-2 px-4 py-1.5 heading-6': props.size == 'md' && props.variant != 'link',
  'gap-2 px-5 py-2.5 heading-6': props.size == 'lg' && props.variant != 'link',

  'bg-brand-4 text-inverse button-primary-shadow hover:bg-brand-5': props.variant == 'primary',
  'bg-white/[.01] text-primary button-secondary-shadow hover:bg-alpha-5': props.variant == 'secondary',
  'bg-transparent text-primary hover:bg-alpha-5': props.variant == 'ghost',
  'bg-primary text-brand-5 button-inverse-shadow hover:bg-hover': props.variant == 'inverse',
  'bg-yellow-1 text-inverse button-yellow-shadow hover:bg-yellow-2': props.variant == 'yellow',
  'bg-purple-600 button-purple-shadow hover:bg-purple-500': props.variant == 'purple',
  'bg-zing-700 button-gray-shadow hover:bg-gray-750': props.variant == 'gray',
  'bg-neo-green-500 text-neo-green-950 button-neo-green-shadow hover:bg-neo-green-300': props.variant == 'neo-green',
  'bg-neo-green-950 button-neo-dark-shadow hover:bg-neo-green-900': props.variant == 'neo-dark',

  'text-primary hover:text-brand-4': props.variant == 'link',
  'gap-1.5': props.size == 'sm' && props.variant == 'link',
  'gap-2': (props.size == 'md' || props.size == 'lg') && props.variant == 'link',
  'rounded-full': props.rounded,
  'rounded-lg': !props.rounded,
});
</script>

<style scoped>
.button-primary-shadow {
  box-shadow: inset 0 1px 0px 0px #FFFFFF20;
}
.button-secondary-shadow {
  box-shadow: 0 4px 4px 0px #00000005, 0 2px 5px 0 #00000005, 0 0 0 1px #FFFFFF10, inset 0 -3px 4px -1px #FFFFFF05;
}
.button-inverse-shadow {
  box-shadow: inset 0 1px 0 0 #FFFFFF20;
}
.button-yellow-shadow {
  box-shadow: rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px
}
.button-purple-shadow {
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.30), 0 1px 2px 0 rgba(0, 0, 0, 0.25);
}
.button-gray-shadow {
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
}
.button-neo-green-shadow {
  box-shadow: inset 0 1px 0 0 rgba(25, 255, 255, 0.30), 0 1px 2px 0 rgba(0, 0, 0, 0.25);
}
.button-neo-dark-shadow {
  box-shadow: inset 0 1px 0 0 rgba(25, 255, 255, 0.10), 0 1px 2px 0 rgba(0, 0, 0, 0.25);
}
</style>