<template>
    <div>
        <div v-for="(joke, index) in allJokes" :key="index" class="bg-white rounded-lg p-6 border-2 border-teal-500 my-2">
            <div class="mb-4">
                <h2 class="text-xl font-bold text-gray-900 text-center">Joke {{ index }}</h2>
                <p class="text-gray-600 font-medium text-center">{{ joke }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({ allJokes: 'getAllJokes' })

        // allJokes() {
        //     return this.$store.getters.getAllJokes
        // }
    },

}
</script>