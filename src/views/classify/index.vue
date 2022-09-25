<template>
  <div class="classify-page">
    <div class="seach-wrap">
    <a href="javascript:;" class="search-bar">搜索校园超市商品</a>
    </div>
    <div class="main">
        <nav-tab
      class="left-menu"
      tab-name="categoryName"
      layout="column"
      :tabs="leftMenu"
      @change="leftNavChange"
      />
      <div class="right-main">
        <nav-tab
      class="right-menu"
      tab-name="categoryName"
      :tabs="rightMenu"
      @change="rightNavChange"
      />
      </div>
      <product-list class="product-list" :list="product" />
    </div>
  </div>
</template>

<script>
import scroll from '@/mixins/scroll'
export default {
  name: 'class-ify',
  mixins: [scroll],
   data () {
      return {
        leftMenu: [],
        rightMenu: [],
        product: [],
        fetchProductParams: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
      }
   },
    watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
   created () {
     this.fetchcategory()
   },
    scrollBottom () {
   this.fetchProductParams.page += 1
  },
   methods: {
    async fetchcategory () {
      const res = await this.$api.product.category()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryId: res.data[0].categoryId,
         categoryName: '全部'
      }].concat(res.data[0].children)
        console.log(res);
    },
      async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.product = res.data
      } else {
        this.product = this.product.concat(res.data)
      }
      console.log(res);
    },
    leftNavChange (index, item) {
      this.fetchProductParams.category_id = item.categoryId
      this.fetchProductParams.page = 1
        this.rightMenu = [{
        categoryId: item.categoryId,
         categoryName: '全部'
      }].concat(item.children)
    },
     rightNavChange (index, item) {
      this.fetchProductParams.category_id = item.categoryId
      this.fetchProductParams.page = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-page{
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: #fff;
  // overflow: hidden;
  .seach-wrap{
    background: #fff;
    position: sticky;
    top: 0px;
    z-index: 100;
    overflow: hidden;
    padding:  17px 30px;
    margin: 0;
  }
  .search-bar{
    width: auto;
    height: 64px;
    background: #f6f6f6;
    border-radius: 64px;
    display: block;
    color: #D1D1D1;
    line-height: 64px;
    font-size: 24px;
    padding-left: 40px;
  }
  .main{
    // flex: 1;
    width: 100%;
    display: flex;
    .left-menu{
      flex-shrink: 0;
      position: fixed;
      top:98px;
      ::v-deep nav{
      width:172px;
      text-align: center;
      background: #fafafa;
      a{
        display: block;
        // margin-top:10px;
        box-sizing: border-box;
        font-size: 24px;
        color: #999999;
        width: 100%;
        margin-bottom: 30px;
        &.active{
          color: brown;
          font-weight: bold;
          background: #fff;
        }
      }
      }
    }
   .right-menu{
     position: fixed;
     top: 98px;
     right: 0;
     left: 178px;
     z-index: 100;
     overflow: auto;
     width: auto;
      ::v-deep nav{
        border-bottom: 0;
        display: flex;
        flex-shrink: 0;
        background: #fff;
        justify-content: flex-start;
        line-height: 55px;
       a{
        display: block;
        font-size: 24px;
        color: #999999;
         &.active{
          color: brown;
          font-weight: bold;
          background: #fff;
        }
      }
      }
    }
  }
  .product-list {
    overflow: auto;
    padding-top: 50px;
    margin-left: 178px;
    ::v-deep dl {
      dt{
        img{
          width: 186px;
          height: 186px;
          padding-top: 36px;
        }
      }
        dd {
          height: 186px;
          .title {
          font-size: 28px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          }
        }
    }
  }
}
</style>
