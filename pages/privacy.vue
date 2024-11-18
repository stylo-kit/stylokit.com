<script setup lang="ts">
  const { data } = await useAsyncData("privacy", () =>
    queryContent("/privacy").findOne()
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
  <div class="w-full flex flex-col gap-[96px] px-[32px] pb-[32px] pt-[64px]">
    <div class="max-w-[768px] mx-auto flex flex-col gap-[48px]">
      <div class="flex flex-col justify-center items-center gap-[16px]">
        <h2 class="font-regular text-zing-400 body">{{ data.header.date }}</h2>
        <h1 class="heading-1 text-white">{{ data.header.title }}</h1>
        <p class="body text-zing-400 text-center max-w-[640px]">
          {{ data.header.description }}
        </p>
      </div>

      <ContentRendererMarkdown
        :value="data"
        class="prose prose-invert prose-sm max-w-[720px] prose-h4:heading-6 prose-h4:text-white prose-p:body-2 prose-p:text-zing-400 prose-li:text-zing-400 prose-a:text-neo-green-600 hover:prose-a:text-neo-green-800 prose-a:no-underline"
      >
        <template #empty>
          <p>No content found</p>
        </template>
      </ContentRendererMarkdown>
    </div>

    <Divider class="mt-[44px]" />

    <PageFooter />
  </div>
</template>
