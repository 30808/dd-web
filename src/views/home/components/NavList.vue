<template>
  <div class="nav-list">
    <swiper>
    <swiper-slide
    v-for="(item, index) in Math.ceil(list.length / 10)"
    :key="index"
    >
    <div class="grid">
    <a
    v-for="(subitem, subindex) in list.slice(index * 10, index * 10 + 10)"
    :key="subindex"
    href="javascript:;">
    <img :src="subitem.icon" />
    <span>{{subitem.text}}</span>
    </a>
    </div>
    </swiper-slide>
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
  </swiper>
  </div>
</template>

<script>

</script>

<script>
export default {
  name: 'nav-list',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
        }
      }
    }
  }
}
</script>

<style lang="scss">
.nav-list{
  text-align: center;
  .grid{
    display: grid;
    grid-template-columns:repeat(5, 20%) ;
    grid-template-rows: 156px 156px;
     img{
      width: 100px;
      height: 100px;
    }
    span{
      font-size: 24px;
      color: #ccc;
      display: block;
    }
  }
}
</style>
