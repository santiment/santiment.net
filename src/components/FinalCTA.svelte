<script lang="ts">
  import Button from 'san-webkit-next/ui/core/Button'

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

<section class="py-40">
  <div class="container flex gap-[230px]">
    <div class="max-w-[380px]">
      <h2 class="mb-3 max-w-[25rem] text-4xl font-semibold">Ready to get started?</h2>

      <p class="mb-8 text-lg text-fiord">
        Start using Santiment for free, and explore all the tools and services you need to make
        better financial decisions. No credit card needed
      </p>

      <Button
        variant="fill"
        class="h-10 w-full max-w-[196px] justify-center text-center text-base md:max-w-full"
      >
        Get Started
      </Button>
    </div>
    <div class="flex">
      {#each numbers as { title, img, description, link, label }}
        <article
          class="relative flex flex-col odd:pr-[45px] even:border-l even:border-porcelain even:pl-[45px]"
        >
          <img class="mb-[14px] h-10 w-11" src={img} alt="" />
          <h3 class="text-lg font-medium text-rhino">{title}</h3>
          <p class="max-w-56 text-sm text-fiord">{description}</p>
          <Button variant="link" icon="right-arrow" iconSize={10} iconOnRight href={link}
            >{label}</Button
          >
        </article>
      {/each}
    </div>
  </div>
</section>
