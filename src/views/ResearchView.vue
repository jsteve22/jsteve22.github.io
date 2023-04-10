<template>
  <div class="w-full px-40 mb-60 flex flex-col items-start text-left">
    <h1 :class="projectClass">NDNano</h1>
    <h4 :class="advisorClass">Advisor: Professor Ningyuan Cao</h4>
    <p :class="descClass">
      Over the course of ten weeks, I studied Fully Homomorphic Encryption and the operation costs associated with encryption, decryption, and cyphertext manipulation. I studied the structure of modern homomorphic encryption schemes. After gaining a solid understanding of the schemes, I implemented two encryption schemes in Python. The summer culminated in presenting the research results in an Undergraduate Symposium. 
    </p>
    <h1 :class="projectClass">New Jersey Institute of Technology</h1>
    <h4 :class="advisorClass">Professor Lian Duan</h4>
    <p :class="descClass">
      During ten weeks, I worked in a group of four undergraduate students to analyze customer trends in a big dataset. I was the lead programmer, working mostly in Python. I cleaned a gigabyte worth of data and constructed a dataset of customers and their trips to a grocery store. We then used statistical models to analyze customer trends. We finished the summer by giving a virtual presentation at a Symposium. 
    </p>

  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResearchView',
  data() {
    return {
      projectClass: 'font-bold text-5xl mt-8',
      advisorClass: 'font-bold text-xl mt-2',
      descClass: 'text-lg mt-2',
    }
  },
});
</script>