<script setup lang="ts">
  import type { Template } from "~/types";
  const runtimeConfig = useRuntimeConfig();

  const route = useRoute();
  const slug = route.params.slug;
  const { data: template } = await useLazyAsyncData<{ data: Template }>(
    "template__" + slug,
    () => $fetch(runtimeConfig.public.apiBase + "/templates/" + slug)
  );
  const { data: relatedTemplates } = await useLazyAsyncData<{
    data: Template[];
  }>("relatedTemplates", () =>
    $fetch(runtimeConfig.public.apiBase + "/templates/" + slug + "/related")
  );
  const { data: templateHtml } = await useLazyAsyncData(
    "templateHtml__" + slug,
    () => $fetch(runtimeConfig.public.apiBase + "/templates/" + slug + "/html")
  );

  // useSeoMeta(template.value.data.meta);
  useSeoMeta(template.value?.data.meta || {});
</script>

<template>
  <main v-if="template">
    <div class="mx-auto max-w-[1280px]">
      <PageContainer>
        <!-- Breadcrumbs -->
        <div class="flex flex-row gap-[8px] items-center justify-start">
          <NuxtLink to="/" class="text-zing-500 body-2 hover:text-white"
            >Home</NuxtLink
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[16px] text-zing-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <span class="text-zing-400 body-2">{{ template.data.name }}</span>
        </div>

        <!-- Header -->
        <div class="flex flex-col gap-[56px]">
          <div class="flex flex-col md:flex-row justify-between gap-[48px]">
            <div class="flex flex-col gap-[16px]">
              <h1 class="heading-1 text-white">{{ template.data.name }}</h1>
              <p class="text-zing-400 body-1 max-w-[480px]">
                {{ template.data.desc }}
              </p>
            </div>

            <div
              class="flex flex-col md:flex-row gap-[12px] md:items-end md:justify-end"
            >
              <Button
                @click="
                  navigateTo(template.data.previewLink, {
                    external: true,
                    open: {
                      target: '_blank',
                    },
                  })
                "
                variant="gray"
                size="md"
                :rounded="false"
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
              <Button
                @click="
                  navigateTo(template.data.purchaseLink, {
                    external: true,
                    open: {
                      target: '_blank',
                    },
                  })
                "
                variant="neo-green"
                size="md"
                :rounded="false"
                >Purchase for
                {{
                  template.data.price == 0 ? "Free" : "$" + template.data.price
                }}</Button
              >
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
          <SlideshowSlide
            v-for="(img, index) in template.data.gallery"
            :key="index"
          >
            <div class="px-[12px]">
              <img
                :src="img.imageUrl"
                :alt="img.caption"
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
          <article
            class="w-auto prose prose-invert prose-sm max-w-[720px] prose-p:text-zing-400 prose-p:text-[16px]"
            v-html="templateHtml"
          ></article>

          <div
            class="flex flex-col gap-[32px] min-w-[280px] sm:max-w-[280px] p-[24px] rounded-lg bg-gray-750 border border-white/[.05]"
          >
            <div
              v-if="template.data.pages.length > 0"
              class="flex flex-col gap-[12px]"
            >
              <h6 class="heading-6 text-white">Pages</h6>
              <div class="flex flex-row flex-wrap gap-[10px]">
                <Badge
                  v-for="(page, index) in template.data.pages"
                  :key="index"
                  :variant="index == 0 ? 'neo' : 'gray'"
                  size="sm"
                  >{{ page }}</Badge
                >
              </div>
            </div>

            <div
              v-if="template.data.stats.length > 0"
              class="flex flex-col gap-[12px]"
            >
              <h6 class="heading-6 text-white">Stats</h6>
              <ul class="flex flex-col list-disc list-inside gap-[8px]">
                <li
                  v-for="(stat, index) in template.data.stats"
                  :key="index"
                  class="text-zing-400 body-2"
                >
                  {{ stat }}
                </li>
              </ul>
            </div>

            <div
              v-if="template.data.formats.length > 0"
              class="flex flex-col gap-[12px]"
            >
              <h6 class="heading-6 text-white">Format</h6>
              <div class="flex flex-row gap-[8px]">
                <div
                  v-for="(format, index) in template.data.formats"
                  class="flex items-center justify-center rounded-full bg-black p-[6px]"
                  :key="index"
                  :title="format"
                >
                  <svg v-if="format == 'framer'" xmlns="http://www.w3.org/2000/svg" class="size-[20px]" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
                  </svg>
                  <svg v-else-if="format == 'nuxt'" xmlns="http://www.w3.org/2000/svg" class="size-[20px]" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12.146 8.583l-1.3 -2.09a1.046 1.046 0 0 0 -1.786 .017l-5.91 9.908a1.046 1.046 0 0 0 .897 1.582h3.913" />
                    <path d="M20.043 18c.743 0 1.201 -.843 .82 -1.505l-4.044 -7.013a.936 .936 0 0 0 -1.638 0l-4.043 7.013c-.382 .662 .076 1.505 .819 1.505h8.086z" />
                  </svg>
                  <svg v-else-if="format == 'figma'" xmlns="http://www.w3.org/2000/svg" class="size-[20px]" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
                    <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
                  </svg>
                </div>
              </div>
            </div>

            <div
              v-if="template.data.category == 'framer'"
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
              v-if="template.data.category == 'nuxt'"
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
        <section
          v-if="relatedTemplates?.data"
          class="flex flex-col pt-[64px] pb-[32px] gap-[16px]"
        >
          <SectionHeading to="/" buttonText="Browse all"
            >Similar products</SectionHeading
          >
          <TemplateGrid :items="relatedTemplates.data" />
        </section>

        <Divider class="mt-[44px]" />

        <PageFooter />
      </PageContainer>
    </div>
  </main>
</template>
