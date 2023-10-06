<template>
  <img :src="list[active].img" :alt="list[active].label + '赞助我'" class="w-40 h-40" />
  <div class="flex flex-wrap mt-10 justify-center items-center ml--4 max-w-11/12">
    <template v-for="(item, index) in list" :key="index">
      <img
        v-if="item.cover"
        :src="item.cover"
        :alt="item.label + '赞助我'"
        class="h-12 block ml-4 mt-4 rd-4 cursor-pointer"
        @click="check(index)"
      />
      <button
        v-else
        class="px-5 rd-4 min-w-30 h-12 c-white bg-#FF714C b-2 b-solid ml-4 mt-4"
        :class="[index === active ? 'b-#008EB3' : 'b-transparent']"
        @click="check(index)"
      >
        {{ item.label }}
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import wechat from '@/assets/wechat.jpg'
import alipay from '@/assets/alipay.jpg'

interface Item {
  label: string
  img?: string
  url?: string
  cover?: string
}

const list: Item[] = [
  { label: '微信', img: wechat },
  { label: '支付宝', img: alipay },
  {
    label: 'buymeacoffee',
    cover: 'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png',
    url: 'https://www.buymeacoffee.com/wtto00'
  },
  {
    label: '爱发电',
    cover: 'https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.jpg',
    url: 'https://afdian.net/a/wtto00'
  }
]

const active = ref(0)

function check (index: number) {
  const item = list[index]
  if (item.img) {
    active.value = index
  } else if (item.url) {
    window.open(item.url, '_blank')
  }
}
</script>
