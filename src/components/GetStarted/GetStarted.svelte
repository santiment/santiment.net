<script lang="ts">
  import SubscriptionForm from './SubscriptionForm.svelte'
</script>

<section
  class="bg-c bg-green bg-[url('/get-started-bg.svg')] bg-[90%_50%] bg-no-repeat py-16 sm:py-10"
>
  <div class="container">
    <h4 class="mb-8 text-3xl text-white sm:text-lg">Ready to get started? Sign up now!</h4>
    <SubscriptionForm class="max-w-[432px]" label="Get started" />
  </div>
</section>
