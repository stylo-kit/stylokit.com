<script setup lang="ts">
  const { data } = await useAsyncData("affiliate", () =>
    queryContent("/affiliate").findOne()
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
    <section class="flex flex-col md:py-[32px] gap-[64px]">
      <div
        class="flex flex-col gap-[32px] p-[32px] justify-center items-center bg-gray-750 border-t border-white/[.08] rounded-lg"
      >
        <SvgLemonsqueezy class="w-[40px] h-[40px]" />
        <div class="flex flex-col items-center justify-start gap-[12px]">
          <h2 class="heading-2 text-white text-center">
            {{ data.header.title }}
          </h2>
          <p class="max-w-[640px] text-zing-400 text-center">
            {{ data.header.description }}
          </p>
        </div>
        <NuxtLink
          v-if="data.header.button"
          :to="data.header.button.url"
          :external="true"
          target="_blank"
        >
          <Button variant="purple" :rounded="false" size="lg">{{
            data.header.button.text
          }}</Button>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
        <div
          v-for="feature in data.features"
          class="flex flex-col gap-[6px] pb-[16px]"
        >
          <h6 class="heading-6 text-white">{{ feature.title }}</h6>
          <p class="text-zing-400 body-2">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>

    <Divider class="mt-[44px]" />

    <PageFooter />
  </main>
</template>
