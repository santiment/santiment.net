<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import Svg from 'san-webkit-next/ui/core/Svg'

  type TProps = {
    href: string
    label: string
    class?: string
    isExternal?: boolean
  }

  const { href, label, class: className = '', isExternal = false }: TProps = $props()
</script>

<a
  {href}
  target={isExternal ? '_blank' : '_self'}
  rel={isExternal ? 'noopener noreferrer' : undefined}
  class={cn('group flex items-center text-fiord hover:text-green-hover', className)}
  data-source="santiment.net"
  data-type={label}
>
  {label}

  {#if isExternal}
    <Svg id="external-link" w={12} class="ml-[5px] fill-fiord group-hover:fill-green" />
  {/if}
</a>
