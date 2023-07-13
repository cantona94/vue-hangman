import { computed, ref, type Ref } from 'vue'

export const useLetters = (word: Ref<string>) => {
  const letters = ref<string[]>([]);

  const currentLetters = computed(() => {
    return letters.value.filter(x => word.value.includes(x))
  });
  const wrongLetters = computed(() => {
    return letters.value.filter(x => !word.value.includes(x))
  });

  const isWin = computed(() => [...word.value].every(x => currentLetters.value.includes(x)));
  const isLose = computed(() => wrongLetters.value.length === 6);
  const addLetter = (key: string) => {
    if (/[а-яА-ЯёЁ]/.test(key)) {
      letters.value.push(key.toLowerCase());
    }
  }

  const resetLetters = () => {
    letters.value = [];
  }

  return {
    letters,
    currentLetters,
    wrongLetters,
    isWin,
    isLose,
    addLetter,
    resetLetters,
  }
}