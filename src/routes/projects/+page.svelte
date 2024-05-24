<script>
    import projectData from "$lib/projectData";
</script>

<section class="p-2">
<h1 class="text-title text-2xl tracking-wide font-heading text-center m-2">
    Our Projects
</h1>
<div class="grid grid-cols-12 gap-4">
{#each projectData as project}
    <div class="flex flex-col justify-between border border-white border-2px rounded p-2 pb-4 col-span-12 md:col-span-6 lg:col-span-3">
    <img alt={project.title} src={project.img} class="h-auto w-auto rounded" />
    <div class="">
        <h2 class="text-title text-xl tracking-wide font-heading my-2">{project.title}</h2>
        <p class="text-wrap text-white my-2 text-lg font-light">{project.description}</p>
        <div class="flex gap-2 items-center">
            <a
            href={project.url}
            target="_blank"
            class="font-body px-2 py-1 font-semibold rounded bg-title transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-200"
            >Live Preview</a
            >
            <a
            href={project.githubLink}
            target="_blank"
            class="font-body px-2 py-1 font-semibold rounded bg-title transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-200"
            >Github Repo</a
            >
        </div>
    </div>
    </div>
{/each}
</div>
</section>
