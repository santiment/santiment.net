<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'

  import binance from './assets/binance.svg'
  import bloomberg from './assets/bloomberg.svg'
  import ethereum from './assets/ethereum.svg'
  import cnn from './assets/cnn.svg'
  import coindesk from './assets/coindesk.svg'
  import cointelegraph from './assets/cointelegraph.svg'
  import nasdaq from './assets/nasdaq.svg'
  import ripple from './assets/ripple.svg'
  import bitcoinMagazine from './assets/bitcoin-magazine.svg'
  import wired from './assets/wired.svg'
  import bitfinex from './assets/bitfinex.svg'
  import cardano from './assets/cardano.svg'
  import kraken from './assets/kraken.svg'
  import coinontag from './assets/coinotag.svg'
  import kucoin from './assets/kucoin.svg'
  import maker from './assets/maker.svg'

  const logoPaths = [
    binance,
    ethereum,
    bloomberg,
    cnn,
    coindesk,
    cointelegraph,
    nasdaq,
    ripple,
    bitcoinMagazine,
    wired,
    bitfinex,
    cardano,
    kraken,
    coinontag,
    kucoin,
    maker,
  ]

  const { class: className = '' } = $props()
</script>

<section class={cn('overflow-hidden py-6', className)}>
  <h2 class="title-with-dots mx-2 mb-6 text-lg text-white-day">As seen on</h2>

  <div class="overflow-hidden">
    <div class="flex animate-marquee whitespace-nowrap">
      {#each [...logoPaths, ...logoPaths] as path}
        <img src={path} alt="logo" class="mx-6" />
      {/each}
    </div>
  </div>
</section>

<style>
  .title-with-dots::before,
  .title-with-dots::after {
    content: '';
    @apply mx-2 inline-block h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-mystic-day md:h-[3px] md:w-[3px];
  }
</style>
