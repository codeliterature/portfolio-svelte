<script>
    import projectData from "$lib/projectData";
</script>

<section class="p-2">
<h1 class="text-title text-2xl tracking-wide font-heading text-center m-2">
    Our Projects
</h1>
<div class="grid grid-cols-12 gap-4">
{#each projectData as project}
    <div class="flex flex-col justify-between border border-title border-2px rounded-lg p-2 m-2 col-span-12 md:col-span-6 lg:col-span-3">
    <img alt={project.title} src={project.img} height="250px" width="200px" class="h-auto w-auto rounded-lg" />
    <div class="items-baseline">
        <h2 class="text-title text-xl tracking-wide font-heading my-2">{project.title}</h2>
        <p class="text-wrap text-white p-2 text-lg font-light">{project.description}</p>
        <div>
        <a href={project.githubLink} target="_blank" class="px-2 py-1 border border-title rounded-lg text-title hover:bg-title hover:border-none hover:text-black">GitHub</a>
        <a href={project.url} target="_blank" class="px-2 py-1 border border-title rounded-lg hover:text-title hover:bg-black bg-title text-black">Live</a>
        </div>
    </div>
    </div>
{/each}
</div>
</section>
