<template>
  <div class="page">
    <router-view></router-view>
    <nav class="footer-nav">
      <router-link
        v-for="(item, index) in tabs"
        :key="index"
        :to="item.path"
        active-class="active"
        >
        <img :src="item.icon" class="icon" />
        <img :src="item.select_icon" class="select_icon" />
        <span>{{item.text}}</span>
        </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-main',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/images/home-select.png'),
          select_icon: require('@/assets/images/home-red.png')
        },
        {
          path: '/classify',
          text: '分类',
          icon: require('@/assets/images/copy.png'),
          select_icon: require('@/assets/images/copyred.png')
        },
        {
          path: '/car',
          text: '购物车',
          icon: require('@/assets/images/baodan.png'),
          select_icon: require('@/assets/images/baodanred.png')
        },
        {
          path: '/mine',
          text: '我的',
          icon: require('@/assets/images/word.png'),
          select_icon: require('@/assets/images/wordred.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
min-height: 100vh;
background: #F8F8F8;
margin-bottom: 120px;
}
.footer-nav {
  display: flex;
  width: 100%;
  flex-direction:row;
  justify-content: center;
  align-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffff;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    flex: 1;
    font-size: 0.28rem;
    padding-top: 0.14rem;
    padding-bottom: 0.06rem;
    color:$color-grey;
    .icon{
      @include wh(50px,50px);
    }
    .select_icon{
      display: none;
    }
    &.active{
      color: $color-primary;
      .icon{
      @include wh(50px,50px);
      display: none;
    }
    .select_icon{
      @include wh(50px,50px);
      display: block;
    }
    }
  }
}
</style>
