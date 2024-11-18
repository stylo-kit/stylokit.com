<script setup lang="ts">
  const route = useRoute();
  const appConfig = useAppConfig();
  const slug = route.params.slug;
  const { data } = await useAsyncData("post-" + slug, () =>
    queryContent("/blog/").where({ slug: slug }).findOne()
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
  <main>
    <div class="mx-auto max-w-[1280px]">
      <PageContainer>
        <!-- Breadcrumbs -->
        <div class="flex flex-row gap-[8px] items-center justify-start">
          <NuxtLink to="/" class="text-zing-500 body-2 hover:text-white"
            >Home</NuxtLink
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-[16px] text-zing-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <NuxtLink to="/blog" class="text-zing-500 body-2 hover:text-white"
            >Blog</NuxtLink
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-[16px] text-zing-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span class="text-zing-400 body-2">{{ data.post.title }}</span>
        </div>

        <!-- Header -->
        <div class="flex flex-col gap-[56px]">
          <div class="flex flex-col gap-[18px]">
            <div class="flex flex-col gap-[16px]">
              <p class="body-2 text-zing-400">{{ data.post.date }}</p>
              <h1 class="heading-1 text-white">{{ data.post.title }}</h1>
            </div>
            <NuxtLink
              :to="appConfig.blog.author.link"
              :external="true"
              target="_blank"
              class="flex flex-row items-center gap-[16px] cursor-pointer"
            >
              <img
                :src="appConfig.blog.author.image"
                alt="Author"
                class="rounded-full object-cover object-center w-[40px] h-[40px]"
              />
              <div class="flex flex-col gap-[4px]">
                <span class="body-2 text-zing-300">{{
                  appConfig.blog.author.name
                }}</span>
                <p class="body-2 text-neo-green-600">
                  {{ appConfig.blog.author.handle }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </PageContainer>
    </div>

    <div class="mx-auto max-w-[1280px]">
      <PageContainer>
        <!-- Body -->
        <ContentRendererMarkdown
          :value="data.body"
          class="w-auto prose prose-invert prose-sm max-w-[1280px] prose-h4:heading-6 prose-h4:text-white prose-p:body-2 prose-p:text-zing-400 prose-li:text-zing-400 prose-a:text-neo-green-600 hover:prose-a:text-neo-green-800 prose-a:no-underline"
        >
          <template #empty>
            <p>No content found</p>
          </template>
        </ContentRendererMarkdown>

        <Divider class="mt-[44px]" />

        <PageFooter />
      </PageContainer>
    </div>
  </main>
</template>
