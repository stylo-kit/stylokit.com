<template>
  <main class="flex flex-col gap-8">
    <header class="flex flex-row justify-between">
      <h1 class="heading-3 text-primary">Typography</h1>
      <div class="flex flex-row gap-3">
        <Button @click="submitDialogOpen = true" variant="secondary">Submit</Button>
        <Button @click="navigateTo('https://stylokit.lemonsqueezy.com/buy/5eed5001-9087-405b-a414-d654b9597e5d', {external: true})" variant="primary">Buy Template</Button>
      </div>
    </header>

    <Divider />

    <section class="flex flex-col pt-4 gap-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card 
          v-for="item in typography?.data"
          :key="item.id"
          :title="item.name"
          :to="item.url" 
          :image="item.image"
          :desc="item.category"
          :badge="item.new ? 'NEW' : ''">
        </Card>
      </div>
    </section>

    <SubmitDialog v-model="submitDialogOpen" />
  </main>
</template>

<script setup lang="ts">
const submitDialogOpen = ref(false);
const { data: typography } = await useAsyncData(() => $fetch('/api/websites?tag=typography'));
</script>