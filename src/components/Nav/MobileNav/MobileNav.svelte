<script lang="ts">
  import Button from 'san-webkit-next/ui/core/Button'

  import Overlay from './Overlay.svelte'

  let navOpen = $state(false)
</script>

<Button
  icon="menu"
  aria-label="Open menu"
  size="md"
  class="hidden md:flex fill-waterloo"
  onclick={() => (navOpen = true)}
/>

{#if navOpen}
  <Overlay onClose={() => (navOpen = false)} />
{/if}
