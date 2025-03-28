<script setup lang="ts">
  import type { Plan } from "~/types";

  const { data } = await useAsyncData("all-access", () =>
    queryContent("/all-access").findOne()
  );

  useSeoMeta({
    title: data.value?.seo.title,
    ogTitle: data.value?.seo.title,
    description: data.value?.seo.description,
    ogDescription: data.value?.seo.description,
    ogImage: data.value?.seo.image,
    twitterCard: "summary_large_image",
  });
</script>

<template>
  <main class="flex flex-col gap-[32px] md:px-[32px]">
    <section
      class="flex flex-col justify-center gap-[56px] pt-[64px] pb-[32px]"
    >
      <div
        class="flex flex-col items-center self-center max-w-[560px] gap-[32px]"
      >
        <div class="flex flex-col gap-[10px]">
          <h1 class="heading-1 text-white text-center">
            {{ data.header.title }}
          </h1>
          <p class="max-w-[480px] text-zing-400 body-1 text-center">
            {{ data.header.description }}
          </p>
        </div>
        <div class="flex flex-row w-auto flex-wrap gap-[24px]">
          <template v-for="logo in data.header.logos">
            <div
              v-if="logo == 'framer'"
              class="flex flex-row w-auto items-center gap-[4px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-[16px]"
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
              <span class="text-white body-3">Framer</span>
            </div>

            <div
              v-else-if="logo == 'nuxt'"
              class="flex flex-row w-auto items-center gap-[4px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-[16px]"
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
              <span class="text-white body-3">Nuxt</span>
            </div>

            <div
              v-else-if="logo == 'figma'"
              class="flex flex-row w-auto items-center gap-[4px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-[16px]"
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
              <span class="text-white body-3">Figma</span>
            </div>
          </template>
        </div>
      </div>

      <div class="flex flex-col gap-[32px]">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <PricingCardNew
            v-for="plan in data.plans"
            :key="plan.id"
            :variant="plan.variant"
            :title="plan.title"
            :subtitle="plan.subtitle"
            :price="plan.price"
            :discountPrice="plan.discountPrice"
            :features="plan.features"
            :link="plan.purchaseLink"
          />
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row items-center gap-[16px]">
            <span class="text-zing-50">Secure Payment Via</span>
            <SvgLemonsquuezyFull class="w-auto h-[18px]" />
          </div>
          <div class="flex flex-row items-center gap-[20px]">
            <SvgVisa class="w-auto h-[14px]" />
            <SvgPaypal class="w-auto h-[14px]" />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-[32px] pt-[32px]">
        <h2 class="heading-2 text-white">{{ data.features.heading }}</h2>
        <Divider />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          <div
            v-for="feature in data.features.items"
            class="flex flex-col gap-[6px] pb-[16px]"
          >
            <h6 class="heading-6 text-white">{{ feature.title }}</h6>
            <p class="text-zing-400 body-2">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Divider class="mt-[44px]" />

    <PageFooter />
  </main>
</template>
