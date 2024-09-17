<script setup lang="ts">
  import type { Template } from "~/types";
  const runtimeConfig = useRuntimeConfig();

  interface ResponseInt {
    data: Template[];
  }

  const hash = useRoute().hash;
  const { data: framerTemplates, status: framerTemplatesStatus } =
    await useLazyAsyncData<ResponseInt>("framerTemplates", () =>
      $fetch(runtimeConfig.public.apiBase + "/categories/framer/templates")
    );
  const { data: nuxtTemplates, status: nuxtTemplatesStatus } =
    await useLazyAsyncData<ResponseInt>("nuxtTemplates", () =>
      $fetch(runtimeConfig.public.apiBase + "/categories/nuxt/templates")
    );
  const { data: figmaTemplates, status: figmaTemplatesStatus } =
    await useLazyAsyncData<ResponseInt>("figmaTemplates", () =>
      $fetch(runtimeConfig.public.apiBase + "/categories/figma/templates")
    );
</script>

<template>
  <main class="flex flex-col gap-[32px] px-[32px]">
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
            <TemplateGrid
              :items="framerTemplates?.data || []"
              :loading="framerTemplatesStatus == 'pending'"
            />
          </HeadlessTabPanel>
          <HeadlessTabPanel>
            <TemplateGrid
              :items="nuxtTemplates?.data || []"
              :loading="nuxtTemplatesStatus == 'pending'"
            />
          </HeadlessTabPanel>
          <HeadlessTabPanel>
            <TemplateGrid
              :items="figmaTemplates?.data || []"
              :loading="figmaTemplatesStatus == 'pending'"
            />
          </HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>
    </ClientOnly>

    <Divider />

    <PageFooter />
  </main>
</template>
