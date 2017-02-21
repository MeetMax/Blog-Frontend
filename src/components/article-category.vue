<template>
  <div class="card card-topics">
    <template v-for=" item in category">
        <router-link :to="{ name:'category',params:{ id:item.id} }" class="topic-item clearfix">
        <span class="avatar-link"><i class="icon iconfont icon-biaoti"></i></span>
        <h3 class="topic-title">{{item.name}}</h3>
        <p class="topic-meta">{{item.article_count }} 篇文章</p>
        <i class="icon icon-arrow-right iconfont icon-jiantou"></i>
        </router-link>
    </template>
  </div>
</template>
<script>
  export default{
    name:'article-category',
    data(){
      return{
        name:'哈哈'
      }
    },
    props:['category'],
    mounted(){

    },
    methods:{

    }
  }
</script>
