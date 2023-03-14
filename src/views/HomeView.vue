<template>
  <div>
    <div class="bg-white rounded-lg p-6 border-2 border-teal-500 my-2">
      <div class="mb-4">
        <img src="https://picsum.photos/200" alt="Example Photo" class="rounded-lg mx-auto">
      </div>
      <div class="mb-4">
        <h2 class="text-xl font-bold text-gray-900 text-center">funny jokes here</h2>
        <p class="text-gray-600 font-medium text-center">{{ joke }}</p>
      </div>
    </div>

    <div class="text-center"><button class="btn" @click="addJoke">Generate new joke</button></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({joke: 'getCurrentJoke'})
    // joke() {
    //   return this.$store.getters.getCurrentJoke
    // }
  },
  methods: {
    ...mapActions({addJoke: 'setCurrentJoke'})
    // addJoke() {
    //   this.$store.dispatch('setCurrentJoke')
    // }
  }
}
</script>