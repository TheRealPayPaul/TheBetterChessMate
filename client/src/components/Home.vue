<template>
  <div class="shadow" id="home-container">
    <header>
      <h1 id="title">ChessMate</h1>
      <p id="description">This is a sussy Chess Game</p>
    </header>
    <section id="lobby-join">
      <div class="input-wrapper">
        <input class="inp" name="username" v-model="values[0]" @input="updateCss(0)" type="text">
        <span class="label" :class="{ small_label: small_labels[0] }">Username</span>
      </div>
      <hr>
      <div class="input-wrapper">
        <input class="inp" name="lobby_code" v-model="values[1]" @input="updateCss(1)" type="text">
        <span class="label" :class="{ small_label: small_labels[1] }">Lobby Code</span>
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
      <br>
      <p>© 2021</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  data: () => ({
    small_labels: [
      false, // Username
      false // Lobby Code
    ],
    values: [
      '', // Username
      '' // Lobby Code
    ]
  }),
  methods: {
    /**
     * @param index used to point to the correct array entries, since there are multiple input fields
     * 
     * If the input field holds a value that is not '' then
     * it is going to activate the small_label css class
     */
    updateCss: function(index: number): void {
        (this.values[index]) ? this.small_labels[index] = true : this.small_labels[index] = false;
    }
  }
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

  #description {
    color: gray;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .label {
    transform: scale(2.4) translateY(.9rem);
    color: rgb(34, 34, 34);
    pointer-events: none;
    transition: all .2s;
  }
  .inp:focus + .label, .small_label {
    position: relative;
    font-weight: bold;
    color: black;
    transform: none;
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

  #contributors {
    color: gray;
    margin: 3rem 0;
  }

  hr {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 1rem;
    border: black solid 1px;
    background-color: black;
    border-radius: 1rem;
  }
</style>
