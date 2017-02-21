<template>
    <div class="main wrap clearfix router">
      <div class="main-left">
        <div class="card card-answer">
          <div class="answer-content">
            <div class="article-content">
              <h3 class="about-title">关于作者</h3>
              <div class="flex-item">
                <div class="flex-label">姓名:</div>
                <div class="flex-content">马项成</div>
              </div>
              <div class="flex-item">
                <div class="flex-label">年龄:</div>
                <div class="flex-content">1994.02</div>
              </div>
              <div class="flex-item">
                <div class="flex-label">职业:</div>
                <div class="flex-content">前端开发，PHP开发</div>
              </div>
              <div class="flex-item">
                <div class="flex-label">Github:</div>
                <div class="flex-content">
                  <a href="https://github.com/MeetMax" target="_blank">@MeetMax</a>
                </div>
              </div>
              <div class="flex-item">
                <div class="flex-label">技能:</div>
                <div class="flex-content">
                  <ul class="about-ul">
                    <li>HTML5 + CSS3</li>
                    <li>PHP</li>
                    <li>Vue</li>
                    <li>ES6</li>
                    <li>WebPack</li>
                    <li>Composer</li>
                    <li>Yii</li>
                    <li>ThinkPHP</li>
                  </ul>
                </div>
              </div>
              <h3 class="about-title">关于网站</h3>
              <p>本站服务端采用 Yii + MySQL 搭建, 客户端采用 Vue2 的前端渲染</p>
              <p>网站分成前台和后台, 前台采用 SSR 模式渲染, 后台采用 SPA 模式</p>
              <p>主要功能包括: 管理员, 用户, 分类, 文章, 评论, 文章点赞</p>
              <p>主要技术栈: express, mongoose, vue2, vue2-router, vuex, webpack, babel, eslint</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right">
        <ArticleHot :hot="hot"></ArticleHot>
      </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import ArticleHot from '../components/hot-article.vue';
  const fetchInitData =async (store)=>{
    if(store.state.frontend.article.hot.length==0){
      store.dispatch('frontend/article/getHot')
    }
  }
  export default{
    name:'about',
    data(){
      return{
        name:'哈哈'
      }
    },
    computed:{
      ...mapGetters ({
        hot:'frontend/article/getHot',
      })
    },
    components:{
      ArticleHot,
    },
    mounted(){
      fetchInitData(this.$store);
    },
    methods:{

    }
  }
</script>
<style media="screen">
  .flex-item {
    display: flex;
    margin-bottom: 10px;
  }
  .flex-item .flex-label {
    width: 70px;
  }
</style>
