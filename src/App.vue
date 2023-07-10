<script setup lang="ts">
import Header from './components/Header.vue'
import Figure from './components/Figure.vue'
import WrongLetters from './components/WrongLetters.vue'
import Word from './components/Word.vue'
import Popup from './components/Popup.vue'
import Notification from './components/Notification.vue'
</script>

<template>
  <Header />
  <div class="game-container">
    <Figure />
    <WrongLetters />
    <Word />
  </div>
  <Popup v-if="false"/>
  <Notification /> 
</template>