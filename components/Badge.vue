<template>
  <div class="flex items-center justify-center" :class="badgeClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    variant: {
      required: false,
      type: String,
      default: "brand", // brand, gray, square, green, strong-green, purple, neo, red
    },
    size: {
      required: false,
      type: String,
      default: "sm", // xs, sm
    },
  });

  const badgeClass = ref({
    "pt-[5px] pb-[3px] px-[8px] rounded-full heading-7 font-medium":
      props.size == "sm" && props.variant != "square",
    "py-1 px-2 rounded-full body-4 font-semibold":
      props.size == "xs" && props.variant != "square",
    "py-1 px-4 rounded-none body-2 bg-brand-4 text-primary":
      props.variant == "square",
    "badge-brand-fill border border-brand-5 text-brand-5":
      props.variant == "brand",
    "bg-zing-700 text-zing-400": props.variant == "gray",
    "badge-green-fill badge-green-color": props.variant == "green",
    "badge-strong-green-fill badge-strong-green-color":
      props.variant == "strong-green",
    "badge-purple-fill text-purple-400": props.variant == "purple",
    "badge-neo-fill text-neo-green-500": props.variant == "neo",
    "badge-red-fill badge-red-color": props.variant == "red",
  });
</script>
