<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
    <footer class="footer">
      <div class="container">
        <p class="text-muted" lingdex="2">Communication App © Copyright {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
}
.container .text-muted {
    margin: 20px 0;
}
</style>
