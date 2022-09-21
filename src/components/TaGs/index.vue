<template>
  <div>
    <label
    v-for="(item, index) in list"
    :key="index"
    >{{item}}</label>
  </div>
</template>

<script>
export default {
  name: 'TaGs',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
label{
  display: inline-block;
  padding: 5px 15px;
  background: orangered;
  border-radius: 20px;
  margin-right:5px;
  color:#fff;
}
</style>
