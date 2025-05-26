<script>
  import CtaDesktop from './CtaDesktop.svelte'
</script>

<section class="bg-white-night py-40 text-white-day night-mode">
  <div class="container">
    <div class="mb-40 flex items-end gap-12">
      <div class="max-w-[40rem]">
        <h3 class="mb-6 text-5xl font-bold">
          <span class="text-orange">Crypto analytics</span> to make data-driven decisions
        </h3>
        <p class="text-xl">
          Profitable trading decisions are based on metrics and market analysis. Discover new
          investment opportunities by finding answers to all your trading questions.
        </p>
      </div>
      <div class="relative">
        <img
          src="/left-puzzle.svg"
          class="absolute left-2.5 top-[3.125rem] animate-left-puzzle md:left-0 md:top-[1.875rem] md:h-[3.75rem] md:w-[3.75rem]"
          alt=""
        />
        <img
          src="/right-puzzle.svg"
          class="absolute bottom-[7.25rem] right-[10.25rem] animate-right-puzzle md:bottom-[4.25rem] md:right-[6.5rem] md:h-[3.75rem] md:w-[3.75rem]"
          alt=""
        />
        <img src="/alien.svg" class="md:h-[11rem] md:w-[11.5rem]" alt="" />
      </div>
    </div>
    <CtaDesktop />
    <div class="flex gap-x-[6.25rem]">
      <img src="/team.png" class="w-1/2 object-contain" alt="" />
      <div>
        <p class="mb-1 text-base font-semibold text-orange">Our Mission</p>
        <h2 class="mb-6 text-4xl font-semibold text-rhino">
          We Simplify the Analysis and Create Alpha Together
        </h2>
        <p class="text-lg">
          Since our founding in 2016, we’ve been on a mission to develop the best market behaviour
          analysis tools available for crypto investors.
        </p>
        <p class="text-lg">
          All market participants and stakeholders must perform complex analysis in order to make
          wise investment decisions. We simplify this process and make analysis more accessible by
          helping people understand the meaning behind the behaviour (i.e. buying, holding and
          selling activity) of key groups within the crypto ecosystem.
        </p>
      </div>
    </div>
  </div>
</section>
