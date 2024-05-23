<script>
    import {skill_dict} from "../lib/data"
    // const handleSubmit() {
    //     let will = "Do something blah blah blah"
    // }
</script>

<section class="py-8" id="home">
    <div class="flex items-center justify-center px-6 flex-col md:flex-row">
        <img src="logo.svg" alt="codeliterature logo" class="h-[200px] w-[200px]">
        <div class="px-8">
            <h1 class="font-heading text-2xl text-title">codeliterature</h1>
            <p class="text-wrap text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere saepe, doloremque accusantium repudiandae iure obcaecati eaque? Odit nam distinctio ea illum quas autem error pariatur quia iste minus. Molestias ratione perferendis quae, voluptatem atque accusamus temporibus omnis maxime porro inventore error repellendus voluptate nam ea laudantium ipsa unde aliquam quis facilis. Laborum architecto modi consectetur quia neque numquam maiores?</p>
        </div>
    </div>
</section>
<section id="about">
    <div class="p-4">
        <div class="p-2">
            <h1 class="text-center text-2xl font-heading font-bold py-2 text-title tracking-wide">About Us</h1>
            <p class="text-justify text-white p-4 text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione doloremque est molestiae dicta error minima quaerat provident, eos magni sint iste quod, corrupti fugiat voluptatum excepturi voluptatibus! Officia, cum? </p>
        </div>
        <div class="flex flex-col space-y-4">
            <h1 class="text-center text-2xl font-bold py-2 text-title font-heading tracking-wide">Our Tech Stack</h1>
            <div class="flex flex-wrap py-2 justify-around ">
                {#each Object.entries(skill_dict) as [stack, tools]}
                <div class="border border-title border-2px space-y-2 w-[300px] p-2 rounded-lg my-2 mx-2">
                    <h2 class="text-center font-bold text-xl text-title font-heading">{stack}</h2>
                    <div class="flex flex-wrap p-2">
                        {#each tools as tool}
                        <p class="rounded-lg p-2 font-semibold bg-title m-2">{tool}</p>
                        {/each}
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>
<section id="contact">
    <div class="space-y-4 mx-2">
        <div class="flex flex-col items-start">
            <h1 class="text-2xl text-title font-bold p-2 px-2 font-heading tracking-wide">GET IN TOUCH WITH US</h1>
            <form action="" class="flex flex-col space-y-4 items-baseline mx-2">
                <input type="text" class="text-sm p-2 rounded-lg focus:outline focus:outline-title placeholder:italic w-[250px]" placeholder="Name..." required>
                <input type="email" class="text-sm p-2 rounded-lg focus:outline focus:outline-title placeholder:italic w-[250px]" placeholder="Email..." required>
                <textarea name="" id="" rows="6" class="text-sm p-2 rounded-lg focus:outline focus:outline-title placeholder:italic w-[250px]" placeholder="Write your message here..." required/>
                <button class="py-2 px-4 bg-title rounded-lg font-bold" type="submit">Send</button>
            </form>
        </div>
    </div>
</section>
