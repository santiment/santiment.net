<script lang="ts">
  import { onMount } from 'svelte'
  import { Products } from 'san-webkit-next/ui/app/Products'
  import Button from 'san-webkit-next/ui/core/Button'
  import { cn } from 'san-webkit-next/ui/utils'
  import Link from '../Link.svelte'
  import { links } from '../utils'

  const { onClose } = $props()

  onMount(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = '')
  })
</script>

<div class="fixed inset-0 z-50 hidden flex-col overflow-auto bg-white p-8 md:flex">
  <Button
    icon="close"
    size="md"
    aria-label="Close menu"
    class="absolute right-3 top-5 fill-waterloo"
    onclick={onClose}
  />

  <div class="mb-6 flex flex-col gap-y-5 pb-3 pt-10">
    {#each links as link}
      <Link {...link} class="ml-4 text-rhino" onclick={onClose} />
    {/each}

    <Products
      class={cn(
        'w-full flex-col gap-y-5 rounded-none border-t border-porcelain p-0 pt-6',
        '[&_section>a]:w-full [&_section>a]:items-center [&_section>a]:px-4 [&_section>a]:py-2',
        '[&_section>a>div:has(svg)]:h-8 [&_section>a>div:has(svg)]:w-8 [&_section>a>div:has(svg)]:min-w-8',
        '[&_h2]:font-medium [&_h3]:mb-2 [&_p]:hidden',
      )}
    />
  </div>
</div>
