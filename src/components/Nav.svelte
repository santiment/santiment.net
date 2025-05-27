<script lang="ts">
  import Products from 'san-webkit-next/ui/app/Products'
  import Button from 'san-webkit-next/ui/core/Button'
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { cn } from 'san-webkit-next/ui/utils'
  import CtaButton from './CtaButton.svelte'

  let navOpen = $state(false)
  // TODO:
  // Move code to san-webkit-next
  // Add check for go to sanbase button
</script>

<nav class="border-b border-porcelain bg-white night-mode">
  <div
    class="mx-auto flex h-[70px] max-w-[1192px] items-center justify-between px-5 md:h-[56px] md:px-[16px]"
  >
    <div class="flex flex-shrink-0 items-center">
      <a href="/" class="mr-16">
        <img src="/logo.svg" class="h-[23px] w-[104px] flex-shrink-0" alt="logo" />
      </a>
    </div>

    <div class="flex w-full items-center md:hidden">
      <Products class="night-mode">
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
      </Products>

      {@render Link('/about', 'About')}

      {@render Link('/team', 'Team')}

      {@render Link('/jobs', 'Jobs')}

      {@render Link('https://academy.santiment.net/', 'Academy', 'ml-auto')}

      {@render Link('https://app.santiment.net/pricing', 'Pricing')}
    </div>

    <button class="hidden md:block" onclick={() => (navOpen = true)}>
      <Svg id="menu" class="fill-waterloo" />
    </button>

    <CtaButton />
  </div>

  {#if navOpen}
    <div class="fixed inset-0 z-50 hidden flex-col overflow-auto bg-white p-8 md:flex">
      <button class="mb-4 self-end" onclick={() => (navOpen = false)}>
        <Svg id="close" class="fill-waterloo" />
      </button>

      <div class="mb-4">
        <Products />
      </div>

      {@render Link('https://santiment.net/about', 'About', 'text-rhino mr-0 mb-5')}

      {@render Link('https://santiment.net/team', 'Team', 'text-rhino mr-0 mb-5')}

      {@render Link('https://santiment.net/jobs', 'Jobs', 'text-rhino mr-0 mb-5')}

      {@render Link('https://academy.santiment.net/', 'Academy', 'text-rhino mr-0 mb-5')}

      {@render Link('https://app.santiment.net/pricing', 'Pricing', 'text-rhino mr-0 mb-5')}
    </div>
  {/if}
</nav>

{#snippet Link(href: string, label: string, className?: string)}
  <a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class={cn('mr-8 flex items-center text-waterloo hover:text-green', className)}
    data-source="santiment.net"
    data-type={label}
  >
    {label}
  </a>
{/snippet}
