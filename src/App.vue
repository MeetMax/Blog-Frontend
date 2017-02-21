<template>
  <div id="app">
    <Navigation></Navigation>
    <transition name="fade" mode="out-in">
      <router-view  :key="key"></router-view>
    </transition>
    <signIn></signIn>
    <signUp></signUp>
  </div>
</template>

<script lang="babel">
import Navigation from './components/navigation.vue';
import Index from './view/index.vue';
import vArticle from './view/article.vue';
import About from './view/about.vue';
import signIn from './components/sign-in.vue';
import signUp from './components/sign-up.vue';
export default {
  name: 'app',
  components: {
    Navigation,
    Index,
    vArticle,
    About,
    signIn,
    signUp
  },
  computed:{
    key(){
      return this.$route.path;
    }
  }
}
</script>

<style>
  @import "./assets/css/style.css";
  @import "./assets/iconfont/iconfont.css";
  @import "./assets/css/markdown.css";
  @import "./assets/css/htjs.css";

  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter {
    opacity: 1;
    transform: translate3d(0px, 100px, 0);
  }
  .fade-leave-active {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }
  .beian {
    float: right;
  }
  .beian i {
    width: 14px;
    height: 14px;
    background: url(http://ww4.sinaimg.cn/large/005uQRNCgw1f9xoio7mdej300k00k3y9.jpg);
    background-size: cover;
    display: inline-block;
    vertical-align: top;
  }
  pre{
    background-color: #f6f6f6;
    border-radius: 5px;
    padding: 16px;
    box-sizing: border-box;
    font-size: 14px;
    margin: 10px 0 10px 0;
  }
</style>
