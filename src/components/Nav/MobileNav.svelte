<script lang="ts">
  import { Products } from 'san-webkit-next/ui/app/Products'
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { cn } from 'san-webkit-next/ui/utils'
  import Link from './Link.svelte'

  let navOpen = $state(false)

  const links = [
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/jobs', label: 'Jobs' },
    { href: 'https://academy.santiment.net/', label: 'Academy', isExternal: true },
    { href: 'https://app.santiment.net/pricing', label: 'Pricing', isExternal: true },
  ]
</script>

<button class="hidden md:block" aria-label="Open menu" onclick={() => (navOpen = true)}>
  <Svg id="menu" class="fill-waterloo" />
</button>

{#if navOpen}
  <div class="fixed inset-0 z-50 hidden flex-col overflow-auto bg-white p-8 md:flex">
    <button class="absolute right-8 top-8 mb-4 self-end" aria-label="Close menu" onclick={() => (navOpen = false)}>
      <Svg id="close" class="fill-waterloo" />
    </button>

    <div class="mb-6 border-b border-b-porcelain pb-3">
      <Products
        class={cn(
          'w-full flex-col p-0 [&>div]:border-b [&>div]:border-b-porcelain',
          '[&>div>section>a>div:has(svg)]:h-8 [&>div>section>a>div:has(svg)]:w-8 [&>div>section>a>div:has(svg)]:min-w-8',
          '[&>div>section]:pb-3 first:[&>div>section]:border-b first:[&>div>section]:border-b-porcelain',
          ' [&_a]:items-center [&_a]:px-4 [&_a]:py-2 [&_h2]:font-medium [&_h3]:mb-2 [&_p]:hidden',
        )}
      />
    </div>

    {#each links as link}
      <Link {...link} class="mb-5 ml-4 text-rhino" />
    {/each}
  </div>
{/if}
