<script lang="ts">
  import ProductsButton from 'san-webkit-next/ui/app/Products'
  import Button from 'san-webkit-next/ui/core/Button'
  import { cn } from 'san-webkit-next/ui/utils'

  type TProps = {
    class: string
  }

  const { class: className = '' }: TProps = $props()
</script>

<ProductsButton class={className} align="start" isCompact>
  {#snippet children({ props })}
    <Button
      {...props}
      icon="arrow-down"
      iconOnRight
      iconSize={9}
      class={cn(
        'duration-250 mr-8 fill-fiord pl-0 text-fiord transition-transform',
        'hover:bg-transparent hover:fill-green hover:text-green',
        '[&>svg]:duration-[250ms] [&>svg]:transition-transform',
        '[&>svg]:ease-in-out [&[data-state=open]>svg]:rotate-180',
      )}>Products</Button
    >
  {/snippet}
</ProductsButton>
