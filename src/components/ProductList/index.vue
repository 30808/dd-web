<template>
<div class="main-list">
  <dl
  v-for="(item, index) in list"
  :key="index"
  >
    <dt><img :src="item.img"></dt>
    <dd>
      <header>
        <h4 class="title">{{item.name}}</h4>
        <p>{{2003}} / 已拼{{919}}份</p>
        <ta-gs class="tags" :list="['自营', '拼夕夕']" />
      </header>
      <footer>
        <em>￥{{item.price | formatPrice}}</em><s>{{item.price | formatPrice}}</s>
      </footer>
    </dd>
  </dl>
</div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    list: Array
  },
  filters: {
    formatPrice (price) {
      return price / 100
    }
  }
}
</script>

<style lang="scss" scoped>
.main-list{
  width: 100%;
  height: auto;
  dl{
    display: flex;
    margin-top: 30px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 30px;
    dt{
      img{
        width: 240px;
        height: 240px;
        margin-right: 30px;
      }
    }
    dd{
      header{
        .title{
          font-size: 34px;
          color: #000;
        }
        p{
          font-size: 24px;
          color: #9e9e9e;
          margin:20px 0;
        }
        .tags{
          font-size: 24px;
        }
      }
      footer{
        em{
          font-size: 34px;
          color: #fe3113;
        }
        s{
          font-size: 15px;
          color: #9e9e9e;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
