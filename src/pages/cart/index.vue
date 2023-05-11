<template>
  <view class="index">
    购物车
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';

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
