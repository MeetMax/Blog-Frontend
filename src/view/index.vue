<template>
  <div>
  <div class="main wrap clearfix router">
    <div class="main-left">
      <div class="home-feeds cards-wrap">
        <div class="card feed" v-for="item in article.data">
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
          <a href="javascript:;" class="load-more" @click="loadMore()">更多
            <i class="icon icon-circle-loading"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="main-right">
      <ArticleCat :category="category"></ArticleCat>
      <ArticleHot :hot="hot"></ArticleHot>
    </div>
  </div>
  </div>
</template>
<script lang="babel">
  import {mapGetters} from 'vuex';
  import ArticleList from '../components/article-list.vue';
  import ArticleCat from  '../components/article-category.vue';
  import ArticleHot from '../components/hot-article.vue';
  const fetchInitData =async (store,config={page:1})=>{
    const {params:{id,by}}=store.state.route;
    const base={...config,id,by}
    if(store.state.frontend.category.lists.length==0){
      store.dispatch('frontend/category/getCategoryList')
    }
    if(store.state.frontend.article.hot.length==0){
      store.dispatch('frontend/article/getHot')
    }
    await store.dispatch('frontend/article/getArticleList',base);
  }
  export default{
    name:'index',
    data(){
      return{
        name:'哈哈'
      }
    },
    computed:{
      ...mapGetters ({
        category:'frontend/category/getCategoryList',
        hot:'frontend/article/getHot',
        article:'frontend/article/getArticleList'
      })
    },
    components:{
      ArticleList,
      ArticleCat,
      ArticleHot
    },
    mounted(){
      fetchInitData(this.$store,{page:1});

    },
    methods:{
      loadMore(page = this.article.page+1){
        console.log(page)
        fetchInitData(this.$store,{page});
      }
    }
  }
</script>
