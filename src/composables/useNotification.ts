import Notification from '../components/Notification.vue'
import { ref } from 'vue'

export const useNotification = () => {
  const notification = ref<InstanceType<typeof Notification> | null>(null)
  const showNotificationRepetition = () => {
    notification.value?.openRepetition();
    setTimeout(() => {
      notification.value?.closeRepetition();
    }, 1000);
  };

  const showNotificationOnlyRusChar = () => {
    notification.value?.openOnlyRusChar();
    setTimeout(() => {
      notification.value?.closeOnlyRusChar();
    }, 1000);
  }
  return {
    notification,
    showNotificationRepetition,
    showNotificationOnlyRusChar,
  }
}