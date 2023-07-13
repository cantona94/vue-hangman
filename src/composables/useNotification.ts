import Notification from '../components/Notification.vue'
import { ref } from 'vue'

export const useNotification = () => {
  const notification = ref<InstanceType<typeof Notification> | null>(null)
  const showNotification = () => {
    notification.value?.open();
    setTimeout(() => {
      notification.value?.close();
    }, 1000);
  }
  return {
    notification,
    showNotification
  }
}