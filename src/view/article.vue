<template>
    <div class="main wrap clearfix router">
       <ArticleDetail :vArticle="vArticle"></ArticleDetail>
      <div class="main-right">
        <ArticleCat :category="category"></ArticleCat>
        <ArticleHot :hot="hot"></ArticleHot>
      </div>
    </div>
</template>
<script lang="babel">
  import ArticleCat from  '../components/article-category.vue';
  import ArticleHot from '../components/hot-article.vue';
  import ArticleDetail from '../components/article-datail.vue';
  import {mapGetters} from 'vuex';
  const fetchInitData =async (store)=>{
    const {params:{id}}=store.state.route;
    const base={id};
    if(store.state.frontend.category.lists.length==0){
      store.dispatch('frontend/category/getCategoryList')
    }
    if(store.state.frontend.article.hot.length==0){
      store.dispatch('frontend/article/getHot')
    }
    await store.dispatch('frontend/article/getArticleItem',base);
  }
  export default{
    name:'article',
    components:{
      ArticleCat,
      ArticleHot,
      ArticleDetail
    },
    computed:{
      ...mapGetters ({
        category:'frontend/category/getCategoryList',
        hot:'frontend/article/getHot',
        vArticle:'frontend/article/getArticleItem'
      })
    },
    mounted(){
      fetchInitData(this.$store)
    },
    methods:{

    }
  }
</script>
