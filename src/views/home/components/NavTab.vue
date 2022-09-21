<template>
  <div class="nav-tab">
    <a
    v-for="(item, index) in tabs"
    :key="index"
    :class="{
      active: activeIndex === index
    }"
    href="javascript:;"
    @click="(change(index))"
    >
    {{item.text}}</a>
  </div>
</template>

<script>
export default {
  name: 'nav-tab',
    props: {
    tabs: Array
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
  padding: 0 32px;
  box-sizing: border-box;
  display: flex;
  background: #ccc;
  margin-top: -1px;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
  overflow: auto;
  a{
    font-size: 28px;
    color:#4a4a4a;
    line-height: 60px;
    margin-top: 20px;
    flex-shrink: 0;
    &.active{
      color: red;
      font-size: 32px;
      font-weight: bold;
    }
  }
}
</style>
