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
              <Icon name="heroicons:banknotes" size="16px" />
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
              <Icon name="heroicons:cursor-arrow-rays" size="16px" />
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