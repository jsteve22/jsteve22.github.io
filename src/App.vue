<template>
  <nav class="w-full bg-blue-600 select-none">
    <router-link to="/" class="hover:text-opacity-40">Home</router-link> |
    <router-link to="/about" class="hover:text-opacity-40">About</router-link> |
    <router-link to="/research" class="hover:text-opacity-40">Research</router-link>
  </nav>
  <router-view/>
  <footer class="w-full flex flex-col items-center">
    <div class="flex flex-row justify-around w-3/12">
      <a :href="ghlink" target="_blank" :class="linkClass">Github</a>
      <a :href="lilink" target="_blank" :class="linkClass">LinkedIn</a>
    </div>
    <div class="w-full border-t text-gray-400 text-lg">
      &copy; 2023 Jeremy Stevens
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      ghlink: 'https://github.com/jsteve22',  
      lilink: 'https://www.linkedin.com/in/jeremy-stevens-14697a206/',
      linkClass: 'text-gray-500 font-bold text-xl hover:text-opacity-40',
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
