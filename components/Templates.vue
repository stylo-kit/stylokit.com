<script setup lang="ts">
  import type { Template } from "~/types";

  const selectedType = ref("all");

  const { data, refresh } = await useAsyncData<Template[]>("templates", () =>
    queryContent("/templates")
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
  const filteredData = computed(() =>
    data.value.filter((item) =>
      selectedType.value == "all" ? true : item.type == selectedType.value
    )
  );

  onMounted(() => {
    selectedType.value = "framer";
  });
</script>

<template>
  <div class="flex flex-col gap-[32px]">
    <div class="flex flex-row gap-[8px]">
      <Tab
        @click="selectedType = 'framer'"
        icon="tabler:brand-framer"
        label="Framer"
        :active="selectedType == 'framer'"
      />
      <Tab
        @click="selectedType = 'nuxt'"
        icon="tabler:brand-nuxt"
        label="Nuxt"
        :active="selectedType == 'nuxt'"
      />
      <Tab
        @click="selectedType = 'figma'"
        icon="tabler:brand-figma"
        label="UI Kit"
        :active="selectedType == 'figma'"
      />
    </div>

    <TemplateGrid :items="filteredData" />
  </div>
</template>
