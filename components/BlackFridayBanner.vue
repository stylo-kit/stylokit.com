<script setup lang="ts">
  const appConfig = useAppConfig();
  const closed = useState<boolean>("blackFridayClosed", () => false);
</script>

<template>
  <div
    v-if="appConfig.blackFriday.enabled && !closed"
    class="grid min-h-[40px] w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible"
  >
    <div
      role="alert"
      class="relative block border border-zing-700 w-full text-base font-regular px-4 py-4 rounded-lg bg-gray-900 text-white flex"
    >
      <div class="mr-12">
        <p class="font-bold text-red-500">
          Black Friday Sale
          <span class="text-red-300">
            - Up to {{ appConfig.blackFriday.discount }}% off on all items!
          </span>
          <span
            title=""
            class="inline-flex items-center justify-center text-sm font-bold text-red-500 ml-4 duration-200 rounded-md"
          >
            Use Code
            <strong class="body-1 font-bold mx-2"
              >"{{ appConfig.blackFriday.code }}"</strong
            >
            on checkout.
          </span>
        </p>
      </div>
      <button
        class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 !absolute top-3 right-3"
        type="button"
        @click="closed = true"
      >
        <span
          class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-zing-400 hover:text-white"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>
