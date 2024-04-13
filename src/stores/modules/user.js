import { defineStore } from 'pinia'
import { ref } from 'vue'
import storeNames from '@/stores/storeNames'
// import { getLocal, setLocal, removeLocal } from '@/utils/storage'
import { getUserInfo } from '@/api'

export const useUserStore = defineStore(
  storeNames.USER,
  () => {
    const token = ref('')
    const userInfo = ref({})

    const fetchUserInfo = async () => {
      const response = await getUserInfo()
      console.log(response)
      userInfo.value = response.data
    }
    return {
      token,
      userInfo,
      fetchUserInfo,
    }
  },
  {
    persist: true,
  }
)
