<template>
  <view class="index">
    <nut-searchbar v-model="searchValue" @search="search">
      <template v-slot:leftin>
        <Search2 />
      </template>
    </nut-searchbar>
    <nut-swiper :init-page="page" :pagination-visible="true" height="192" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item v-for="(item,index) in list" :key="item" @click="handleSwiper(index)">
        <img :src="item" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <GoodsCard></GoodsCard>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Dongdong, Search2 } from '@nutui/icons-vue-taro';
// import { useCounterStore  } from '@/stores/index'
import GoodsCard from '@/components/goods-card/index.vue'

export default { 
  name: 'Index',
  components: {
    Dongdong,
    Search2,
    GoodsCard
  },
  setup() {
    // const counter = useCounterStore ()
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false,
      searchValue: "",
      page: 2,
      list: [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ]
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

    const search = function () {
      state.show = true;
      state.msg2 = "点击swiper";
    };

    const handleSwiper = (index) => {
      state.show = true;
      state.msg2 = msg;
    }

    return {
      ...toRefs(state),
      handleClick,
      search,
      handleSwiper
      // counter
    }
  }
}
</script>

<style lang="scss">
  .nut-swiper-item {
    margin:0 25rpx;
    img {
      width: 700rpx;
      height: 100%;
      border-radius: 12rpx;
    }
  }
</style>
