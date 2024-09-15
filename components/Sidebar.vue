<template>
  <div class="flex h-full pl-[8px] py-[8px] overflow-hidden max-w-[280px]">
    <aside class="flex flex-col justify-between h-full overflow-x-hidden overflow-y-auto lg:w-52 xl:w-72 flex-shrink-0 bg-zing-950 border border-zing-800 border-r-none rounded-l max-w-[280px]">
      <SidebarBody>
        <NuxtLink to="/" class="px-[16px] pt-[28px] pb-[0px]">
          <LogoBrand />
        </NuxtLink>
  
        <SidebarContent>
          <div class="flex flex-col gap-4">
            <div class="heading-6 text-zing-500 px-[24px]">Pages</div>
            <SidebarMenu>
              <!-- <DevOnly>
                <MenuItem to="/test" icon="heroicons:document">Test</MenuItem>
              </DevOnly> -->
              <MenuItem to="/" icon="heroicons:home">Explore</MenuItem>
              <MenuItem to="/all-access" icon="heroicons:tag">All Access</MenuItem>
              <MenuItem to="/affiliate" icon="heroicons:currency-dollar">Affiliate</MenuItem>
              <MenuItem to="https://medium.com/@dmytriivanov" icon="heroicons:pencil">Articles</MenuItem>
            </SidebarMenu>
          </div>
  
          <Divider />
  
          <div class="flex flex-col gap-4">
            <div class="heading-6 text-placeholder px-[24px]">Connect</div>
            <SidebarMenu>
              <MenuItem to="https://twitter.com/Dmytri_Design" icon="tabler:brand-x">Connect on X</MenuItem>
            </SidebarMenu>
          </div>
  
          <!-- <SearchInput :pointer="true" @click="searchDialogOpen = true" /> -->
  
          <!-- <SidebarMenu>
            <DevOnly>
              <MenuItem to="/test" icon="heroicons:document">Test</MenuItem>
            </DevOnly>
            <MenuItem to="/" icon="heroicons:clock">Discover</MenuItem>
            <MenuItem to="/info" icon="heroicons:information-circle">Info</MenuItem>
            <MenuItem to="/sponsor" icon="heroicons:banknotes">A Sponsor</MenuItem>
          </SidebarMenu> -->
  
          <!-- <div class="flex flex-col gap-4">
            <Divider label="SOURCE" />
            <SidebarMenu>
              <MenuItem to="/inspirations" icon="heroicons:fire">Inspirations</MenuItem>
              <MenuItem to="/templates" icon="heroicons:document-duplicate">Templates</MenuItem>
              <MenuItem to="/systems" icon="heroicons:ellipsis-horizontal">Design Systems</MenuItem>
              <MenuItem to="/premium" icon="heroicons:newspaper">Premium UI Kits</MenuItem>
              <MenuItem to="/icons" icon="heroicons:queue-list">Icons</MenuItem>
              <MenuItem to="/typography" icon="heroicons:language">Typography</MenuItem>
              <MenuItem to="/tools" icon="heroicons:rocket-launch">Design Tools</MenuItem>
            </SidebarMenu>
          </div> -->
        </SidebarContent>
      </SidebarBody>
      <SidebarFooter class="flex flex-row gap-1">
        <SidebarBanner />
        <SidebarAuthor />
      </SidebarFooter>
    </aside>
  </div>
</template>

<script setup lang="ts">
const searchDialogOpen = ref(false);
</script>