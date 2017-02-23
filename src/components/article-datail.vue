<template>
  <div class="main-left">
    <div class="card card-question-head">
      <div class="question-content">
        <span class="topic-link-item" v-text="vArticle.cat_name">

        </span>
        <h2 class="question-title">
          <span  class="question-title-link router-link-active">
            {{vArticle.title}}
          </span>
        </h2>
      </div>
    </div>
    <div class="card card-answer">
      <div class="answer-content" v-html="vArticle.html">

      </div>
      <div class="actions-wrap">
        <a href="javascript:;" class="action-item">
          <i class="icon iconfont icon-zan"></i>
          <span class="text">{{vArticle.like}} 赞</span>
        </a>
        <a href="javascript:;" class="action-item">
          <i class="icon iconfont icon-weibiaoti11"></i>
          <span class="text">{{vArticle.comment_count}} 评论</span>
        </a>
        <a href="javascript:;" class="action-item action-item-fav">
          <i class="icon iconfont icon-shuqian"></i>
          <span class="text">{{vArticle.visit}} 浏览</span>
        </a>
        <a href="javascript:;" class="action-item">
          <i class="icon iconfont icon-fenxiang"></i>
          <span class="text">分享</span>
        </a>
      </div>
    </div>
    <div class="card">
      <div class="comments">
        <div class="comment-post-wrap">
          <img src="../assets/image/header.png"
               alt="" class="avatar-img">
          <div class="comment-post-input-wrap base-textarea-wrap">
            <textarea id="content" cols="30" rows="4" class="textarea-input base-input"></textarea>
          </div>
          <div class="comment-post-actions clearfix">
            <a href="javascript:;" class="btn btn-blue">发表评论</a>
          </div>
        </div>
        <div class="comment-items-wrap">
          <div class="comment-item">
            <a href="javascript:;" class="comment-author-avatar-link">
              <img src="../assets/image/header.png" alt="" class="avatar-img">
            </a>
            <div class="comment-content-wrap">
                  <span class="comment-author-wrap">
                      <a href="javascript:;" class="comment-author">admin</a>
                  </span>
              <div class="comment-content">还没有人发表评论</div>
              <div class="comment-footer">
                  <span class="comment-time">2016-12-09 21:12:27</span>
                <a href="javascript:;" class="comment-action-item comment-reply">回复</a>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>
<script lang="babel">
  export default{
    name:'article-detail',
    props:['vArticle'],
    data(){
       return{
           article:{}
       }
    },
    mounted(){
      console.log(this.$store.state.frontend.article.item)
    },
    methods:{

    }
  }
</script>
