<script lang="ts">
  type TProps = {
    displayName: string
    content: string
    handle: string
    id: string
    avatar: string
  }

  const { displayName, content, handle, id, avatar }: TProps = $props()
</script>

<div
  aria-label="Opens Tweet on Twitter in a new tab"
  class="mr-8 h-[400px] min-h-[400px] w-[360px] min-w-[360px] rounded-[10px] border border-porcelain bg-white text-rhino shadow-[0_2px_24px_rgba(24,27,43,0.04),1px_3px_7px_rgba(47,53,77,0.05)] transition-transform duration-100 ease-in-out hover:scale-[1.01] hover:text-mirage"
>
  <article class="flex h-full w-full flex-col p-8">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://twitter.com/${handle}/status/${id}`}
      class="cursor-pointer"
    >
      <header class="mb-6 flex items-start">
        <img src={avatar} alt="" class="mr-4 h-12 w-12 rounded-full" />

        <div>
          <div class="mb-[2px] text-base font-semibold leading-tight text-[#181b2b]">
            {displayName}
          </div>
          <div class="text-sm leading-snug text-waterloo">@{handle}</div>
        </div>

        <svg viewBox="0 0 24 24" width="24" class="ml-auto">
          <path
            fill="rgb(29,161,242)"
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 003.96 9.824a4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41z"
          />
        </svg>
      </header>
    </a>

    <!-- TODO: Link color is wrong -->
    <div
      class="text-base leading-relaxed text-rhino [&>*]:text-base [&>*]:leading-relaxed [&>*]:text-rhino [&>a+*]:ml-0 [&>a]:mx-1 [&>a]:text-[#4da0eb] [&>img]:mt-3 [&>img]:h-auto [&>img]:w-full [&>img]:rounded-2xl"
    >
      {@html content}
    </div>
  </article>
</div>
