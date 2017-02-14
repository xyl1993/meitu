<template>
    <div class="main wrap">
        <!-- 首页不分类图合集 start -->
        <div class="specail-img-dyn">
            <ul class="clearing-thumbs small-block-grid-2 medium-block-grid-3 large-block-grid-5" >
                <li v-for="mainWraperData in mainWraperDatas">
                    <div>
                        <a v-bind:href="mainWraperData.bacImg"><img v-bind:src="mainWraperData.bacImg" v-bind:alt="mainWraperData.title"><span>{{mainWraperData.title}}</span></a>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 首页不分类图合集 end -->
    </div>
</template>
<script>
    var mainWraperDatas = [];
    
    export default {
      name: 'mainWraper',
      data () {
        return {
          mainWraperDatas: mainWraperDatas
        }
      },
      mounted : function () {
        var _self = this;  
        $.getJSON("./mainWraper.json",function(data){
            _self.mainWraperDatas = data.data;
        });
        $.ajax({
          type: "POST",
          url: 'http://localhost:8080/popcorn/cart/getProvinces',
          headers:{
            'Content-Type':'application/json;charset=UTF-8'
          },
          dataType: 'json'
        }).success(function(res){
          console.log(res);
        });
      },
      beforeUpdate:function(){
      },
      methods: {
        
      }
    }
</script>
<style lang="sass">
     //sass语法样式
</style>
