<template>
  <div class="must-buy">
    <div class="tit">
      <h3>每日必购</h3>
      <p>大家都在买</p>
    </div>
    <div class="list">
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'must-buy'
}
</script>

<style lang="scss">
.must-buy{
  .tit{
    h3{
      font-size: 34px;
      color: #000;
      display: inline-block;
      margin-left: 40px;
     }
    p{
      font-size: 24px;
      color: #ccc;
      display: inline-block;
      margin-left: 20px;
    }
  }
  .list{
    width: 100vw;
    height: auto;
    display: flex;
    margin-top: 20px;
    p{
      width: 33.333333333333333333333%;
      height: 295px;
      &:first-child{
      background: #fcdf8d;
      }
      &:nth-child(2){
      background: #fd6220;
      }
      &:last-child{
      background: #90e0b8;
      }
    }
  }
}
</style>
