<script setup>
import { reactive, ref, watchEffect, watch,onMounted } from 'vue';
</script>

<template>
<div class="son">
    <h3>子组件Son</h3>
</div>
</template>

<style scoped>
.son{
    background-color: red;
}
</style>
