<template>
  <div class="shadow" id="home-container">
    <header>
      <h1 id="title">ChessMate</h1>
      <p id="description">This is a sussy Chess Game</p>
    </header>
    <section id="lobby-join">
      <div class="input-wrapper">
        <label for="username">Username</label>
        <input class="inp" id="username" name="username" type="text">
      </div>
      <div class="input-wrapper">
        <label for="lobby-code">Lobby Code</label>
        <input class="inp" id="lobby-code" name="lobby-code" type="text">
      </div>
      <div class="btn-wrapper">
        <button class="btn">Join Lobby</button>
      </div>
    </section>
    <section id="lobby-create">
      <p>or</p>
      <div class="btn-wrapper">
        <button class="btn">Create Lobby</button>
      </div>
    </section>
    <section id="contributors">
      <p>Created by</p>
      <a href="https://github.com/f2hafner" target="blank">f2hafner</a>
      <a href="https://github.com/TheRealPayPaul" target="blank">TheRealPayPaul</a>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  data: () => ({
    title: 'Home'
  })
})
</script>

<style scoped>
  #home-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    padding: 0 2rem;
  }

  section, header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    margin-top: 4rem;
  }

  #title {
    font-size: 4rem;
  }

  #lobby-join {
    margin-top: 2.5rem;
  }

  #lobby-create {
    margin-top: 2rem;
  }

  #lobby-create p {
    font-weight: bold;
  }

  .btn-wrapper {
    margin-top: 2rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
  }

  .input-wrapper label {
    font-weight: bold;
  }

  #contributors {
    color: gray;
    margin: 3rem 0;
  }
</style>
