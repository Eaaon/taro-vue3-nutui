<template>
  <nut-config-provider :theme="theme" :theme-vars="themeVars">
    <nut-tabbar :model-value="activeTab" bottom safe-area-inset-bottom @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="item in tabBar.list" :key="item.pagePath" :name="item.pagePath" :tab-title="item.text">
        <template #icon>
          <Dongdong />
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
  </nut-config-provider> 
</template>
<script setup lang="ts">
import { switchTab } from '@tarojs/taro';
import { Dongdong } from '@nutui/icons-vue-taro';
import { useCounterStore  } from '@/stores/index'

 components: {
    Dongdong
  }

const tabBar = {
  custom: true,
  color: '#333',
  selectedColor: '#FF0000',
  list: [
    {
      pagePath: '/pages/index/index',
      text: '首页',
      icon: 'home'
    },
    {
      pagePath: '/pages/my/index',
      text: '个人中心',
      icon: 'i-local-custom-icon'
    }
  ]
};

const activeTab = 0
function tabSwitch(item: any, url: string) {
  switchTab({ url });
  const counter = useCounterStore()
  counter.increment(item)
}
</script>
<script lang="ts">
export default {
  options: {
    addGlobalClass: true
  }
};
</script>

<style lang="scss"></style>
