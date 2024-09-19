<script setup lang="ts">
  const props = defineProps({
    variant: {
      required: false,
      type: String,
      default: "pro", // pro, team, enterprise
    },
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    discountPrice: {
      required: false,
      type: Number,
    },
    features: {
      required: false,
      type: Array,
      default: [],
    },
    link: {
      required: true,
      type: String,
    },
  });

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const priceFormatted = computed(() => {
    return numberWithCommas(props.price);
  });

  const discountPriceFormatted = computed(() => {
    return numberWithCommas(props.discountPrice || 0);
  })
</script>

<template>
  <NuxtLink
    :to="link"
    target="_blank"
    class="flex pt-[8px] relative group w-full"
  >
    <div
      class="flex flex-col gap-[32px] p-[24px] rounded-md border border-zing-700 group-hover:-translate-y-[8px] transition duration-300 w-full"
      :class="{
        'bg-zing-800': variant == 'pro',
        'bg-gray-750': variant == 'team',
        'bg-neo-green-500': variant == 'enterprise',
      }"
    >
      <!-- Content -->
      <div class="flex flex-col gap-[24px]">
        <!-- Heading -->
        <div class="flex items-center gap-[12px]">
          <div
            class="flex items-center justify-center w-[40px] h-[40px] rounded-full border"
            :class="{
              'pricing-pro-icon-bg border-zing-700': variant == 'pro',
              'pricing-team-icon-bg border-neo-green-700': variant == 'team',
              'pricing-enterprise-icon-bg border-neo-green-600':
                variant == 'enterprise',
            }"
          >
            <SvgPricingPro v-if="variant == 'pro'" class="w-[36px] h-[36px]" />
            <SvgPricingTeam
              v-else-if="variant == 'team'"
              class="w-[36px] h-[36px]"
            />
            <SvgPricingEnterprise
              v-else-if="variant == 'enterprise'"
              class="w-[36px] h-[36px]"
            />
          </div>
          <div class="flex flex-col">
            <h5
              class="heading-5"
              :class="[
                variant == 'enterprise' ? 'text-neo-green-950' : 'text-white',
              ]"
            >
              {{ title }}
            </h5>
            <p
              class="body-2"
              :class="[
                variant == 'enterprise'
                  ? 'text-neo-green-900'
                  : 'text-zing-400',
              ]"
            >
              {{ subtitle }}
            </p>
          </div>
        </div>

        <!-- Pricing -->
        <div class="flex flex-row gap-[6px] items-end">
          <h2
            class="heading-2"
            :class="[
              variant == 'enterprise' ? 'text-neo-green-950' : 'text-white',
            ]"
          >
            ${{ discountPrice == 0 ? priceFormatted : discountPriceFormatted }}
          </h2>
          <h4
            v-if="discountPrice"
            class="heading-4 line-through"
            :class="[
              variant == 'enterprise' ? 'text-neo-green-950' : 'text-zing-600',
            ]"
          >
            ${{ priceFormatted }}
          </h4>
        </div>

        <!-- Features -->
        <ul
          v-if="features.length > 0"
          class="flex flex-col gap-[12px] list-disc list-inside"
        >
          <li
            v-for="item in features"
            class="body-2"
            :class="[
              variant == 'enterprise' ? 'text-neo-green-950' : 'text-zing-400',
            ]"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Button -->
      <Button v-if="variant == 'pro'" variant="gray" size="lg" :rounded="false"
        >Get Started</Button
      >
      <Button
        v-else-if="variant == 'team'"
        variant="neo-green"
        size="lg"
        :rounded="false"
        >Get Started</Button
      >
      <Button
        v-else-if="variant == 'enterprise'"
        variant="neo-dark"
        size="lg"
        :rounded="false"
        >Get Started</Button
      >
    </div>
  </NuxtLink>
</template>
