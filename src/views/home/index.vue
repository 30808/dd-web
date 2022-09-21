<template>
  <div class="supermarket">
    <hea-tit />
    <hea-bar :list="banner" />
    <nav-list :list="mall_nav" />
    <must-buy />
    <div ref="content">
      <nav-tab
      class="tab"
      :tabs="host_nav"
      @change="navchange"
      />
    <product-list :list="product" />
    </div>
  </div>
</template>

<script>
import NavTab from './components/NavTab.vue'
import MustBuy from './components/MustBuy.vue'
import NavList from './components/NavList.vue'
import HeaBar from './components/HeaBar.vue'
import HeaTit from './components/HeaTit.vue'
export default {
  name: 'home-index',
  data () {
    return {
      banner: [],
      mall_nav: [],
      host_nav: [],
      product: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        classid: 1
      }
    }
  },
  components: {
    HeaTit,
    HeaBar,
    NavList,
    MustBuy,
    NavTab
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.initHomeData()
  },
  mounted () {
    window.addEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
      const windowHeight = window.innerHeight
      const pageHeight = document.body.clientHeight
      const scrollTop = document.querySelector('html').scrollTop
      if (pageHeight - scrollTop < windowHeight + 10) {
        this.fetchProductParams.page += 1
      }
    },
    initHomeData () {
      this.$api.home.base().then(res => {
        this.banner = res.data.data.banner
        this.mall_nav = res.data.data.mall_nav
        this.host_nav = res.data.data.host_nav
      })
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.product = res.data.data
      } else {
        this.product = this.product.concat(res.data.data)
      }
      console.log(res);
    },
    navchange (index, item) {
      this.fetchProductParams.classid = item.id
      this.fetchProductParams.page = 1
      const top = this.$refs.content.offsetTop
      const scrollTop = document.querySelector('html').scrollTop
      if (scrollTop > top) {
        window.scrollTo(0, this.$refs.content.offsetTop)
        console.log(this.$refs.content.offsetTop);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.supermarket{
.tab{
  position: sticky;
  top: 0;
  z-index: 100;
}
}
</style>
