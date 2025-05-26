<script lang="ts">
  import Tweet from './Tweet.svelte'
  import { tweets } from './data'

  const items = [...tweets, ...tweets]
</script>

<section class="m-0 max-w-full overflow-x-hidden bg-white px-0 py-40 lg:py-16">
  <h3
    class="mb-10 flex items-center justify-center text-4xl font-semibold text-mirage md:mb-9 md:px-4 md:py-0 md:text-2xl"
  >
    See what our users are saying
  </h3>
  <div class="relative mx-auto my-0 h-[400px] max-w-full pl-8">
    <div class="tweets flex items-center" style={`--time: ${tweets.length * 3.5}s`}>
      {#each items as { displayName, handle, avatar, content, id }}
        <Tweet {displayName} {avatar} {handle} {content} {id} />
      {/each}
    </div>
  </div>
</section>

<style>
  .tweets {
    animation-name: moving;
    animation-duration: var(--time, 30s);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    animation-play-state: running;

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;

    &:hover {
      animation-play-state: paused;
    }

    /* @include responsive('tablet') { */
    /*   animation-duration: calc(var(--time, 30s) * 1.5); */
    /* } */
    /**/
    /* @include responsive('phone', 'phone-xs') { */
    /*   animation-duration: calc(var(--time, 30s) * 2); */
    /* } */
  }

  @keyframes moving {
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
</style>
