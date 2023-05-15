<template>
  <view class="index">
    <image src="https://tvax1.sinaimg.cn/large/008i3skNgy1gxfn11mr8yj314w0u0tdg.jpg"></image>
    商品
  </view>
   <nut-button >跳转接口测试页面</nut-button>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Image } from '@nutui/nutui'

export default { 
  name: 'Index',
  components: {
  },
  setup() {
    const state = reactive({
      
    });

    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss">

</style>
