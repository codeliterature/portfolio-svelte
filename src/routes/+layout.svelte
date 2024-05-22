<script>
  import "../app.css";
  import { fade, fly, slide, scale, draw } from 'svelte/transition';
  let show = false;
</script>

<main class="bg-background font-body w-full">
  <header class="md:py-10">
    <nav
      class="items-center justify-between font-heading text-2xl px-8 text-title bg-nav h-[90px] drop-shadow-xl hidden md:flex"
    >
      <a href="/">Home</a>
      <a href="/">About</a>
      <img
        src="icons/codeliterature_new.svg"
        alt="codeliterature logo"
        class="h-[150px] w-[150px] rounded-full drop-shadow-xl"
      />
      <a href="/">Projects</a>
      <a href="/">Contact</a>
    </nav>
    <nav class="md:hidden px-8 py-4 flex items-center justify-between">
      <button class="text-white" on:click={() => show = !show}>
        {#if !show}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          {...$$props}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 5h12M4 12h16M4 19h8"
            color="currentColor"
          />
        </svg>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 384 512" {...$$props}>
          <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z" />
        </svg>
        {/if}
      </button>
      {#if show}
      <div in:fly={{ x: 200, duration: 500 }} out:fly={{ x: -200, duration: 500 }} class="h-[50%] w-[95%] absolute mx-auto top-20 right-2 rounded-lg bg-secondary flex flex-col items-center justify-center text-xl gap-6 font-heading">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </div>
      {/if}
      <h1 class="text-xl text-title font-heading">codeliterature</h1>
    </nav>
  </header>
  <slot />
</main>
