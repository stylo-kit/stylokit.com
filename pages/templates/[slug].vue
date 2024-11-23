<script setup lang="ts">
  import type { Template } from "~/types";

  const route = useRoute();
  const slug = route.params.slug;
  const { data, error } = await useAsyncData("template-" + slug, () =>
    queryContent("/templates/" + slug).findOne()
  );

  useSeoMeta({
    title: data.value.seo.title,
    ogTitle: data.value.seo.title,
    description: data.value.seo.description,
    ogDescription: data.value.seo.description,
    ogImage: data.value.seo.image,
    twitterCard: "summary_large_image",
  });

  const { data: relatedTemplates } = await useAsyncData<Template[]>(
    slug + "-related",
    () =>
      queryContent("/templates/")
        .where({ id: { $ne: data.value?.id }, type: data.value?.type })
        .limit(4)
        .find()
        .then((items) =>
          items
            .map((item) => ({
              id: item.id,
              name: item.name,
              slug: item.slug,
              type: item.type,
              category: item.category,
              desc: item.desc,
              price: item.price,
              meta: item.meta,
              pages: item.pages,
              tags: item.tags,
              stats: item.stats,
              formats: item.formats,
              previewLink: item.previewLink,
              purchaseLink: item.purchaseLink,
              thumbImage: item.thumbImage,
              gallery: item.gallery,
            }))
            .reverse()
        )
  );
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
          <span class="text-zing-400 body-2">{{ data.name }}</span>
        </div>

        <BlackFridayBanner />

        <!-- Header -->
        <div class="flex flex-col gap-[56px]">
          <div class="flex flex-col md:flex-row justify-between gap-[48px]">
            <div class="flex flex-col gap-[16px]">
              <h1 class="heading-1 text-white">{{ data.name }}</h1>
              <p class="text-zing-400 body-1 max-w-[480px]">
                {{ data.desc }}
              </p>
            </div>

            <div
              class="flex flex-col md:flex-row gap-[12px] md:items-end md:justify-end"
            >
              <NuxtLink :to="data.previewLink" :external="true" target="_blank">
                <Button type="button" variant="gray" size="md" :rounded="false"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Preview</Button
                >
              </NuxtLink>
              <NuxtLink
                :to="data.purchaseLink"
                :external="true"
                target="_blank"
              >
                <Button
                  type="button"
                  variant="neo-green"
                  size="md"
                  :rounded="false"
                  >Purchase for
                  {{ data.price == 0 ? "Free" : "$" + data.price }}</Button
                >
              </NuxtLink>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>

    <!-- Slider -->
    <div class="w-full flex flex-row flex-nowrap overflow-hidden mt-[12px]">
      <ClientOnly>
        <SlideshowCarousel
          :items-to-show="1"
          :breakpoints="{
            768: {
              itemsToShow: 1.3,
              snapAlign: 'center',
            },
            1024: {
              itemsToShow: 1.5,
              snapAlign: 'center',
            },
            1280: {
              itemsToShow: 1.7,
              snapAlign: 'center',
            },
            1536: {
              itemsToShow: 3,
              snalAlign: 'center',
            },
          }"
          :touchDrag="true"
          :mouseDrag="true"
          :autoplay="3000"
          :wrapAround="true"
          :transition="500"
        >
          <SlideshowSlide v-for="(img, index) in data.gallery" :key="index">
            <div class="px-[12px]">
              <img
                :src="img"
                :alt="'Image ' + index"
                class="object-cover object-center rounded-lg border border-white/[.08]"
              />
            </div>
          </SlideshowSlide>

          <template #addons>
            <SlideshowNavigation />
            <SlideshowPagination />
          </template>
        </SlideshowCarousel>
      </ClientOnly>
    </div>

    <div class="mx-auto max-w-[1280px]">
      <PageContainer>
        <!-- Body -->
        <div
          class="flex flex-col md:flex-row justify-between gap-[64px] md:items-start"
        >
          <ContentRendererMarkdown
            :value="data.body"
            class="w-auto prose prose-invert prose-sm max-w-[720px] prose-p:text-zing-400 prose-p:text-[16px]"
          >
            <template #empty>
              <p>No content found</p>
            </template>
          </ContentRendererMarkdown>

          <div
            class="flex flex-col gap-[32px] min-w-[280px] sm:max-w-[280px] p-[24px] rounded-lg bg-gray-750 border border-white/[.05]"
          >
            <div v-if="data.pages.length > 0" class="flex flex-col gap-[12px]">
              <h6 class="heading-6 text-white">Pages</h6>
              <div class="flex flex-row flex-wrap gap-[10px]">
                <Badge
                  v-for="(page, index) in data.pages"
                  :key="index"
                  :variant="index == 0 ? 'neo' : 'gray'"
                  size="sm"
                  >{{ page }}</Badge
                >
              </div>
            </div>

            <div v-if="data.stats.length > 0" class="flex flex-col gap-[12px]">
              <h6 class="heading-6 text-white">Stats</h6>
              <ul class="flex flex-col list-disc list-inside gap-[8px]">
                <li
                  v-for="(stat, index) in data.stats"
                  :key="index"
                  class="text-zing-400 body-2"
                >
                  {{ stat }}
                </li>
              </ul>
            </div>

            <div
              v-if="data.formats.length > 0"
              class="flex flex-col gap-[12px]"
            >
              <h6 class="heading-6 text-white">Format</h6>
              <div class="flex flex-row gap-[8px]">
                <div
                  v-for="(format, index) in data.formats"
                  class="flex items-center justify-center rounded-full bg-black p-[6px]"
                  :key="index"
                  :title="format"
                >
                  <svg
                    v-if="format == 'framer'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-[20px]"
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
                  <svg
                    v-else-if="format == 'nuxt'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-[20px]"
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
                  <svg
                    v-else-if="format == 'figma'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-[20px]"
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
                </div>
              </div>
            </div>

            <div
              v-if="data.category == 'framer'"
              class="flex flex-col gap-[12px]"
            >
              <h6 class="heading-6 text-white">Support</h6>
              <ul class="flex flex-col list-disc list-inside gap-[8px]">
                <li class="text-zing-400">
                  <NuxtLink
                    to="https://www.framer.community/c/support/"
                    class="text-zing-400 body-2 hover:text-white"
                    >Get help from the community</NuxtLink
                  >
                </li>
                <li class="text-zing-400">
                  <NuxtLink
                    to="https://www.framer.community/c/requests/"
                    class="text-zing-400 body-2 hover:text-white"
                    >Feature Requests</NuxtLink
                  >
                </li>
                <li class="text-zing-400">
                  <NuxtLink
                    to="https://www.framer.community/home"
                    class="text-zing-400 body-2 hover:text-white"
                    >Framer Community</NuxtLink
                  >
                </li>
              </ul>
            </div>

            <div
              v-if="data.category == 'nuxt'"
              class="flex flex-col gap-[12px]"
            >
              <h6 class="heading-6 text-white">Support</h6>
              <ul class="flex flex-col list-disc list-inside gap-[8px]">
                <li class="text-zing-400">
                  <NuxtLink
                    to="https://github.com/nuxt"
                    class="text-zing-400 body-2 hover:text-white"
                    >Nuxt on Github</NuxtLink
                  >
                </li>
                <li class="text-zing-400">
                  <NuxtLink
                    to="https://nuxters.nuxt.com/"
                    class="text-zing-400 body-2 hover:text-white"
                    >Nuxters</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Related -->
        <div class="flex flex-col pt-[64px] pb-[32px] gap-[16px]">
          <SectionHeading to="/" buttonText="Browse all"
            >Similar products</SectionHeading
          >
          <TemplateGrid :items="relatedTemplates" />
        </div>

        <Divider class="mt-[44px]" />

        <PageFooter />
      </PageContainer>
    </div>
  </main>
</template>
