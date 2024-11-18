<script setup lang="ts">
  const hash = useRoute().hash;
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

    <ClientOnly>
      <HeadlessTabGroup
        :default-index="
          hash == '#framer'
            ? 0
            : hash == '#nuxt'
            ? 1
            : hash == '#ui kit'
            ? 2
            : 0
        "
      >
        <HeadlessTabList
          class="flex flex-row gap-[8px]"
          v-slot="{ selectedIndex }"
        >
          <TagTab
            icon="tabler:brand-framer"
            label="Framer"
            :active="selectedIndex == 0"
          />
          <TagTab
            icon="tabler:brand-nuxt"
            label="Nuxt"
            :active="selectedIndex == 1"
          />
          <TagTab
            icon="tabler:brand-figma"
            label="UI Kit"
            :active="selectedIndex == 2"
          />
        </HeadlessTabList>

        <HeadlessTabPanels>
          <HeadlessTabPanel>
            <ContentList
              :query="{
                path: '/templates',
                where: [{ type: 'framer' }],
              }"
            >
              <template #default="{ list }">
                <TemplateGrid :items="list.reverse()" />
              </template>
              <template #not-found>
                <p class="body-2 text-zing-400">No templates found.</p>
              </template>
            </ContentList>
          </HeadlessTabPanel>
          <HeadlessTabPanel>
            <ContentList
              :query="{
                path: '/templates',
                where: [{ type: 'nuxt' }],
              }"
            >
              <template #default="{ list }">
                <TemplateGrid :items="list.reverse()" />
              </template>
              <template #not-found>
                <p class="body-2 text-zing-400">No templates found.</p>
              </template>
            </ContentList>
          </HeadlessTabPanel>
          <HeadlessTabPanel>
            <ContentList
              :query="{
                path: '/templates',
                where: [{ type: 'ui-kit' }],
              }"
            >
              <template #default="{ list }">
                <TemplateGrid :items="list.reverse()" />
              </template>
              <template #not-found>
                <p class="body-2 text-zing-400">No templates found.</p>
              </template>
            </ContentList>
          </HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>
    </ClientOnly>

    <Divider class="mt-[44px]" />

    <PageFooter />
  </main>
</template>
