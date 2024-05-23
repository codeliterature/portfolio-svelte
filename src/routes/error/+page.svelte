<script>
    import { goto } from "$app/navigation";

    setTimeout(()=>{
        goto("/")
    }, 5000)
</script>


<section class="min-h-[80vh] flex items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-2">
        <h1 class="text-red-600 font-heading tracking-wider text-2xl">Something went wrong</h1>
        <h2 class="text-white">Try Again!!</h2>
    </div>
</section>