<script setup lang="ts">
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
  <div class="app_container ">
    <div class="flex pt-10 justify-center ">
      <Button label="Submit" severity="contrast" />
    </div>
    <div class="flex pt-10 justify-center">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      <i class="pi pi-user" style="color: #708090"></i>
    </div>
    <div class="flex pt-10 justify-center">
      <div class="i-logos-apiary"></div>
      <div class="i-svg-spinners-180-ring-with-bg"></div>
    </div>
    <div class="flex pt-10 justify-center">
      <InputText type="text" v-model="value" />
    </div>
  

  </div>
 
</template>

<style scoped></style>
