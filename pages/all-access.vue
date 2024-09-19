<script setup lang="ts">
  import type { Plan } from "~/types";
  const runtimeConfig = useRuntimeConfig();
  const { data: plans, status } = await useAsyncData<{ data: Plan[] }>(
    "plans",
    () => $fetch(runtimeConfig.public.apiBase + "/plans")
  );
  const features = [
    {
      title: "All products",
      desc: "Gain access to our entire collection of Framer & Nuxt templates, ensuring you have everything you need for your projects.",
    },
    {
      title: "No Subscription Required",
      desc: "Enjoy full access to the bundle without any recurring fees or subscriptions, giving you freedom and flexibility.",
    },
    {
      title: "Unlimited Projects",
      desc: "Use the templates for as many projects as you like, allowing you to unleash your creativity without constraints.",
    },
    {
      title: "Lifetime Access",
      desc: "Get lifetime access to the bundle, ensuring you can use the templates whenever you need them, for as long as you need them.",
    },
    {
      title: "Free Updates",
      desc: "Receive free updates for all included products, ensuring they remain current and compatible with the latest software versions.",
    },
    {
      title: "Support",
      desc: "Access dedicated support to assist you with any questions or issues you may encounter while using the templates, ensuring a smooth experience.",
    },
  ];
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
          <h1 class="heading-1 text-white text-center">All-Access Pass</h1>
          <p class="max-w-[480px] text-zing-400 body-1 text-center">
            Unlock permanent access to all themes and future additions for a
            one-time payment
          </p>
        </div>
        <div class="flex flex-row w-auto flex-wrap gap-[24px]">
          <div class="flex flex-row w-auto items-center gap-[4px]">
            <Icon name="tabler:brand-framer" size="16px" />
            <span class="text-white body-3">Framer</span>
          </div>

          <div class="flex flex-row w-auto items-center gap-[4px]">
            <Icon name="tabler:brand-nuxt" size="16px" />
            <span class="text-white body-3">Nuxt</span>
          </div>

          <div class="flex flex-row w-auto items-center gap-[4px]">
            <Icon name="tabler:brand-figma" size="16px" />
            <span class="text-white body-3">Figma</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-[32px]">
        <div
          v-if="status == 'success'"
          class="grid grid-cols-1 lg:grid-cols-3 gap-[20px]"
        >
          <PricingCardNew
            v-for="plan in plans?.data"
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
        <h2 class="heading-2 text-white">What's included</h2>
        <Divider />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          <div
            v-for="feature in features"
            class="flex flex-col gap-[6px] pb-[16px]"
          >
            <h6 class="heading-6 text-white">{{ feature.title }}</h6>
            <p class="text-zing-400 body-2">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Divider class="mt-[44px]" />

    <PageFooter />
  </main>
</template>
