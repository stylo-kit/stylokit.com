<template>
  <div class="w-full flex flex-row gap-5 items-center group cursor-pointer" @click="handleClick" @mouseover="isHover = true" @mouseleave="isHover = false">
    <h4 class="heading-4 text-primary">
      <slot />
    </h4>

    <HeadlessTransitionRoot
      :show="isHover"
      enter="transition duration-300 ease-out"
      enter-from="transform scale-95 opacity-0 -translate-x-8"
      enter-to="transform scale-100 opacity-100 translate-x-0"
      leave="transition duration-75 ease-in"
      leave-from="transform scale-100 opacity-100 translate-x-0"
      leave-to="transform scale-95 opacity-0 -translate-x-8">
      <button type="button" class="flex flex-row items-center justify-center gap-0.5 text-purple-400">
        <span class="text-purple-400 body-1">{{ buttonText }}</span>
        <HeadlessTransitionChild
          as="div"
          class="flex items-center"
          enter="transition duration-300 ease-out delay-200"
          enter-from="transform scale-95 opacity-0 -translate-x-8"
          enter-to="transform scale-100 opacity-100 translate-x-0"
          leave="transition duration-75 ease-in"
          leave-from="transform scale-100 opacity-100 translate-x-0"
          leave-to="transform scale-95 opacity-0 -translate-x-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[16px]">
            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </HeadlessTransitionChild>
      </button>
    </HeadlessTransitionRoot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    required: false,
    type: String,
    default: '#',
  },
  buttonText: {
    required: false,
    type: String,
    default: 'Explore all',
  },
});
const isHover = ref(false);

function handleClick() {
  navigateTo(props.to);
}
</script>