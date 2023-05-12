<template>
  <view class="index">
    <nut-searchbar v-model="searchValue">
    </nut-searchbar>
    <view>
      <img src="" alt="">
    </view>
    <view class="text-base">22</view>
    <view style="font-size:32rpx">{{ msg }} <Dongdong /></view>
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
// import { useCounterStore  } from '@/stores/index'

export default { 
  name: 'Index',
  components: {
    Dongdong
  },
  setup() {
    // const counter = useCounterStore ()
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false,
      searchValue: ""
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
      // 自动补全！ ✨
      // counter.$patch({ count: counter.count + 1 })
      // 或使用 action 代替
      // const num = Math.random()
      // counter.increment(num)
    };

    return {
      ...toRefs(state),
      handleClick,
      // counter
    }
  }
}
</script>

<style lang="scss">
.index {
  margin-top:60px;
}
</style>
