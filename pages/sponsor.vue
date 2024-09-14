<template>
  <main class="flex flex-col gap-8">
    <header class="flex flex-row justify-between">
      <h1 class="heading-3 text-primary">A Sponsor</h1>
      <div class="flex flex-row gap-3">
        <Button @click="submitDialogOpen = true" variant="secondary">Submit</Button>
        <Button @click="navigateTo('https://stylokit.lemonsqueezy.com/buy/5eed5001-9087-405b-a414-d654b9597e5d', {external: true})" variant="primary">Buy Template</Button>
      </div>
    </header>

    <Divider />

    <section class="flex flex-col pt-4 gap-4">
      <div class="flex flex-col gap-4 max-w-md mx-auto">
        <h2 class="heading-2 text-primary text-center">Sponsorship</h2>
        <p class="body-1 text-tertiary text-center">DailyHub empowers designers with the latest tools and resources, optimizing workflows for thousands each month.</p>
      </div>
      <div class="flex flex-col gap-12">
        <!-- Pricing Tabs -->
        <div class="mx-auto">
          <PricingSwitch v-model="pricingToggled" label="Monthly" labelEnabled="Yearly" badgeLabel="(Save 45%)" />
        </div>

        <!-- Pricing Panels -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PricingCard 
            variant="pro"
            title="Pro tier"
            desc="Premium access"
            :price="pricingToggled ? '$102': '$19'"
            :interval="pricingToggled ? '/yearly' : '/month'"
            :features="['Priority Support', 'Exclusive Content', 'Early Access', 'VIP Events', 'Pro Features']"
            :buttonText="pricingToggled ? 'Choose Yearly' : 'Choose Month'"
          />
          <PricingCard 
            variant="elite"
            title="Elite tier"
            desc="Premium access"
            :price="pricingToggled ? '$156': '$29'"
            :interval="pricingToggled ? '/yearly' : '/month'"
            :features="['Priority Support', 'Exclusive Content', 'Early Access', 'VIP Events', 'Pro Features']"
            :buttonText="pricingToggled ? 'Choose Yearly' : 'Choose Month'"
          />
          <PricingCard 
            variant="diamond"
            title="Diamond tier"
            desc="Premium access"
            :price="pricingToggled ? '$534': '$99'"
            :interval="pricingToggled ? '/yearly' : '/month'"
            :features="['Priority Support', 'Exclusive Content', 'Early Access', 'VIP Events', 'Pro Features']"
            :buttonText="pricingToggled ? 'Choose Yearly' : 'Choose Month'"
          />
        </div>
      </div>
    </section>

    <SubmitDialog v-model="submitDialogOpen" />
  </main>
</template>

<script setup lang="ts">
const submitDialogOpen = ref(false);
const pricingToggled = ref(false);
</script>