<template>
  <div class="hea-tit">
    <a class="tit" href="javascript:;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
      <span>送至:北京八维维修学院</span>
    </a>
    <a class="search" href="javascript:;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'hea-tit'
}
</script>

<style lang="scss" scoped>
.hea-tit{
  width:100%;
  height: 98px;
  display: flex;
  justify-content: space-between;
  .tit{
    svg{
      width: 20px;
      height: 25px;
      margin: 0 10px 0 20px ;
    }
    span{
      font-size: 26px;
      color: #9e9e9e;
    }
  }
  .search{
    svg{
      width: 25px;
      height: 25px;
      color: #9e9e9e;
      margin-right: 15px;
    }
  }
}
</style>>
