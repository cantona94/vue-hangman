<script setup lang="ts">
import Header from './components/Header.vue'
import Figure from './components/Figure.vue'
import WrongLetters from './components/WrongLetters.vue'
import Word from './components/Word.vue'
import Popup from './components/Popup.vue'
import Notification from './components/Notification.vue'
import { ref, watch } from 'vue'
import { useRandomWord } from './composables/useRandomWord'
import { useLetters } from './composables/useLetters'
import { useNotification } from './composables/useNotification'

const { word, getRandomWord } = useRandomWord();
const { notification, showNotification } = useNotification();
const {
  letters,
  currentLetters,
  wrongLetters,
  isWin,
  isLose,
  addLetter, 
  resetLetters,
} = useLetters(word);

const popup = ref<InstanceType<typeof Popup> | null>(null);
const restart = async () => {
  resetLetters();
  popup.value?.close();
  await getRandomWord();
}

watch(currentLetters, () => {
  if (isWin.value) {
    popup.value?.open('win')
  }
})

watch(wrongLetters, () => {
  if (isLose.value) {
    popup.value?.open('lose')
  }
})

window.addEventListener("keydown", ({key}) => {
  if (isWin.value || isLose.value) {
    return
  }

  if (letters.value.includes(key)) {
    showNotification();
    return 
  }

  addLetter(key);
})
</script>

<template>
  <Header />
  <div class="game-container">
    <Figure :wrong-letters-count="wrongLetters.length"/>
    <WrongLetters :wrong-letters="wrongLetters"/>
    <Word :word="word" :current-letters="currentLetters"/>
  </div>
  <Popup ref="popup" :word="word" @restart="restart"/>
  <Notification ref="notification"/> 
</template>