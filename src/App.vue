<template>
  <div id="app">

    <NavBar />

    <router-view class="container mx-auto px-2 sm:px-0" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { mapActions } from "vuex";


export default {
  data() {
    return {};
  },
  components: { NavBar },
  methods: { ...mapActions(['setCurrentJoke']) },
  mounted() {
    this.setCurrentJoke();
  }
}
</script>

<style>
.btn {
  @apply inline-block px-4 py-2 border-2 border-teal-500 rounded-md
}

.btn:hover {
  @apply bg-teal-500 text-white
}
</style>