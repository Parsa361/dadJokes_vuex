<template>
    <div class="bg-slate-200">
        <header class="container mx-auto flex justify-between items-center px-2 py-5 sm:px-0">
            <nav class="flex justify-start items-center">
                <RouterLink to="/" class="btn mr-5">Home</RouterLink>
                <RouterLink to="/about" class=" mr-5">About</RouterLink>
                <RouterLink to="/jokes" class=" mr-5">Jokes</RouterLink>
            </nav>

            <div>
                <RouterLink to="/" class="btn">Get News</RouterLink>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>
