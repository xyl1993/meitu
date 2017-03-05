<template>
    <nav class="top-bar" data-topbar>
        <ul class="title-area">
            <li class="name">
                <h1><a href="#">WebSiteName</a></h1>
            </li>
            <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>
        <section class="top-bar-section">
            <ul class="right">
                <li v-for="itemData in itemDatas">
                    <a href="#">{{itemData.titleName}}</a>
                    <ul class="dropdown" v-if="itemData.childMenu.length>0">
                        <li v-for="item in itemData.childMenu">
                            <a href="#">{{item.titleName}}</a>
                        </li>
                    </ul>
                </li>
                <!-- <li class="active"><a href="#">Home</a></li>
                <li class="has-dropdown">
                    <a href="#">Dropdown</a>
                    <ul class="dropdown">
                        <li><a href="#">First link in dropdown</a></li>
                        <li><a href="#">Second link in dropdown</a></li>
                        <li class="active"><a href="#">Active link in dropdown</a></li>
                    </ul>
                </li> -->
            </ul>
        </section>
    </nav>
</template>
<script>
    var itemDatas = [];
    export default {
      name: 'navItem',
      data () {
        return {
          itemDatas: itemDatas
        }
      },
      mounted : function () {
        var _self = this;  
        $.getJSON("./nav.json",function(data){
            _self.itemDatas = data.data;
            $(document).foundation();
        });
      },
      beforeUpdate:function(){
      },
      methods: {
        
      },
      updated:function(){
        $(document).foundation();
      }
    }
</script>
<style lang="sass">
     //sass语法样式
</style>