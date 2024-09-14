<script setup lang="ts">
defineProps(['code', 'error', 'message'])
</script>

<template>
  <main class="flex flex-col items-center gap-10">
    <div class="flex flex-col gap-6 max-w-2xl">
      <div class="flex flex-col gap-3">
        <h6 class="heading-6 text-purple-400 text-center">{{ code }} error</h6>
        <h1 class="heading-error text-primary text-center">{{ error }}</h1>
      </div>
      <p class="heading-6 text-help text-center max-w-lg mx-auto">{{ message }}</p>
    </div>
    <Button @click="navigateTo('/')" variant="gray" size="lg" :rounded="false">Back to home</Button>
  </main>
</template>