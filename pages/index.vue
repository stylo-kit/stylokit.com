<script setup lang="ts">
  const { data } = await useAsyncData("index", () =>
    queryContent("/").findOne()
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
    <header class="flex flex-row justify-between">
      <h1 class="heading-3 text-primary">Explore</h1>
      <div class="flex flex-row gap-3">
        <Button
          @click="
            navigateTo(
              'https://stylokit.lemonsqueezy.com/buy/2a2d90e2-5830-4644-8129-ab79d47cf89e',
              { external: true, open: { target: '_blank' } }
            )
          "
          variant="neo-green"
          :rounded="false"
          >All Access - $499</Button
        >
      </div>
    </header>

    <Divider />

    <Templates />

    <Divider class="mt-[44px]" />

    <PageFooter />
  </main>
</template>
