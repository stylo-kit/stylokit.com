<script setup lang="ts">
import type { Template } from '~/types';

const { data: framerTemplates } = await useAPI<{data: Template[]}>('/categories/framer/templates');
const { data: nuxtTemplates } = await useAPI<{data: Template[]}>('/categories/nuxt/templates');
const { data: figmaTemplates } = await useAPI<{data: Template[]}>('/categories/figma/templates');
</script>

<template>
  <main class="flex flex-col gap-[32px] px-[32px]">
    <header class="flex flex-row justify-between">
      <h1 class="heading-3 text-primary">Explore</h1>
      <div class="flex flex-row gap-3">
        <Button @click="navigateTo('/all-access')" variant="neo-green" :rounded="false">All Access - $499</Button>
      </div>
    </header>

    <Divider />

    <ClientOnly>
      <HeadlessTabGroup>
        <HeadlessTabList class="flex flex-row gap-[8px]" v-slot="{ selectedIndex }">
          <TagTab icon="tabler:brand-framer" label="Framer" :active="selectedIndex == 0" />
          <TagTab icon="tabler:brand-nuxt" label="Nuxt" :active="selectedIndex == 1" />
          <TagTab icon="tabler:brand-figma" label="UI Kit" :active="selectedIndex == 2" />
        </HeadlessTabList>

        <HeadlessTabPanels>
          <HeadlessTabPanel>
            <TemplateGrid :items="framerTemplates.data" />
          </HeadlessTabPanel>
          <HeadlessTabPanel>
            <TemplateGrid :items="nuxtTemplates.data" />
          </HeadlessTabPanel>
          <HeadlessTabPanel>
            <TemplateGrid :items="figmaTemplates.data" />
          </HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>
    </ClientOnly>

    <Divider />

    <PageFooter />
  </main>
</template>