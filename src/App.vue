<script setup lang="ts">
import Header from './components/Header.vue'
import Figure from './components/Figure.vue'
import WrongLetters from './components/WrongLetters.vue'
import Word from './components/Word.vue'
import Popup from './components/Popup.vue'
import Notification from './components/Notification.vue'
import { computed, ref } from 'vue'

const word = ref("владимир");
const letters = ref<string[]>([]);
const notification = ref<InstanceType<typeof Notification> | null>(null)

const currentLetters = computed(() => {
  return letters.value.filter(x => word.value.includes(x))
});
const wrongLetters = computed(() => {
  return letters.value.filter(x => !word.value.includes(x))
});

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
</script>

<template>
  <Header />
  <div class="game-container">
    <Figure :wrong-letters-count="wrongLetters.length"/>
    <WrongLetters :wrong-letters="wrongLetters"/>
    <Word :word="word" :current-letters="currentLetters"/>
  </div>
  <Popup v-if="false"/>
  <Notification ref="notification"/> 
</template>