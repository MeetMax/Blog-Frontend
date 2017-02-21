<template>
  <div class="card card-trending">
    <h2 class="card-title">热门文章</h2>
    <div class="card-content">
      <div class="trending-item" v-for="(item,index) in hot">
        <span class="trending-rank-num">{{index+1}}</span>
        <router-link class="trending-title" :to="{name:'article',params:{id:`${item.id}`}}">
        {{item.title}}
        </router-link>
        <div class="trending-meta">
          <div class="trending-meta-item">
            <i class="icon iconfont icon-zan"></i>{{item.like}}
          </div>
          <div class="trending-meta-item">
            <i class="icon iconfont icon-weibiaoti11"></i>{{item.comment_count}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'hot-article',
    data(){
      return{
        name:'哈哈'
      }
    },
    props:['hot'],
    mounted(){

    },
    methods:{

    }
  }
</script>
