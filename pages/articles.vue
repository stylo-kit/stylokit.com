<template>
  <main class="flex flex-col gap-8">
    <header class="flex flex-row justify-between">
      <h1 class="heading-3 text-primary">Articles</h1>
    </header>

    <Divider />

    <section class="flex flex-col pt-4 gap-4">
      <div
        v-if="status == 'success'"
        class="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Card
          v-for="item in articles?.data"
          :key="item.id"
          :title="item.title"
          :desc="item.desc"
        >
        </Card>
      </div>
    </section>

    <Divider />

    <PageFooter />
  </main>
</template>

<script setup lang="ts">
  import type { Article } from "~/types";
  const runtimeConfig = useRuntimeConfig();

  const { data: articles, status } = await useAsyncData<{ data: Article[] }>(
    "articles",
    () => $fetch(runtimeConfig.public.apiBase + "/articles")
  );
</script>
