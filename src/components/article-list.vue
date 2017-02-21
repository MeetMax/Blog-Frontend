<template>
  <div class="main-left">
    <div class="home-feeds cards-wrap">
      <div class="card feed" v-for="item in article">
        <div class="feed-content">
          <span class="feed-time">{{item.date}}</span>
          <span class="feed-source">
                            来自分类
            <span  class="feed-minor-link">{{item.category.name}}</span>
          </span>
          <div class="feed-main-link-wrap">
            <router-link :to="{name:'article',params:{id:item.id}}" class="feed-main-link">
             {{item.title}}
            </router-link>
          </div>
          <div class="feed-desc-wrap">
            <div class="feed-article-content markdown-body">
              {{item.content}}
            </div>
          </div>
        </div>
        <div class="actions-wrap">
          <a href="javascript:;" class="action-item">
            <i class="icon iconfont icon-zan"></i>
            <span class="text">{{item.like}} 赞</span>
          </a>
          <a href="javascript:;" class="action-item">
            <i class="icon iconfont icon-weibiaoti11"></i>
            <span class="text">{{item.comment_count}} 评论</span>
          </a>
          <a href="javascript:;" class="action-item action-item-fav">
            <i class="icon iconfont icon-shuqian"></i>
            <span class="text">{{item.visit}} 浏览</span>
          </a>
          <a href="javascript:;" class="action-item">
            <i class="icon iconfont icon-fenxiang"></i>
            <span class="text">0 分享</span>
          </a>
        </div>
      </div>
      <div class="load-more-wrap">
        <a href="javascript:;" class="load-more">更多
          <i class="icon icon-circle-loading"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'article-list',
    props:['article'],
    mounted(){

    }
  }
</script>
