<template>
  <div class="nav-tab" :class="{
    [layout]: true
  }">
  <nav>
    <a
    v-for="(item, index) in tabs"
    :key="index"
    :class="{
      active: activeIndex === index
    }"
    href="javascript:;"
    @click="(change(index))"
    >
    {{item[tabName]}}</a>
     </nav>
  </div>
</template>

<script>
export default {
  name: 'nav-tab',
    props: {
    tabs: Array,
    tabName: {
      type: String,
      default: 'text'
    },
    layout: {
      type: String,
      default: 'row'
    }
  },
  watch: {
    tabs () {
      this.activeIndex = 0
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.tabs[index])
    }
  }
}
</script>

<style lang="scss">
.nav-tab{
  width: 100%;
  height: 92px;
  overflow: auto;
  nav{
  display: flex;
  background: #ccc;
  align-content: center;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
   overflow: auto;
  a{
    font-size: 24px;
    color:#4a4a4a;
    line-height: 60px;
    padding: 20px;
    flex-shrink: 0;
    &.active{
      color: red;
      font-size: 32px;
      font-weight: bold;
    }
  }
  }
  &.column {
     width: 172px;
     height: 100%;
    nav{
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
    }
  }
  //   &.column {
  //   width: 172px;
  //   height: auto;
  //   display: flex;
  //   margin: 0;
  //   flex-direction: column;
  // }
  // &.row{
  //   width:auto !important;
  //   height: 50px;
  //   display: flex;
  //   flex-wrap: nowrap;
  //   flex-shrink: 0;
  //   padding: 0;
  //   font-size: 24px;
  //   text-align: center;
  //   padding-left: 20px;
  //   border-bottom: 0;
  //   overflow: hidden;
  //   overflow-x:scroll;
  //   white-space: nowrap;
  //   // ::-webkit-scrollbar{display:none;};
  //   background: #fff !important;
  //   a{
  //     // margin: 0 15px;
  //     color: brown;
  //     // display: inline-block;
  //     margin-top: 0;
  //     &.active{
  //     color: blueviolet;
  //     font-size: 28px;
  //     font-weight: bold;
  //     }
  //   }
  // }
}
</style>
