<template>
  <div>
    <transition name="el-fade-in-linear">
      <div :class="bgchange?'':'bg'" v-if="!bgchange">
        <div id="loading" v-if="!bgchange"></div>
        <div id="loading-btn" v-if="!bgchange">
          <button class="button" @click="goHome">
            <span>入</span>
          </button>
        </div>
      </div>
    </transition>

    <div v-if="bgchange" class="box">
      <!-- header  -->
      <header id="myheader" class="myheader header-top">
        <div class="nav">
          <span class="title">
            <i
              class="iconfont icon-ci-copy"
              style="margin-right: .8rem;font-size: 1.85rem;vertical-align: center;"
            ></i>
            <a href="#">纳兰心事</a>
          </span>
          <ul>
            <router-link to='/'  tag="li"> 
             主页
            </router-link>
            <router-link to='/process' tag="li">
             归档
            </router-link>
            <router-link to='/about' tag="li">
            关于
            </router-link>
            <router-link to='/suggestion' tag="li">
              建议
            </router-link>
            <router-link to='/link' tag="li">
             友链
            </router-link>
          </ul>
          <transition name="el-zoom-in-bottom">
            <el-input
              class="input"
              v-model="search"
              placeholder="寻..."
              size="mini"
              v-if="!searchIcon"
              @keyup.enter.native="subsearch"
            >
              <template slot="append">
                <el-button style="padding:0 14px" icon="el-icon-circle-close" @click="changeSearch"></el-button>
              </template>
            </el-input>
          </transition>

          <div class="search" @click="changeSearch">
            <i class="el-icon-search" v-if="searchIcon"></i>
          </div>
        </div>
      </header>
      <!-- banner  -->
      <div class="banner" style="display:block" 
      :class="$route.path=='/'?'bg1':
      $route.path=='/about'?'bg3':
      $route.path=='/link'?'bg0':
      $route.path=='/process'?'bg1':
      $route.path=='/suggestion'?'bg1':
      $route.path.indexOf('/singleBlog')>=0?'bg3':''
      ">
      </div>
      
      <div class="mask">
        <h2>纳兰心事</h2>
        <p>月似当时，人似当时否？</p>
      </div>
      <!-- content  -->
      <leftTag v-if="$route.path =='/'" />

      <div class="content">
        <router-view />

        <div v-if="$route.path =='/'">
          <blog :title="blog.title" :date="blog.date" :tag="blog.tag" :id='blog.id' />
        </div>
        <el-backtop></el-backtop>
      </div>
    </div>
    <!-- footer -->
    <div class="myfooter" :class="bgchange?'show':''">
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
import myFooter from "../components/footer";
import leftTag from "../components/leftTag";
import blog from "../components/blog";

import inputVue from "element-ui/packages/input/src/input.vue";

export default {
  components: {
    myFooter,
    leftTag,
    blog,
  },
  data() {
    return {
      search: "",
      searchIcon: true,
      scroll: "",
      blog: {
        title: "测试用例",
        date: "20/9/9",
        tag: "记",
        id:1
      },
    };
  },
  computed: {
    bgchange: function () {
      return sessionStorage.getItem("firstlog") || this.$store.state.firstLog;
    },
  },
  methods: {
    subsearch() {
      this.$notify.info({
        title: "无果",
        message: "没有寻到该词条",
        position: "top-left",
        duration: 1500,
      });
    },
    changeSearch() {
      this.searchIcon = !this.searchIcon;
    },
    showButton() {
      if (!this.bgchange) {
        setTimeout(() => {
          document.getElementById("loading-btn").style.display = "flex";
          document.getElementById("loading").style.display = "none";
        }, 1000);
      }
    },
    goHome() {
      sessionStorage.setItem("firstlog", true);
      console.log(sessionStorage.getItem("firstlog"));
      this.$store.dispatch("firstLog");
      console.log(this.$store.state.firstLog);
      // this.$router.push('/index')
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 80) {
        document.getElementById("myheader").classList.remove("header-top");
      } else {
        document.getElementById("myheader").classList.add("header-top");
      }
    },
  },
  mounted() {
    this.showButton();
    document.body.scrollTop = 0;
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  },
};
</script>
<style scoped>
@import "../css/home.css";
</style>
<style>
.input input.el-input__inner:focus {
  border-color: #dcdfe6;
}
.input input.el-input__inner:hover {
  border-color: #dcdfe6;
}

.input .el-input-group__append:hover {
  /* border: none; */
  /* background-color: rgb(250, 229, 208); */
  font-size: 1.005rem;
  color: rgb(252, 128, 128);
}
.input .el-input-group__append {
  padding: 0 12px !important;

  border-radius: 0 14px 14px 0;
}

.input .el-input__inner {
  border-radius: 14px 0 0 14px;
  border-left: none;
  border-right: none;
  background-color: #f5f7fa;
}
</style>
</style>