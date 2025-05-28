<script lang="ts">
  import ProductsButton, { Products } from 'san-webkit-next/ui/app/Products'
  import Button from 'san-webkit-next/ui/core/Button'
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { cn } from 'san-webkit-next/ui/utils'
  import CtaButton from './CtaButton.svelte'

  let navOpen = $state(true)
  // TODO:
  // Move code to san-webkit-next
  // Add check for go to sanbase button
</script>

<nav class="relative border-b border-porcelain bg-white night-mode">
  <div
    class="mx-auto flex h-[70px] max-w-[1192px] items-center justify-between px-5 md:h-[56px] md:px-[16px]"
  >
    <div class="flex flex-shrink-0 items-center">
      <a href="/" class="mr-16">
        <img src="/logo.svg" class="h-[23px] w-[104px] flex-shrink-0" alt="logo" />
      </a>
    </div>

    <div class="flex w-full items-center md:hidden">
      <ProductsButton class="night-mode">
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
          class="w-full flex-col p-0 [&>div>section]:pb-3 first:[&>div>section]:border-b first:[&>div>section]:border-b-porcelain [&>div]:border-b [&>div]:border-b-porcelain [&_p]:hidden"
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

<!--  -->

{#snippet Link(href: string, label: string, className?: string, isExternal: boolean = false)}
  <a
    {href}
    target="_blank"
    rel={isExternal ? 'noopener noreferrer' : null}
    class={cn('group mr-8 flex items-center text-waterloo hover:text-green', className)}
    data-source="santiment.net"
    data-type={label}
  >
    {label}

    {#if isExternal}
      <Svg id="external-link" w={12} class="ml-[5px] fill-waterloo group-hover:fill-green"></Svg>
    {/if}
  </a>
{/snippet}

<style>
  .products {
    --product-icon-size: 32px;
    padding: 0 !important;

    :global {
      .business {
        padding: 0 !important;
        margin: 0 0 16px !important;
        border: 0 !important;
      }

      .chain {
        border-bottom: 1px solid var(--porcelain);
        padding-bottom: 12px;
      }

      .product {
        align-items: center;
        padding: 8px 16px !important;
      }

      h3 {
        margin-bottom: 8px !important;
      }

      p {
        display: none;
      }

      .icon {
        width: 32px !important;
        height: 32px !important;
      }
    }
  }
</style>
