<template>
  <main class="flex flex-col gap-8">
    <header class="flex flex-row justify-between">
      <h1 class="heading-3 text-primary">Info</h1>
      <div class="flex flex-row gap-3">
        <Button @click="submitDialogOpen = true" variant="secondary">Submit</Button>
        <Button @click="navigateTo('https://stylokit.lemonsqueezy.com/buy/5eed5001-9087-405b-a414-d654b9597e5d', {external: true})" variant="primary">Buy Template</Button>
      </div>
    </header>

    <Divider />

    <section class="flex flex-col-reverse md:flex-row justify-between pt-4 gap-4">
      <div class="flex flex-col gap-12 max-w-md">
        <div class="space-y-3">
          <h4 class="heading-4 text-primary">About us</h4>
          <div class="flex flex-col items-start gap-3">
            <p class="body-2 text-tertiary">At DailyHub, we curate a diverse collection of uplifting content to fuel your creativity and spark new ideas every day. Whether you're a seasoned designer, a budding artist, or someone seeking daily motivation, we've got you covered.</p>
            <p class="body-2 text-tertiary">Explore our curated selection of inspiring stories, design trends, and thought-provoking content that aims to elevate your daily experiences. Join our community of creative minds and embark on a journey of continuous inspiration.</p>
            <p class="body-2 text-tertiary">DailyHub is more than just a website, it's a hub for those who seek to infuse their daily lives with creativity, innovation, and positive vibes. Let's inspire and be inspired together!</p>
          </div>
        </div>
        <div class="space-y-3">
          <h4 class="heading-4 text-primary">Sponsor</h4>
          <div class="flex flex-col items-start gap-3">
            <p class="body-2 text-tertiary">Open for New Sponsorships!</p>
            <Button @click="navigateTo('/sponsor')" variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[16px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
              <span>A Sponsor</span>
            </Button>
          </div>
        </div>
        <div class="space-y-3">
          <h4 class="heading-4 text-primary">Submit</h4>
          <div class="flex flex-col items-start gap-3">
            <p class="body-2 text-tertiary">Seeking top-notch tools for designers! Submit your recommendations via our form, each is manually approved for the highest standards. Join us in shaping design excellence!</p>
            <Button @click="submitDialogOpen = true" variant="secondary">
              <span>Submit</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[16px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div class="flex items-start justify-center max-w-md pt-4 pb-2.5">
        <img src="https://framerusercontent.com/images/x50aUQUOPTnmN3kiVCUVbzsEmE.png" alt="Info Image" class="w-full object-cover">
      </div>
    </section>

    <SubmitDialog v-model="submitDialogOpen" />
  </main>
</template>

<script setup lang="ts">
const submitDialogOpen = ref(false);
</script>