<template>
  <nav class="global-nav">
    <div class="wrap clearfix">
      <div class="left-part">
        <router-link to="/" class="logo-link">
          <img src="../assets/logo.png">
        </router-link>
        <div class="main-nav">
          <router-link to="/" class="nav-link"  active-class="current" exact>
            <i class="icon iconfont icon-shouye"></i>
            <span class="text">首页</span>
          </router-link>
          <router-link :to="{name:'hot',params:{by:'hot'}}" class="nav-link" active-class="current" exact>
            <i class="icon iconfont icon-safari"></i>
            <span class="text">热门</span>
          </router-link>
          <router-link to="/about" class="nav-link" active-class="current" exact>
            <i class="icon iconfont icon-mokuaixianxing"></i>
            <span class="text">关于</span>
          </router-link>
        </div>
      </div>
      <div class="right-part">
        <span class="nav-search">
            <i class="icon iconfont icon-sousuo_sousuo"></i>
            <input placeholder="记得按回车哦" class="nav-search-input">
        </span>
        <span class="nav-me">
            <a href="/user/account" class="nav-me-link">
                <img src="../assets/image/header.png" class="nav-avatar-img">
            </a>
        </span>
      </div>
    </div>
  </nav>
</template>
<script>
  export default{
    name:'navigation',
    data(){
        return{
          name:'哈哈'
        }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
