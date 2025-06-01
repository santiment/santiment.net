<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'

  type TProps = {
    options: string[]
    defaultSelectedIndex: string
    onSelect: (tab: string) => void
    class: string
  }

  const {
    options = [],
    defaultSelectedIndex = '',
    onSelect = () => {},
    class: className = '',
  }: TProps = $props()

  let selected = $state(defaultSelectedIndex)

  function selectTab(tab: string) {
    selected = tab
    onSelect(tab)
  }
</script>

<div class={`flex w-fit space-x-6 border-b border-athens ${className}`}>
  {#each options as tab}
    <button
      class={cn(
        'relative px-6 pb-[14px] font-semibold transition-colors duration-200',
        selected === tab ? 'text-green' : 'text-casper',
      )}
      onclick={() => selectTab(tab)}
    >
      {tab}

      {#if tab === selected}
        <div class="absolute bottom-0 left-0 h-[2px] w-full rounded-sm bg-green"></div>
      {/if}
    </button>
  {/each}
</div>
