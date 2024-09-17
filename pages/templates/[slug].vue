<script setup lang="ts">
  import type { Template } from "~/types";
  const runtimeConfig = useRuntimeConfig();

  const route = useRoute();
  const slug = route.params.slug;
  const { data: template } = await useAsyncData<{ data: Template }>(
    "template__" + slug,
    () => $fetch(runtimeConfig.public.apiBase + "/templates/" + slug)
  );
  const { data: relatedTemplates } = await useAsyncData<{
    data: Template[];
  }>("relatedTemplates", () =>
    $fetch(runtimeConfig.public.apiBase + "/templates/" + slug + "/related")
  );
  const { data: templateHtml } = await useAsyncData(
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
          <Icon
            name="heroicons:chevron-right"
            size="16px"
            class="text-zing-500"
          />
          <span class="text-zing-400 body-2">{{ template.data.name }}</span>
        </div>
  
        <!-- Header -->
        <div class="flex flex-col gap-[56px]">
          <div class="flex flex-row justify-between">
            <div class="flex flex-col gap-[16px]">
              <h1 class="heading-1 text-white">{{ template.data.name }}</h1>
              <p class="text-zing-400 body-1 max-w-[480px]">
                {{ template.data.desc }}
              </p>
            </div>
  
            <div class="flex flex-row gap-[12px] items-end justify-end">
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
                ><Icon name="heroicons:eye" /> Preview</Button
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
      <div class="flex flex-row justify-between gap-[64px]">
        <article
          class="prose prose-invert prose-sm max-w-[720px]"
          v-html="templateHtml"
        ></article>

        <div
          class="flex flex-col gap-[32px] w-[280px] p-[24px] rounded-lg bg-gray-750 border border-white/[.05]"
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
                <Icon
                  v-if="format == 'framer'"
                  name="tabler:brand-framer"
                  size="20px"
                />
                <Icon
                  v-else-if="format == 'nuxt'"
                  name="tabler:brand-nuxt"
                  size="20px"
                />
                <Icon
                  v-else-if="format == 'figma'"
                  name="tabler:brand-figma"
                  size="20px"
                />
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

      <!-- Footer -->
      <PageFooter />
    </PageContainer>
    </div>
  </main>
</template>
