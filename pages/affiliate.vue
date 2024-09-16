<script setup lang="ts">
  const features = [
    {
      title: "Why Choose Stylokit's Affiliate Program",
      desc: "Discover the benefits of partnering with Stylokit, including our industry-leading commission rates, top-quality templates, and dedicated affiliate support.",
    },
    {
      title: "How It Works",
      desc: "Learn how easy it is to start earning commissions with our simple sign-up process, referral tracking system, and hassle-free payouts.",
    },
    {
      title: "Commission Structure",
      desc: "Explore our competitive commission rates and see how much you can earn for each successful referral.",
    },
    {
      title: "Apply Now",
      desc: "Ready to start earning? Apply to become a Stylokit affiliate today and unlock the potential to earn 30% commission on every sale you generate.",
    },
  ];
</script>

<template>
  <main class="flex flex-col gap-[32px] px-[32px]">
    <section class="flex flex-col py-[32px] gap-[64px]">
      <div
        class="flex flex-col gap-[32px] p-[32px] justify-center items-center bg-gray-750 border-t border-white/[.08] rounded-lg"
      >
        <SvgLemonsqueezy class="w-[40px] h-[40px]" />
        <div class="flex flex-col items-center justify-start gap-[12px]">
          <h2 class="heading-2 text-white text-center">
            Join Stylokit and Earn Rewards!
          </h2>
          <p class="max-w-[640px] text-zing-400 text-center">
            Partner with Stylokit to earn a generous 30% commission for every
            sale you refer. Monetize your audience effortlessly with our premium
            Framer & Nuxt templates. Ideal for bloggers, influencers, and
            digital marketers. Unlock earning potential today!
          </p>
        </div>
        <Button
          @click="
            navigateTo('https://stylokit.lemonsqueezy.com/affiliates', {
              external: true,
              open: {
                target: '_blank',
              },
            })
          "
          variant="purple"
          :rounded="false"
          size="lg"
          >Become an affiliate</Button
        >
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
        <div
          v-for="feature in features"
          class="flex flex-col gap-[6px] pb-[16px]"
        >
          <h6 class="heading-6 text-white">{{ feature.title }}</h6>
          <p class="text-zing-400 body-2">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </section>

    <Divider />

    <PageFooter />
  </main>
</template>
