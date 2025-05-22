<script lang="ts">
  import Button from 'san-webkit-next/ui/core/Button'

  const numbers = [
    {
      title: '#1',
      img: '/coin.svg',
      description: 'Since 2017, pioneering analytics of the crypto development data',
    },
    {
      title: '#1',
      img: '/rocket.svg',
      description: 'In sentiment crypto metrics, leading the market since 2014',
    },
    {
      title: '2009',
      img: '/bulb.svg',
      description:
        "We've been gathering historical data so you can look back and backtest your strategy",
    },
    {
      title: '12',
      img: '/cube.svg',
      description:
        'Blockchains and 2000+ assets, we offer 1000+ on-chain metrics for comprehensive analysis',
    },
  ]

  const numbers2 = [
    {
      title: 'Parsed Messages Monthly',
      number: '3+ Million',
    },
    {
      title: 'Labelled ETH Addresses',
      number: '75+ Million',
    },
    {
      title: 'Labelled BTC Addresses',
      number: '65+ Million',
    },
    {
      title: 'Metrics',
      number: '1100+',
    },
    {
      title: 'Crypto Assets',
      number: '2500+',
    },
  ]
</script>

<section class="py-40">
  <div class="container px-6">
    <div class=" mb-[7.5rem] flex gap-20">
      <div class="max-w-[28.75rem]">
        <h2 class="mb-6 max-w-[25rem] text-4xl font-semibold">
          Leading Analytics Proven by Numbers
        </h2>

        <p class="mb-10 text-lg text-fiord">
          Leverage our years of expertise in behavioural analysis as we continuously turn data
          points into reliable insights, guiding you through the complexities of the ever-evolving
          crypto market.
        </p>

        <Button
          variant="fill"
          class="h-10 w-full max-w-[196px] justify-center text-center text-base md:max-w-full"
        >
          Get Started
        </Button>
      </div>

      <div class="flex flex-wrap gap-y-[50px]">
        {#each numbers as { title, img, description }}
          <article
            class="relative flex flex-col odd:pr-[50px] even:border-l even:border-porcelain even:pl-[50px]"
          >
            <header class="mb-3.5 items-center gap-4 row">
              <img src={img} alt="" />
              <h3 class="text-3xl font-medium text-green">{title}</h3>
            </header>

            <p class="max-w-56 text-base text-fiord">{description}</p>
          </article>
        {/each}
      </div>
    </div>

    <div class="wrap flex flex-wrap">
      {#each numbers2 as { title, number }}
        <article
          class="flex flex-1 basis-auto flex-col items-center border-l border-porcelain px-6 first:basis-0 first:border-none first:pl-0 md:border-none"
        >
          <h5 class="mb-1 whitespace-nowrap text-base font-medium text-waterloo">{title}</h5>
          <p class="whitespace-nowrap text-3xl font-medium">{number}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
