<script setup lang="ts">
import { ref } from "vue";

const isVisibleRepetition = ref(false);
const openRepetition = () => {
  isVisibleRepetition.value = true;
}
const closeRepetition = () => {
  isVisibleRepetition.value = false;
}

const isVisibleOnlyRusChar = ref(false);
const openOnlyRusChar = () => {
  isVisibleOnlyRusChar.value = true;
}
const closeOnlyRusChar = () => {
  isVisibleOnlyRusChar.value = false;
}

defineExpose({
  openRepetition,
  closeRepetition,
  openOnlyRusChar,
  closeOnlyRusChar,
})
</script>

<template>
  <div class="notification-container" :class="{ show: isVisibleRepetition }">
    <p>Вы уже вводили этот символ</p>
  </div>
  <div class="notification-container" :class="{ show: isVisibleOnlyRusChar }">
    <p>Ожидаются только русские символы</p>
  </div>
</template>