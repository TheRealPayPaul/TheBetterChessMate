<template>
<div id="board-container">
  <div id="board-wrapper">
    <div id="chess-board">
      <ChessPiece piece="qb" posX="1" posY="0"></ChessPiece>
      <ChessPiece piece="qb" posX="4" posY="6"></ChessPiece>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChessPiece from './chess_piece.vue'
export default defineComponent({
  name: 'Board',
  components: {
    ChessPiece,
  }
})
</script>

<style scoped>
  /* #board-container {

  } */

  #chess-board {
    font-size: 16px;
    width: 40em;
    height: 40em;
    background-image: url('/chessboard.png');
    background-size: contain;
    position: relative;
  }

  @media (max-width: 680px) {
    #chess-board {
      font-size: 10px;
    }
  }
</style>