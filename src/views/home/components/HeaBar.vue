<template>
<div class="heabar">
    <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide
    v-for="(item, index) in list"
    :key="index"
    ><img :src="item.images" /></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'hea-bar',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.heabar{
  margin-top: 40px;
  img{
    width: 100%;
    height: 200px;
  }
}
</style>>
