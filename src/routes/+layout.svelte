<script>
  import "../app.css";
  import { fade, fly, slide, scale, draw } from "svelte/transition";
  let show = false;
  const year = new Date().getFullYear();
</script>

<main class="bg-background font-body w-full">
  <header class="md:py-10">
    <nav
      class="items-center justify-between font-heading tracking-wider text-2xl px-8 text-title bg-nav h-[90px] drop-shadow-xl hidden md:flex"
    >
      <a href="/home">Home</a>
      <a href="#about">About</a>
      <img
        src="icons/codeliterature_new.svg"
        alt="codeliterature logo"
        class="h-[150px] w-[150px] rounded-full drop-shadow-xl"
      />
      <a href="/projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <nav class="md:hidden px-8 py-4 flex items-center justify-between">
      <button class="text-white" on:click={() => (show = !show)}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 384 512"
            {...$$props}
          >
            <path
              fill="currentColor"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z"
            />
          </svg>
        {/if}
      </button>
      {#if show}
        <div
          in:fly={{ x: 200, duration: 500 }}
          out:fly={{ x: -200, duration: 500 }}
          class="h-[50%] w-[95%] absolute mx-auto top-20 right-2 rounded bg-indigo-500 text-white flex flex-col items-center justify-center text-xl gap-6 font-heading tracking-wider"
        >
          <a href="/home">Home</a>
          <a href="#about">About</a>
          <a href="/projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      {/if}
      <h1 class="text-xl text-title font-heading tracking-wider">
        codeliterature
      </h1>
    </nav>
  </header>
  <slot />
  <footer
    class="flex md:flex-row flex-col items-center justify-between gap-4 py-5 px-4 text-white"
  >
    <div class="text-md">
      {year} © All rights reserved
    </div>
    <span
      class="font-heading tracking-wider text-title transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 cursor-pointer duration-200"
      >CodeLiterature</span
    >
    <div class="flex items-center justify-center gap-2 text-md">
      <h3>Follow us on:</h3>
      <a
        class="transition duration-200 ease-in-out hover:-translate-y-2"
        href="https://x.com/codeliterature"
        target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          {...$$props}
        >
          <path
            fill="currentColor"
            d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
          />
        </svg></a
      >
      <a
        class="transition duration-200 ease-in-out hover:-translate-y-2"
        href="https://instagram.com/codeliterature"
        target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          {...$$props}
        >
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          />
        </svg></a
      >
      <a
        class="transition duration-200 ease-in-out hover:-translate-y-2"
        href="https://github.com/codeliterature"
        target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          {...$$props}
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          />
        </svg></a
      >
    </div>
  </footer>
</main>
