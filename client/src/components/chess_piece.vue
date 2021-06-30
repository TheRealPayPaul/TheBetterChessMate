<template>
  <div :style="inlineStyle" class="chess-piece-container">
    {{ piece }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ChessPiece',
  props: [ 'piece', 'posX', 'posY' ],
  data: () => ({
    inlineStyle: {
      top: '0em',
      left: '0em'
    }
  }),
  methods: {
    setPos: function() {
      this.inlineStyle.left = this.posX * 5 + 'em';
      this.inlineStyle.top  = this.posY * 5 + 'em';
    }
  },
  beforeMount: function() {
    this.setPos();
  },
  beforeUpdate: function() {
    this.setPos();
  }
})
</script>

<style scoped>
  .chess-piece-container {
    position: absolute;
    width: 5em;
    height: 5em;
    
    transition: top 1s, left 1s;
    background-image: url('/pieces/qb.png');
    background-size: contain;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>