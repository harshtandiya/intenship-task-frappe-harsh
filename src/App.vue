<template>
  <div class="container bg-gray-100">
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
  },
  data() {

  },
  methods: {

  },
}
</script>

<style src="./style.css"></style>
