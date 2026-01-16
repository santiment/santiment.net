<script lang="ts">
  import { onMount } from 'svelte'
  import Button from 'san-webkit-next/ui/core/Button'
  import { cn } from 'san-webkit-next/ui/utils'

  import img1 from './assets/data-visuals-1.png'
  import img2 from './assets/data-visuals-2.png'
  import img3 from './assets/data-visuals-3.png'
  import img4 from './assets/data-visuals-4.png'

  const images = [img1.src, img2.src, img3.src, img4.src]

  type TProps = { class?: string }
  const { class: className = '' }: TProps = $props()

  let visibleImage = $state(0)
  let container: HTMLElement

  const items = [
    {
      title: 'Social metrics',
      heading: 'What are people talking about in crypto?',
      sub: 'Take a look at crypto market social trends and sentiment charts',
      link: 'https://app.santiment.net/s/1PcSbMgY',
      label: 'Get to know social trends',
    },
    {
      title: 'On-chain metrics',
      heading: 'Are traders in profit or loss territory?',
      sub: 'Study aggregate investor behaviors as price moves to/from their cost basis',
      link: 'https://app.santiment.net/s/ybwyoqGG',
      label: 'Track market movements',
    },
    {
      title: 'Stakeholders metrics',
      heading: 'Are whales accumulating or dumping?',
      sub: 'See asset holder distribution, top holders, and whales transaction tracking tools',
      link: 'https://app.santiment.net/s/czuEB2R6',
      label: 'Investigate whales activities',
    },
    {
      title: 'NFT metrics',
      heading: 'Is my NFT collection getting more popular?',
      sub: 'Get to know how often people are mentioning your NFT Collection',
      link: 'https://app.santiment.net/s/QGPJ95dm',
      label: 'Check NFT collections',
    },
  ]

  onMount(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleImage = Number(entry.target.getAttribute('data-index'))
          }
        })
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      },
    )

    container.querySelectorAll('.text-block').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  })
</script>

<div
  bind:this={container}
  class={cn('relative flex justify-between pb-40 night-mode md:pb-16', className)}
>
  <div class="flex w-full max-w-[306px] flex-col md:max-w-full md:gap-y-20">
    {#each items as item, i}
      <div
        class="text-block flex h-[500px] flex-col items-start justify-center md:h-auto"
        data-index={i}
      >
        <div class="w-full lg:text-left">
          <p class="mb-3 text-base font-semibold text-orange md:mb-1">{item.title}</p>
          <h3 class="mb-6 text-4xl font-semibold text-white-day md:mb-4 md:text-xl">
            {item.heading}
          </h3>
          <p class="mb-3 text-base text-rhino md:mb-2.5">{item.sub}</p>
          <Button variant="link" icon="right-arrow" iconSize={10} iconOnRight href={item.link}>
            {item.label}
          </Button>
          <img
            src={images[i]}
            class="mt-6 hidden md:block md:max-w-[80%] sm:max-w-full"
            alt={item.title}
          />
        </div>
      </div>
    {/each}
  </div>

  <div
    class="sticky top-[25vh] mb-9 flex h-[438px] w-[778px] self-start overflow-hidden lg:w-[600px] md:hidden"
  >
    <div class="relative h-full w-full lg:h-[310px] lg:w-[548px]">
      {#each images as img, i}
        <div
          class={cn(
            'absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out',
            visibleImage === i ? 'z-1 opacity-100' : 'z-0 opacity-0',
          )}
          style="background-image: url({img}); will-change: opacity;"
        ></div>
      {/each}
    </div>
  </div>
</div>
