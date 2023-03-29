<template>
  <div class="container bg-gray-100">
    <router-view></router-view>
  </div>
  <Footer class=" sticky bottom-0" />
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
