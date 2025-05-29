<script lang="ts">
  import ProductsButton, { Products } from 'san-webkit-next/ui/app/Products'
  import Button from 'san-webkit-next/ui/core/Button'
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { cn } from 'san-webkit-next/ui/utils'
  import CtaButton from '../CtaButton.svelte'
  import Logo from './Logo.svelte'

  type TProps = {
    isAnimated: boolean
    isNightMode: boolean
    class: string
  }

  const { isAnimated = false, isNightMode = false, class: className = '' }: TProps = $props()

  let navOpen = $state(false)
</script>

<div class={cn('h-[70px] w-full bg-white', isNightMode ? 'night-mode' : '')}></div>
<nav
  class={cn(
    'fixed left-0 right-0 top-0 z-[5] border-b border-porcelain bg-white md:animate-none',
    isNightMode ? 'night-mode' : '',
    isAnimated ? 'animate-shiftDown' : '',
    className,
  )}
>
  <div
    class="mx-auto flex h-[70px] max-w-[1192px] items-center justify-between px-5 md:h-[56px] md:px-[16px]"
  >
    <div class="flex flex-shrink-0 items-center">
      <a href="/" class="mr-16 h-[23px] w-[104px] flex-shrink-0 [&>svg>path]:fill-black">
        <Logo />
      </a>
    </div>

    <div class="flex w-full items-center md:hidden">
      <ProductsButton class={isNightMode ? 'night-mode' : ''}>
        {#snippet children({ ref })}
          <!-- TODO: animate icon -->
          <!-- TODO: add new icons to webkit -->
          <Button
            icon="arrow-down"
            iconOnRight
            iconSize={9}
            {ref}
            class="mr-8 text-waterloo transition-transform duration-200 hover:bg-transparent hover:fill-green hover:text-green [&[data-state=open]>svg]:rotate-180"
            >Products</Button
          >
        {/snippet}
      </ProductsButton>

      {@render Link('/about', 'About')}

      {@render Link('/team', 'Team')}

      {@render Link('/jobs', 'Jobs')}

      {@render Link('https://academy.santiment.net/', 'Academy', 'ml-auto', true)}

      {@render Link('https://app.santiment.net/pricing', 'Pricing', '', true)}
    </div>

    <button class="hidden md:block" onclick={() => (navOpen = true)}>
      <Svg id="menu" class="fill-waterloo" />
    </button>

    <CtaButton class="md:hidden" />
  </div>

  {#if navOpen}
    <div class="fixed inset-0 z-50 hidden flex-col overflow-auto bg-white p-8 md:flex">
      <button class="absolute mb-4 self-end" onclick={() => (navOpen = false)}>
        <Svg id="close" class="fill-waterloo" />
      </button>

      <div class="mb-4">
        <Products
          class="w-full flex-col p-0 [&>div>section>a>div:has(svg)]:h-8 [&>div>section>a>div:has(svg)]:w-8 [&>div>section>a>div:has(svg)]:min-w-8 [&>div>section]:pb-3 first:[&>div>section]:border-b first:[&>div>section]:border-b-porcelain [&>div]:border-b [&>div]:border-b-porcelain [&_a]:items-center [&_a]:px-4 [&_a]:py-2 [&_h2]:font-medium [&_h3]:mb-2 [&_p]:hidden"
        />
      </div>

      {@render Link('/about', 'About', 'text-rhino mr-0 mb-5')}

      {@render Link('/team', 'Team', 'text-rhino mr-0 mb-5')}

      {@render Link('/jobs', 'Jobs', 'text-rhino mr-0 mb-5')}

      {@render Link('https://academy.santiment.net/', 'Academy', 'text-rhino mr-0 mb-5', true)}

      {@render Link('https://app.santiment.net/pricing', 'Pricing', 'text-rhino mr-0 mb-5', true)}
    </div>
  {/if}
</nav>

{#snippet Link(href: string, label: string, className?: string, isExternal: boolean = false)}
  <a
    {href}
    target={isExternal ? '_blank' : '_self'}
    rel={isExternal ? 'noopener noreferrer' : null}
    class={cn('group mr-8 flex items-center text-waterloo hover:text-green md:ml-4', className)}
    data-source="santiment.net"
    data-type={label}
  >
    {label}

    {#if isExternal}
      <Svg id="external-link" w={12} class="ml-[5px] fill-waterloo group-hover:fill-green"></Svg>
    {/if}
  </a>
{/snippet}
