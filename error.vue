<template>
  <div class="flex flex-row w-full h-screen bg-primary">
    <Sidebar>
      <SidebarBody>
        <NuxtLink to="/" class="pl-3">
          <LogoBrand />
        </NuxtLink>

        <SidebarContent>
          <SearchInput />

          <SidebarMenu>
            <!-- <MenuItem to="/test" icon="heroicons:document">Test</MenuItem> -->
            <MenuItem to="/" icon="heroicons:clock">Discover</MenuItem>
            <MenuItem to="/info" icon="heroicons:information-circle">Info</MenuItem>
            <MenuItem to="/sponsor" icon="heroicons:banknotes">A Sponsor</MenuItem>
          </SidebarMenu>

          <div class="flex flex-col gap-4">
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
          </div>
        </SidebarContent>
      </SidebarBody>
      <SidebarFooter>© 2024 Made by Dmytri</SidebarFooter>
    </Sidebar>

    <div class="grow overflow-y-auto p-2 pl-0">
      <div class="flex items-center justify-center p-8 min-h-full bg-zing-800">
        <ErrorMessage
          :code="errorMessage.code"
          :error="errorMessage.error"
          :message="errorMessage.message"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const errorMessages = [
  {
    code: 400,
    error: "Bad Request",
    message: "Message: Oops! Something went wrong with your request. Please check that everything is filled out correctly and try again.",
  },
  {
    code: 401,
    error: "Unauthorized",
    message: "Sorry, you need to log in to access this page. Please log in and try again.",
  },
  {
    code: 403,
    error: "Forbidden",
    message: "Uh-oh! You don't have permission to view this page. If you believe this is a mistake, please contact support.",
  },
  {
    code: 404,
    error: "Page Not Found",
    message: "We couldn't find the page you're looking for. It might be moved or doesn't exist. Please check the URL or go back to the homepage.",
  },
  {
    code: 405,
    error: "Method Not Allowed",
    message: "Sorry, the method you're trying to use is not allowed on this page. Please check your request and try again.",
  },
  {
    code: 500,
    error: "Internal Server Error",
    message: "Message: Oops! Something went wrong on our end. Our team has been notified, and we're working to fix it. Please try again later.",
  },
  {
    code: 501,
    error: "Not Implemented",
    message: "We're sorry, but the requested functionality is not available at the moment. Please try again later.",
  },
  {
    code: 502,
    error: "Bad Gateway",
    message: "We're experiencing some technical difficulties. Please try again in a few minutes. If the problem persists, contact support.",
  },
  {
    code: 503,
    error: "Service Unavailable",
    message: "Sorry, the service is temporarily unavailable. We're working to bring it back online. Please try again later.",
  },
  {
    code: 504,
    error: "Gateway Timeout",
    message: "We're sorry, but it's taking longer than expected to process your request. Please try again in a few minutes.",
  },
  {
    code: 505,
    error: "HTTP Version Not Supported",
    message: "Oops! It seems like there's an issue with the version of the web page you're trying to access. Please make sure your browser is up to date.",
  },
  {
    code: 429,
    error: "Too Many Requests",
    message: "Slow down! You've made too many requests in a short time. Take a break and try again later.",
  },
];

const props = defineProps({
  error: Object as () => NuxtError
});

const errorMessage = computed(() => {
  return errorMessages.filter(e => e.code == props.error?.statusCode)[0];
});

useSeoMeta({
  title: errorMessage.value.code + ' - ' + errorMessage.value.error,
});

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  htmlAttrs: {
    class: 'scroll-smooth focus:scroll-auto'
  },
  bodyAttrs: {
    class: 'bg-primary'
  }
});
</script>