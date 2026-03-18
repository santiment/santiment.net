<script lang="ts">
  import { dialogs$ } from 'san-webkit-next/ui/core/Dialog'
  import DialogComponent from './DialogComponent.svelte'
  import { onMount } from 'svelte'
  import { getSavedDialogClosed, saveDialogClosed } from './storage'

  const showDialog = dialogs$.new(DialogComponent)

  const OPEN_TIMEOUT = 5000

  let openTimer: NodeJS.Timeout | undefined

  function openDialog() {
    clearTimeout(openTimer)
    openTimer = setTimeout(() => showDialog({ onClose: saveDialogClosed }), OPEN_TIMEOUT)
  }

  onMount(() => {
    if (getSavedDialogClosed()) return

    openDialog()
  })
</script>

<div></div>
