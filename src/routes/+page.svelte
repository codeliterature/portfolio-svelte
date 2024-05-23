<script>
  import data from "$lib/data";
  import projectData from "$lib/projectData";
  import { goto } from "$app/navigation";
  let name = "";
  let email = "";
  let text = '';
  let message = '';
  let clicked = false
  const sendEmail = async () => {
    clicked = true
    const subject = `${name} contacted you. their email: ${email}`;
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subject, text }),
    });

    const result = await response.json();
    message = result.message;
    if (message){
      goto("/success")
    }
    else {
      goto("/error")
    }
    }
</script>

<section class="py-8" id="home">
  <div class="flex items-center justify-center px-6 flex-col md:flex-row">
    <img src="logo.svg" alt="codeliterature logo" class="h-[200px] w-[200px]" />
    <div class="px-8">
      <h1
        class="font-heading tracking-wider text-2xl text-title"
      >
        codeliterature
      </h1>
      <p class="text-wrap text-white text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        facere saepe, doloremque accusantium repudiandae iure obcaecati eaque?
        Odit nam distinctio ea illum quas autem error pariatur quia iste minus.
        Molestias ratione perferendis quae, voluptatem atque accusamus
        temporibus omnis maxime porro inventore error repellendus voluptate nam
        ea laudantium ipsa unde aliquam quis facilis. Laborum architecto modi
        consectetur quia neque numquam maiores?
      </p>
    </div>
  </div>
</section>
<section id="about">
  <div class="p-4">
    <div class="p-2">
      <h1
        class="text-center text-2xl font-heading tracking-wider font-bold py-2 text-title"
      >
        About Us
      </h1>
      <p class="text-justify text-white p-4 text-wrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione
        doloremque est molestiae dicta error minima quaerat provident, eos magni
        sint iste quod, corrupti fugiat voluptatum excepturi voluptatibus!
        Officia, cum?
      </p>
    </div>
    <div class="flex flex-col space-y-4">
      <h1
        class="text-center text-2xl font-bold py-2 text-title font-heading tracking-wider"
      >
        Our Tech Stack
      </h1>
      <div class="grid grid-cols-12 gap-4">
        {#each Object.entries(data) as [stack, tools]}
          <div
            class="border border-title border-2px col-span-12 md:col-span-6 xl:col-span-4 p-2 rounded my-2 mx-2"
          >
            <h2
              class="text-center font-bold text-xl text-title font-heading tracking-wider"
            >
              {stack}
            </h2>
            <div class="flex flex-wrap items-center p-2">
              {#each tools as tool}
                <p
                  class="rounded p-2 font-semibold bg-title m-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-200"
                >
                  {tool}
                </p>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section id="projects" class="py-8 px-4">
  <div>
    <h1
      class="text-2xl text-title font-heading tracking-wider text-center py-8"
    >
      Latest Projects
    </h1>
    <div class="grid grid-cols-12 gap-4">
      {#each projectData as project}
        <article
          class="p-2 pb-4 rounded border border-1px border-white col-span-12 md:col-span-6 lg:col-span-3"
        >
          <div class="flex flex-col justify-center gap-2 pb-2">
            <img
              src={project.img}
              alt="{project.title} thumbnail"
              class="h-auto w-auto rounded"
            />
            <h1
              class="text-xl text-title font-heading tracking-wider"
            >
              {project.title}
            </h1>
            <p class="text-md text-white font-body">{project.description}</p>
          </div>
          <div class="flex gap-2 items-center">
            <a
              href={project.url}
              target="_blank"
              class="font-body px-2 py-1 rounded bg-title transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-200"
              >Live Preview</a
            >
            <a
              href={project.githubLink}
              target="_blank"
              class="font-body px-2 py-1 rounded bg-title transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-200"
              >Github Repo</a
            >
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section id="contact" class="py-8 px-4">
  <div class="px-4">
    <div class="flex flex-col items-center md:items-start">
      <h1
        class="text-2xl text-title font-bold p-2 px-2 font-heading tracking-wider"
      >
        GET IN TOUCH WITH US
      </h1>
      <form on:submit|preventDefault={sendEmail} class="flex flex-col space-y-4 items-baseline mx-2 text-white">
        <input
          type="text"
          class="bg-transparent text-sm p-2  transistion ease-in-out duration-150 focus:outline-none focus:border-b-[3px] focus:border-indigo-500 placeholder:italic w-[250px] border-b border-b-1px border-title"
          placeholder="Name..."
          bind:value={name}
          required
        />
        <input
          type="email"
          class="bg-transparent text-sm p-2 transistion ease-in-out duration-150 focus:outline-none focus:border-b-[3px] focus:border-indigo-500 placeholder:italic w-[250px] border-b border-b-1px border-title"
          placeholder="Email..."
          bind:value={email}
          required
        />
        <textarea
          name=""
          id=""
          rows="6"
          class="bg-transparent text-sm p-2  transistion ease-in-out duration-150 focus:outline-none focus:border-b-[3px] focus:border-indigo-500 placeholder:italic w-[250px] resize-none border-b border-b-1px border-title"
          placeholder="Write your message here..."
          bind:value={text}
          required
        />
        <button class="py-2 px-4 text-background bg-title rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-200" type="submit"
          >
          {#if clicked}
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...$$props}>
            <path fill="none" stroke="currentColor" stroke-dasharray="15" stroke-dashoffset="15" stroke-linecap="round" stroke-width="2" d="M12 3C16.9706 3 21 7.02944 21 12">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
              <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
            </path>
          </svg>
          {:else}
          send
          {/if}
          </button
        >
      </form>
    </div>
  </div>
</section>
