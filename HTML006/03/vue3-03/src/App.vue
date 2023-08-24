<script setup>
import { reactive, ref, watchEffect, watch,onMounted } from 'vue';
import SonCom from './views/sonCom.vue'
</script>

<template>
  <div>
    <h2>父组件App</h2>
    <SonCom></SonCom>
  </div>
</template>

<style scoped>
</style>
