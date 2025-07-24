<script>
  import Button from 'san-webkit-next/ui/core/Button'
  import Tabs from './Tabs.svelte'
  import { onMount } from 'svelte'

  let selectedTab = $state('Sanbase')

  const TABS = {
    Sanbase: {
      desc: 'Exclusive on-chain, social and development metrics, low-latency market signals, custom Spreadsheet templates & daily insights on the cryptocurrency market',
      link: 'https://app.santiment.net/',
      img: '/sanbase.png',
    },
    SanAPI: {
      desc: 'One of the most comprehensive crypto APIs on the market. Single endpoint access for on-chain, social, pricing and development information on 2000+ coins',
      link: 'https://api.santiment.net/',
      img: '/sanapi.png',
    },
  }

  onMount(() => {
    Object.values(TABS).forEach(({ img }) => {
      const preloadImg = new Image()
      preloadImg.src = img
    })
  })
</script>

<section>
  <h3 class="title-with-dots mb-8 text-center text-4xl font-semibold text-mystic md:text-xl">
    Our products
  </h3>
  <Tabs
    class="mx-auto mb-10 text-xl md:text-lg"
    onSelect={(tab) => (selectedTab = tab)}
    options={Object.keys(TABS)}
    defaultSelectedIndex="Sanbase"
  />
  <p class="mx-auto mb-4 max-w-[556px] text-center text-lg text-waterloo md:text-base">
    Exclusive on-chain, social and development metrics, low-latency market signals, custom
    Spreadsheet templates & daily insights on the cryptocurrency market
  </p>
  <Button
    variant="fill"
    class="mx-auto h-10 max-w-[153px] text-base sm:max-w-full sm:justify-center"
    icon="right-arrow"
    iconOnRight
    iconSize={10}
    href={TABS[selectedTab].link}>Try it yourself</Button
  >
  <img src={TABS[selectedTab].img} class="mx-auto mt-10 max-w-[80%]" alt="" />
</section>
