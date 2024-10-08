<template>
  <div class="flex flex-col gap-2.5 p-3 bg-hover-none hover:bg-hover focus:bg-hover border border-alpha-5 rounded-lg transition-all duration-500 group" :class="{
    'cursor-pointer': to != null && to != undefined,
  }" @click="handleClick" @mouseover="isHover = true" @mouseleave="isHover = false">
    <img v-if="image" :src="image" alt="Image" class="aspect-card-preview w-full object-center object-cover border border-alpha-5 rounded" />
    <div class="flex flex-col gap-1">
      <div class="relative flex flex-row gap-1.5" :class="{'pr-6': subtitle == null || subtitle == undefined}">
        <span class="heading-6 text-tertiary">{{ title }}</span>
        <Badge v-if="badge" :variant="badgeVariant" size="xs">{{ badge }}</Badge>

        <div v-if="subtitle" class="ml-auto heading-6 text-tertiary">{{ subtitle }}</div>
        <div v-else class="absolute right-0 w-6 ml-auto">
          <HeadlessTransitionRoot
            :show="isHover"
            enter="absolute transition duration-200 ease-out"
            enter-from="transform scale-95 opacity-0 -translate-x-4 translate-y-4"
            enter-to="transform scale-100 opacity-100 translate-x-0 translate-y-0"
            leave="absolute transition duration-75 ease-in"
            leave-from="transform scale-100 opacity-100 translate-x-0 translate-y-0"
            leave-to="transform scale-95 opacity-0 -translate-x-4 translate-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-[20px] icon-hover">
              <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
            </svg>
          </HeadlessTransitionRoot>
        </div>
      </div>
      <div class="flex body-2 text-help">
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    required: false,
    type: String,
    default: null
  },
  to: {
    required: false,
    type: String,
    default: null
  },
  title: {
    required: false,
    type: String,
    default: 'Untitled',
  },
  subtitle: {
    required: false,
    type: String,
    default: null
  },
  desc: {
    required: false,
    type: String,
    default: null
  },
  badge: {
    required: false,
    type: String,
    default: null
  },
  badgeVariant: {
    required: false,
    type: String,
    default: 'brand'
  }
});

const isHover = ref(false);

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