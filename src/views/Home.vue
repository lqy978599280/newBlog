<template>
  <div>
    <transition name="el-fade-in-linear">
      <div :class="bgchange ? '' : 'bg'" v-if="!bgchange">
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
      <header
        id="myheader"
        class="myheader"
        :class="$route.path !== '/blogging' ? 'header-top' : ''"
      >
        <div class="nav">
          <span class="title">
            <i
              class="iconfont icon-ci-copy"
              style="
                margin-right: 0.8rem;
                font-size: 1.85rem;
                vertical-align: center;
              "
            ></i>
            <!-- <a href="/" class="logoname">纳兰心事</a> -->
            <router-link to="/" tag="span" class="logoname">
              纳兰心事
            </router-link>
          </span>
          <ul v-if="$route.path !== '/blogging'">
            <router-link
              tag="li"
              @click.native="getBlogs(page.currentpage)"
              to="/"
            >
              主页
            </router-link>
            <router-link to="/process" tag="li"> 归档 </router-link>
            <router-link to="/about" tag="li"> 关于 </router-link>
            <router-link to="/suggestion" tag="li"> 建议 </router-link>
            <router-link to="/link" tag="li"> 友链 </router-link>
            <router-link to="/blogging" tag="li" class="write">
              发表
            </router-link>
          </ul>
          <el-input
            v-model="blogtitle"
            class="blogtitle"
            size="small"
            placeholder="输入标题..."
            v-else
          ></el-input>
          <transition name="el-zoom-in-bottom">
            <el-input
              class="input"
              v-model="search"
              placeholder="名..."
              size="mini"
              v-if="!searchIcon"
              @keyup.enter.native="subsearch"
            >
              <template slot="append">
                <el-button
                  style="padding: 0 14px"
                  icon="el-icon-circle-close"
                  @click="changeSearch"
                ></el-button>
              </template>
            </el-input>
          </transition>

          <div
            class="search"
            @click="changeSearch"
            v-if="$route.path !== '/blogging'"
          >
            <i class="el-icon-search" v-if="searchIcon"></i>
          </div>

          <el-popover placement="top" v-model="visible" v-else>
            <h2 style="text-align: center; margin: 0 0 1rem 0">发布文章</h2>

            <el-radio-group v-model="blogtag" size="mini" @change="log">
              <el-radio-button label="技">技术</el-radio-button>
              <el-radio-button label="学">学习</el-radio-button>
              <el-radio-button label="杂">杂记</el-radio-button>
            </el-radio-group>
            <div style="text-align: center; margin: 1rem 0 0.5rem 0">
              <el-button type="primary" size="mini" @click="submit"
                >确认并发布</el-button
              >
            </div>
            <el-button
              class="search"
              type="primary"
              slot="reference"
              size="small"
              @click="getcontent"
              >发布</el-button
            >
          </el-popover>
        </div>
      </header>
      <!-- banner  -->
      <div
        class="banner"
        style="display: block"
        :class="
          $route.path == '/'
            ? 'bg1'
            : $route.path == '/about'
            ? 'bg3'
            : $route.path == '/link'
            ? 'bg0'
            : $route.path == '/process'
            ? 'bg4'
            : $route.path == '/suggestion'
            ? 'bg5'
            : $route.path.indexOf('/singleBlog') >= 0
            ? 'bg1'
            : $route.path == '/blogging'
            ? 'disppear'
            : ''
        "
      ></div>

      <div class="mask" v-if="$route.path !== '/blogging'">
        <h1>{{ hometitle }}</h1>
        <p>{{ homeverse }}</p>
      </div>
      <!-- content  -->
      <leftTag
        v-if="$route.path == '/'"
        @changeTag="changeTag"
        @getall="getall"
      />

      <div
        class="content"
        :class="$route.path !== '/blogging' ? 'minHeight' : ''"
      >
        <router-view ref="blog" />

        <div v-if="$route.path == '/'">
          <blog
            v-for="(item, i) in blogs"
            :title="item.title"
            :date="item.createdAt"
            :tag="item.tag"
            :id="item.id"
            :key="i"
            :content="item.content"
          />
          <!-- 分页 -->
          <div class="pagination">
            <el-pagination
              layout="prev, pager, next"
              :current-page.sync="page.currentpage"
              :total="page.total"
              :page-size="6"
              :hide-on-single-page="true"
              @current-change="changePage"
            >
            </el-pagination>
          </div>
        </div>
        <el-backtop></el-backtop>
      </div>
    </div>
    <!-- footer -->
    <div
      class="myfooter"
      :class="bgchange ? 'show' : ''"
      v-if="$route.path !== '/blogging'"
    >
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
import myFooter from "../components/footer";
import leftTag from "../components/leftTag";
import blog from "../components/blog";
import { formatDate } from "@/utils/changeDate";

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
      blogtitle: "",
      blogtag: "",
      visible: false,
      blogcontent: "",
      visible: false,
      blogs: [],
      blogslength: "",
      verse: [
        "浮生若梦，别多会少，不如莫遇。",
        "月似当时，人似当时否？",
        "彤云久绝飞琼字，人在谁边。",
        "凭将扫黛窗前月，持向今宵照别离。",
        "相逢不语，一朵芙蓉著秋雨。",
        "夜雨几番销瘦了，繁华如梦总无凭。人间何处问多情。",
        "半世浮萍随逝水，一宵冷雨葬名花。",
        "我是人间惆怅客，断肠声里忆平生。",
        "人生若只如初见，何事秋风悲画扇。",
        "等闲变却故人心，却道故心人易变。",
      ],
      page: {
        currentpage: 1,
        total: 6,
      },
    };
  },
  computed: {
    bgchange: function () {
      return sessionStorage.getItem("firstlog") || this.$store.state.firstLog;
    },
    hometitle() {
      return this.$store.state.hometitle;
    },
    homeverse() {
      return this.$store.state.homeverse;
    },
  },
  methods: {
    getall() {
      this.getBlogs(this.page.currentpage)
      let index = Math.floor(Math.random() * 10);
      this.setHometitleandverse('纳兰心事',this.verse[index])
      this.$notify.info({
          title: "返回成功",
          message: "已取消标签筛选",
          position: "top-left",
          duration: 1500,
        });
    },
    changeTag(data, tag) {
      console.log(data);
      console.log(tag);
      if (tag == "技") {
        this.$store.dispatch("hometitle", "技术篇");
      } else if (tag == "学") {
        this.$store.dispatch("hometitle", "学习篇");
      } else if (tag == "杂") {
        this.$store.dispatch("hometitle", "杂记篇");
      }
      this.blogs = data.rows;
      this.$store.dispatch("homeverse", `该标签下共有${data.count}篇文章`);
      this.page.total = data.count;
      if (this.page.total == 0) {
        this.$notify.info({
          title: "无果",
          message: "没有在该标签寻到词",
          position: "top-left",
          duration: 1500,
        });
      } else {
        this.$notify.info({
          title: "标签选择",
          message: "已筛选出该标签下的文章",
          position: "top-left",
          duration: 1500,
        });
      }
      console.log(this.blogs);
      for (let item of this.blogs) {
        item.createdAt = formatDate(new Date(item.createdAt), "yy/MM/dd");
      }
    },
    changePage() {
      this.getBlogs(this.page.currentpage);
    },
    getcontent() {
      this.blogcontent = this.$refs.blog.blogInfo.blogContent;
      // console.log(this.$refs.blog);
    },
    log() {
      console.log(this.blogtag);
    },
    submit() {
      if (!this.blogtitle) {
        this.$message.error("请添写标题");
        this.visible = false;
      } else if (!this.blogtag) {
        this.$message.error("请选择标签");
      } else {
        this.$post("/createBlog", {
          title: this.blogtitle,
          tag: this.blogtag,
          author: "lqy",
          content: this.blogcontent,
        })
          .then((data) => {
            if (data) {
              this.visible = false;
              console.log(data);
              this.$message({
                message: "发布成功",
                type: "success",
              });
              this.$router.push({ path: "/" });
              this.getBlogs(this.page.currentpage);
              this.blogtitle = "";
              this.blogtag = "";
              this.blogcontent = "";
            }
          })
          .catch((err) => {
            this.$message.error(`${err}`);
            console.log(err);
          });
      }
    },
    subsearch() {
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      }
      this.getBlogs(this.page.currentpage, this.search ,);
    },
    changeSearch() {
      this.searchIcon = !this.searchIcon;
      this.search = "";
      if (this.searchIcon == true) {
        this.getBlogs(this.page.currentpage);
      }
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

      if (scrollTop > 80) {
        document.getElementById("myheader").classList.remove("header-top");
      } else {
        document.getElementById("myheader").classList.add("header-top");
      }
      if (this.$route.path == "/blogging") {
        document.getElementById("myheader").classList.remove("header-top");
      }
    },
    getBlogs(page, searchTitle, tag) {
      this.$post("/getBlogs", { currentpage: page, title: searchTitle, tag })
        .then((data) => {
          if (data) {
            this.blogs = data.content.rows;
            this.page.total = data.content.count;
            if (this.page.total == 0) {
              this.$notify.info({
                title: "无果",
                message: "没有寻到该词条",
                position: "top-left",
                duration: 1500,
              });
            }
            console.log(this.blogs);
            let index = Math.floor(Math.random() * 10);
            this.setHometitleandverse('纳兰心事',this.verse[index])
            for (let item of this.blogs) {
              item.createdAt = formatDate(new Date(item.createdAt), "yy/MM/dd");
            }
            if(searchTitle)  {
               this.$notify.info({
                title: "搜索成功",
                message: `共有${data.content.count}篇词`,
                position: "top-left",
                duration: 1500,
              });
            }
          }
        })
        .catch((err) => {
          this.$message.error(`${err}`);
          console.log(err);
        });
    },
     setHometitleandverse(title,verse){
         this.$store.dispatch("hometitle", title);
        this.$store.dispatch("homeverse", verse);
    }
  },
  mounted() {
    this.showButton();
    document.body.scrollTop = 0;

    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
    this.getBlogs(this.page.currentpage);
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  },
  watch: {
    "$route.path": function () {
      console.log(this.$route);
      if (this.$route.path !== "/") {
        this.searchIcon = true;
      }
      if (this.$route.query.tag) {
        this.$post("/getBlogs", { currentpage: 1, tag: this.$route.query.tag })
          .then((data) => {
            if (data) {
              console.log(data);
              this.changeTag(data.content, this.$route.query.tag);
              let index = Math.floor(Math.random() * 10);
              this.setHometitleandverse('纳兰心事',this.verse[index])
            }
          })
          .catch((err) => {
            this.$message.error(`${err}`);
            console.log(err);
          });
      }
      if (this.$route.path.indexOf("/singleBlog") < 0) {
        let index = Math.floor(Math.random() * 10);
        this.setHometitleandverse('纳兰心事',this.verse[index])
      }
    },
    search: function () {
      if (this.search == "") {
        this.getBlogs(this.page.currentpage);
      }
    },
   
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