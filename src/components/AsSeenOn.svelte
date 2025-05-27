<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'

  // TODO:Move to astro

  const logoPaths = [
    '/as-seen-on-logos/binance.svg',
    '/as-seen-on-logos/bloomberg.svg',
    '/as-seen-on-logos/ethereum.svg',
    '/as-seen-on-logos/cnn.svg',
    '/as-seen-on-logos/coindesk.svg',
    '/as-seen-on-logos/cointelegraph.svg',
    '/as-seen-on-logos/nasdaq.svg',
    '/as-seen-on-logos/ripple.svg',
    '/as-seen-on-logos/bitcoin-magazine.svg',
    '/as-seen-on-logos/wired.svg',
    '/as-seen-on-logos/bitfinex.svg',
    '/as-seen-on-logos/cardano.svg',
    '/as-seen-on-logos/kraken.svg',
    '/as-seen-on-logos/coinotag.svg',
    '/as-seen-on-logos/kucoin.svg',
    '/as-seen-on-logos/maker.svg',
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
