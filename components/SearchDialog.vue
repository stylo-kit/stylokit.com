<template>
  <HeadlessTransitionRoot appear :show="isOpen ? true : false" as="template">
    <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-backdrop" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
        class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              class="relative w-full max-w-96 transform overflow-hidden bg-transparent text-left align-middle shadow-xl transition-all"
            >
              <div class="w-full h-auto px-2 py-1 bg-hover rounded-t-lg" :class="{'mb-96 rounded-b-lg': !keyword}">
                <SearchInput v-model="keyword" />
              </div>
              <SearchResult v-if="keyword">
                <SearchResultItem title="Nexus AI" desc="/templates/nexus-ai" to="/templates" />
                <SearchResultItem title="Nexus AI" desc="/templates/nexus-ai" to="/templates" />
                <SearchResultItem title="Nexus AI" desc="/templates/nexus-ai" to="/templates" />
                <SearchResultItem title="Nexus AI" desc="/templates/nexus-ai" to="/templates" />
                <SearchResultItem title="Nexus AI" desc="/templates/nexus-ai" to="/templates" />
                <SearchResultItem title="Nexus AI" desc="/templates/nexus-ai" to="/templates" />
                <SearchResultItem title="Nexus AI" desc="/templates/nexus-ai" to="/templates" />
              </SearchResult>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>

<script setup lang="ts">
const isOpen = defineModel();
const keyword = ref(null);

function closeModal() {
  isOpen.value = false;
}
</script>