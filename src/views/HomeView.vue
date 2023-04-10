<template>
  <div id="wrapper" class="w-full flex flex-col items-center py-20">
    <div class="flex flex-row justify-between w-8/12">
      <!-- Left Block -->
      <div class="w-5/12 flex flex-col items-center">
        <img src="../assets/jeremy.jpg" alt="Jeremy Stevens" class="rounded-full object-cover object-top w-96 h-96">
        <h1 class="text-2xl font-bold">
          Jeremy Stevens
        </h1>
        <h2 class="text-1xl font-bold">
          Computer Science Student
        </h2>
      </div>
      <!-- Right Block -->
      <div class="w-5/12 text-left flex flex-col items-start">
        <h1 :class="headerClass">About Me</h1>
        <p class="text-lg">
          Hi! I am Jeremy Stevens. I am a Junior Computer Science student at the University of Notre Dame. Originally from New Jersey and is looking for software engineering internships in the greater Philadelphia area. During the previous two summers, I have done research at New Jersey Institute of Technology and University of Notre Dame.
        </p>
        <h1 :class="headerClass">Interests</h1>
        <ul class="list-disc text-lg px-5">
          <li>Cybersecurity</li>
          <li>Embedded Systems</li>
          <li>Low Level Software</li>
          <li>Compilers</li>
        </ul>
        <h1 :class="headerClass">Course Work</h1>
        <ul class="list-disc text-lg px-5">
          <li>Computer Architecture</li>
          <li>Electronics</li>
          <li>Compilers and Language Design</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      headerClass: "text-5xl font-bold"
    }
  },
});
</script>
