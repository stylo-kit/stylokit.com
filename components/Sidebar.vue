<script setup lang="ts">
  const appConfig = useAppConfig();
</script>

<template>
  <div class="flex h-full pl-[8px] py-[8px] overflow-hidden">
    <aside
      class="flex flex-col justify-between h-full overflow-x-hidden overflow-y-auto flex-shrink-0 bg-zing-950 border border-zing-800 border-r-none rounded-l w-[280px]"
    >
      <SidebarBody>
        <NuxtLink to="/" class="px-[16px] pt-[28px] pb-[0px]">
          <LogoBrand />
        </NuxtLink>

        <SidebarContent>
          <template v-for="(section, index) in appConfig.sidebar.sections">
            <div class="flex flex-col gap-4">
              <h6 class="heading-6 text-zing-500 px-[24px]">
                {{ section.title }}
              </h6>
              <SidebarMenu>
                <MenuItem
                  v-for="item in section.items"
                  :to="item.to"
                  :icon="item.icon"
                  >{{ item.title }}</MenuItem
                >
              </SidebarMenu>
            </div>

            <Divider v-if="index < appConfig.sidebar.sections.length - 1" />
          </template>
        </SidebarContent>
      </SidebarBody>
      <SidebarFooter class="flex flex-row gap-1">
        <SidebarBanner />
        <SidebarAuthor />
      </SidebarFooter>
    </aside>
  </div>
</template>
