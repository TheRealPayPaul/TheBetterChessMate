<template>
  <div id="app-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style scoped>
  #app-container {
    display: flex;
    justify-content: center;
  }
</style>
