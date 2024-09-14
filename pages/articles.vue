<template>
  <main class="flex flex-col gap-8">
    <header class="flex flex-row justify-between">
      <h1 class="heading-3 text-primary">Articles</h1>
    </header>

    <Divider />

    <section class="flex flex-col pt-4 gap-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card 
          v-for="item in articles.data"
          :key="item.id"
          :title="item.title"
          :desc="item.subtitle">
        </Card>
      </div>
    </section>

    <Divider />

    <PageFooter />
  </main>
</template>

<script setup lang="ts">
import type { Article } from '~/types';

const { data: articles } = await useAPI<{data: Article[]}>('/articles');
</script>