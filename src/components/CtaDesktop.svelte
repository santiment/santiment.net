<script lang="ts">
  import Button from 'san-webkit-next/ui/core/Button'
  import { onMount } from 'svelte'

  const images = [
    '/data-visuals-1.png',
    '/data-visuals-2.png',
    '/data-visuals-3.png',
    '/data-visuals-4.png',
  ]
  let visibleImage = $state(0)

  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop

    if (scrollTop < 2912 && visibleImage !== 0) {
      visibleImage = 0
    } else if (scrollTop >= 2912 && scrollTop < 3506 && visibleImage !== 1) {
      visibleImage = 1
    } else if (scrollTop >= 3506 && scrollTop < 4128 && visibleImage !== 2) {
      visibleImage = 2
    } else if (scrollTop >= 4128 && visibleImage !== 3) {
      visibleImage = 3
    }
  }

  $effect(() => {
    console.log('visibleImage', visibleImage)
  })

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
    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  })
</script>

<div class="relative flex justify-between pb-40 night-mode">
  <div class="flex w-full max-w-[306px] flex-col">
    {#each items as item}
      <div class="flex h-[438px] flex-col items-start justify-center">
        <div class="w-full lg:text-left">
          <p class="mb-3 text-base font-semibold text-orange">{item.title}</p>
          <h3 class="mb-6 text-4xl font-semibold text-white-day">{item.heading}</h3>
          <p class="mb-3 text-base text-rhino">{item.sub}</p>
          <Button variant="link" icon="right-arrow" iconSize={10} iconOnRight href={item.link}
            >{item.label}</Button
          >
        </div>
      </div>
    {/each}
  </div>

  <div class="sticky top-[25vh] flex h-[438px] w-[778px] self-start lg:w-[600px]">
    <div
      class="h-full w-full bg-cover transition-all duration-500"
      style={`background-image: url(${images[visibleImage]})`}
    ></div>
  </div>
</div>
