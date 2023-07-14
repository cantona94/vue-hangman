<script setup lang="ts">
interface IProps {
  word: string;
  currentLetters: string[];
}

defineProps<IProps>()
</script>

<template>
  <div class="word">
    <span v-for="(letter, index) in word" :key="index" class="letter">
      {{ currentLetters.includes(letter) ? letter : '' }}
    </span>
  </div>
</template>