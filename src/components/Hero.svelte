<script lang="ts">
  import AsSeenOn from './AsSeenOn.svelte'
  import CtaButton from './CtaButton.svelte'
  // TODO: Move to astro
</script>

<section class="backgroundContainer night-mode">
  <div class="container pt-[7.5rem] md:pt-[2.875rem]">
    <div class="mb-[22.313rem] max-w-[40.25rem] md:mb-20">
      <h1 class="mb-4 text-5xl font-medium text-white-day md:mb-3 md:text-3xl md:font-normal">
        Gain Actionable Insights with Behavior Analytics in Crypto
      </h1>

      <p class="mb-10 text-xl text-fiord md:mb-6 md:text-base">
        Make smarter decisions with powerful tools and trusted data sources
      </p>

      <CtaButton class="h-10 w-full max-w-[196px] text-base md:max-w-full" />
    </div>
    <div class="relative">
      <img src="/illus-mobile.svg" class="hidden md:block" alt="" />

      <div class="pb-[30rem] md:absolute md:top-[18%] md:w-full">
        <AsSeenOn class="mb-[14.25rem]" />

        <div class="ml-auto mr-0 max-w-[31.25rem]">
          <h2 class="mb-4 text-5xl font-medium text-white-day md:mb-3 md:text-3xl">
            Access Comprehensive Set of Data Sources
          </h2>

          <p class="mb-10 text-xl text-fiord">
            Use social, blockchain, financial, dev, and community metrics to improve your strategy
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .backgroundContainer {
    @apply relative h-full w-full bg-white-night bg-[url('/illus-desktop.svg')] bg-center bg-top bg-no-repeat lg:bg-[url('/illus-laptop.svg')] md:bg-none md:pb-[26px];
  }
</style>
