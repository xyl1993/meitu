<template>
    <div class="main">
        <!-- 导航 start -->
        <nav-item></nav-item>
        <!-- 导航 end -->
        <!-- 搜索 start -->
        <header-seach></header-seach>
        <!-- 搜索 end -->
        <div class="hr20"></div>
        <!-- 首页合集 start -->
        <main-wraper></main-wraper>
    </div>
</template>
<script>

import navItem from './nav-item.vue'
import headerSeach from './header-seach.vue'
import mainWraper from './main-wraper.vue'

export default {
  name: 'index',
  components: {
    'nav-item': navItem,
    'header-seach':headerSeach,
    'main-wraper':mainWraper
  }
}
</script>
