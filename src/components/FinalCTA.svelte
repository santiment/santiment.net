<script lang="ts">
  import Button from 'san-webkit-next/ui/core/Button'
  import CtaButton from './CtaButton.svelte'

  // TODO: Move to astro

  const numbers = [
    {
      title: 'Explore our prices',
      img: '/coin2.svg',
      description: 'Get the most out of our advanced metrics and access the private community',
      link: 'https://app.santiment.net/s/1PcSbMgY',
      label: 'See our plans',
    },
    {
      title: 'Start your data integration',
      img: '/code.svg',
      description:
        'Integrate our social, on-chain and financial datasets with your data lake or quant pipeline',
      link: 'https://app.santiment.net/s/1PcSbMgY',
      label: 'Explore our API',
    },
  ]
</script>

<section class="py-40 md:pb-0 md:pt-16">
  <div class="container flex justify-between md:flex-col-reverse">
    <div class="md:-mx-5 md:flex md:items-center md:justify-center md:bg-athens">
      <div
        class="max-w-[380px] md:flex md:max-w-[328px] md:flex-col md:items-center md:justify-center md:bg-athens md:px-4 md:py-12 md:text-center"
      >
        <h2 class="mb-3 max-w-[25rem] text-4xl font-semibold md:text-xl">Ready to get started?</h2>

        <p class="mb-8 text-lg text-fiord md:text-base">
          Start using Santiment for free, and explore all the tools and services you need to make
          better financial decisions. No credit card needed
        </p>

        <CtaButton class="h-10 w-full max-w-[196px] text-base md:max-w-full" />
      </div>
    </div>

    <div class="flex items-center justify-center md:mb-12 md:flex-col">
      {#each numbers as { title, img: src, description, link, label }}
        <article
          class="relative flex flex-col odd:pr-[45px] even:border-l even:border-porcelain even:pl-[45px] md:items-center md:justify-center md:text-center md:odd:pr-0 md:even:border-t md:even:border-none md:even:border-porcelain md:even:pl-0"
        >
          <img {src} class="mb-[14px] h-10 w-11" alt="" />
          <h3 class="text-lg font-medium text-rhino">{title}</h3>
          <p class="max-w-56 text-sm text-fiord md:max-w-80">{description}</p>
          <Button
            class="md:text-sm"
            variant="link"
            icon="right-arrow"
            iconSize={10}
            iconOnRight
            href={link}
          >
            {label}
          </Button>
        </article>
      {/each}
    </div>
  </div>
</section>
