<template>
  <div id="player-info-container">
    <div class="chess-color-wrapper">
      <div @click="emitColorChange" :class="{ pieceblack: isBlack, piecewhite: !isBlack }" class="chess-color piece-white"></div>
    </div>
    <span class="player-username">{{ username }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'PlayerInfo',
  props: [ 'username', 'isBlack' ],
  methods: {
    emitColorChange: function() {
      this.$emit('changePieceColor');
    }
  },
})
</script>

<style scoped>
  #player-info-container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .chess-color-wrapper {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
  }

  .chess-color-wrapper:hover > .chess-color {
    transform: scale(0.9);
    cursor: pointer;
  }

  .chess-color {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
    transition: all .2s;
  }

  .pieceblack {
    background-color: black;
  }

  .piecewhite {
    background-color: white;
  }

  .player-username {
    margin-left: 1rem;
    font-size: 2.5rem;
    white-space: nowrap;
    overflow-x: hidden;
  }
</style>