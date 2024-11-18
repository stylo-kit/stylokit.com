<script setup lang="ts">
  const appConfig = useAppConfig();
  const { data } = await useAsyncData("blog", () =>
    queryContent("/blog").findOne()
  );

  // const query: QueryBuilderParams = {
  //   path: "/blog",
  //   where: [{ "post.published": true }],
  //   sort: { "post.date": -1 },
  // };

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
  <main class="max-w-[768px] mx-auto flex flex-col gap-8 grow">
    <header class="flex flex-row justify-between">
      <div class="flex flex-col gap-[8px]">
        <h1 class="heading-3 text-primary">{{ data.header.title }}</h1>
        <p class="text-zing-400 body-2">
          {{ data.header.description }}
        </p>
      </div>
    </header>

    <Divider />

    <section class="flex flex-col pt-4 gap-4 grow">
      <ContentList
        :query="{
          path: '/blog',
          where: [{ 'post.published': true }],
          sort: [{ 'post.date': -1 }],
        }"
      >
        <template #default="{ list }">
          <div class="grid grid-cols-1 gap-[64px]">
            <template v-for="(item, index) in list">
              <NuxtLink
                :to="'/blog/' + item.slug"
                class="grid grid-cols-3 gap-[32px] group relative"
              >
                <div class="flex flex-col gap-[16px] col-span-2">
                  <div class="flex flex-row items-center gap-[8px]">
                    <img
                      :src="appConfig.blog.author.image"
                      alt="Author"
                      class="rounded-full object-cover object-center w-[25px] h-[25px]"
                    />
                    <span class="body-2 text-zing-300">{{
                      appConfig.blog.author.name
                    }}</span>
                  </div>
                  <div class="flex flex-col gap-[8px]">
                    <h3 class="heading-3">{{ item.post.title }}</h3>
                    <p class="text-zing-400 body-2">
                      {{ item.post.description }}
                    </p>
                  </div>
                  <span class="body-2 text-zing-500 text-left">
                    {{ item.post.date }}
                  </span>
                </div>
                <div class="flex items-center">
                  <img
                    :src="item.post.image"
                    alt="Cover"
                    class="rounded-[8px] object-cover object-center"
                  />
                </div>
              </NuxtLink>
            </template>
          </div>
        </template>
        <template #not-found>
          <p>No articles found</p>
        </template>
      </ContentList>
    </section>

    <Divider class="mt-[44px]" />

    <PageFooter />
  </main>
</template>
