<template>
  <div class="shadow" id="lobby-container">
    <header>
      <h1 id="title">Lobby</h1>
      <p id="code">#{{ lobbyCode }}</p>
    </header>
    <section id="players">
      <PlayerInfo @changePieceColor="changeColor" :username="P1.name" :isBlack="P1.isBlack"></PlayerInfo>
      <hr>
      <PlayerInfo @changePieceColor="changeColor" :username="P2.name" :isBlack="P2.isBlack"></PlayerInfo>
    </section>
    <section id="status">
      <p>{{ status }}</p>
      <div class="btn-wrapper">
        <button class="btn">Start</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PlayerInfo from './player_info.vue'
export default defineComponent({
  name: 'Lobby',
  data: () => ({
    lobbyCode: '0000',
    status: 'Waiting...',
    P1: {
      name: 'Player 1',
      isBlack: true,
    },
    P2: {
      name: 'Player 2',
      isBlack: false,
    }
  }),
  methods: {
    /**
     * Flips the states of the players colors
     */
    changeColor: function() {
      console.log("change");
      if (this.P1.isBlack) {
        this.P1.isBlack = false;
        this.P2.isBlack = true;
      } else {
        this.P1.isBlack = true;
        this.P2.isBlack = false;
      }
    }
  },
  components: {
    PlayerInfo
  }
})
</script>

<style scoped>
  #lobby-container {
    margin-top: 2rem;
    border-radius: 1rem;
    padding: 0 2rem;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  #title {
    font-size: 4rem;
  }

  #code {
    font-size: 2rem;
    color: gray;
  }

  #players {
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  hr {
    width: 100%;
    margin: 1rem 0;
    border: black solid 1px;
    background-color: black;
    border-radius: 1rem;
  }

  #status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  #status p {
    font-size: 2rem;
  }

  .btn-wrapper {
    margin-top: 4rem;
  }
</style>
