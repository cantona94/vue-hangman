<script setup lang="ts">
import Header from './components/Header.vue'
import Figure from './components/Figure.vue'
import WrongLetters from './components/WrongLetters.vue'
import Word from './components/Word.vue'
import Popup from './components/Popup.vue'
import Notification from './components/Notification.vue'
import { computed, ref, watch } from 'vue'

const word = ref("владимир");
const letters = ref<string[]>([]);
const notification = ref<InstanceType<typeof Notification> | null>(null)
const popup = ref<InstanceType<typeof Popup> | null>(null)

const currentLetters = computed(() => {
  return letters.value.filter(x => word.value.includes(x))
});
const wrongLetters = computed(() => {
  return letters.value.filter(x => !word.value.includes(x))
});

watch(currentLetters, () => {
  if ([...word.value].every(x => currentLetters.value.includes(x))) {
    popup.value?.open('win')
  }
})

watch(wrongLetters, () => {
  if (wrongLetters.value.length === 6) {
    popup.value?.open('lose')
  }
})

window.addEventListener("keydown", ({key}) => {
  if (letters.value.includes(key)) {
    notification.value?.open();
    setTimeout(() => {
      notification.value?.close()
    }, 1000);
    return 
  }

  if (/[а-яА-ЯёЁ]/.test(key)) {
    letters.value.push(key.toLowerCase());
  }
})

const restart = () => {
  letters.value = [];
  popup.value?.close();
}
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