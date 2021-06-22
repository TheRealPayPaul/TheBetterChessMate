<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Lobby',
  data: () => ({
    title: 'Lobby'
  })
})
</script>

<style scoped>

</style>
