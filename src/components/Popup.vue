<script setup lang="ts">
import { ref } from "vue";
import type { gameStatus } from '../types/gameStatus';

interface IProps {
  word: string;
}

const gameStatus = ref<gameStatus | null>(null);
const isVisible = ref(false);

const open = (status: gameStatus) => {
  gameStatus.value = status;
  isVisible.value = true;
}
const close = () => {
  isVisible.value = false;
}

defineExpose({
  open,
  close
})

const emit = defineEmits<{
  (e: 'restart'): void
}>()

defineProps<IProps>()
</script>

<template>
  <div v-show="isVisible" class="popup-container">
    <div class="popup">
      <h2 v-if="gameStatus === 'win'">Поздравляю, вы победили! Имя: {{ word }} 😃</h2>
      <template v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{ word }}</h3>
      </template>
      <button @click="emit('restart')">Сыграть еще раз</button>
    </div>
  </div>
</template>