<template>

  <div>
    <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' ,query :{tag:blog.tag}}">{{blog.tag}}</el-breadcrumb-item>
    <el-breadcrumb-item >{{blog.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <hr class="myhr"> -->
    <mavon-editor 
    v-html="blog.content" 
    style="padding:0" 
    class="singleBlog" 
    :subfield="false"                                    
 		:boxShadow="false"                                    
 		defaultOpen="preview"                                    
 		:toolbarsFlag="false" 
    >
    </mavon-editor>
  </div>
</template>

<script>
import { formatDate } from "@/utils/changeDate";
// import 'mavon-editor/dist/css/index.css'
export default {
  data() {
    return {
      blog: {},
    };
  },
  mounted() {
    // console.log(this.$store.state.homeverse);
    // console.log(this.$route);
    // console.log(this.$route.params.id.substr(1));
    let id = this.$route.params.id.substr(1)
    this.$post("/findBlog",{id})
      .then((data) => {
        console.log(data);
        if(data.content){
          this.blog = data.content;
        this.$store.dispatch("hometitle", this.blog.title);
        console.log(this.blog.createdAt);
        this.$store.dispatch(
          "homeverse",
          formatDate(new Date(this.blog.createdAt), "yy/MM/dd") +
            " • " +
            this.blog.tag
        );
        }
        
      })
      .catch((err) => {
        this.$message.error(`${err}`);
        console.log(err);
      });
  },
};
</script>

<style scoped>
.breadcrumb{
  font-size: 1.3rem;
  margin : 2rem 0 3rem 0;
}

.singleBlog {
  min-height: 30vh;
  width: 50vw;
  margin-top: .8rem;
  border: 0;
  /* box-shadow: none!important; */
  z-index: 0;
}
 /* hr.myhr {
        width: 20vw;
        border: 0;
        height: 1px;
        margin: 1ch 0 2rem 0;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)  );
    } */

</style>
<style>
.breadcrumb .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  color: #1abc9c!important;
  font-weight: normal ;
}
.breadcrumb .el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover{
  color: rgba(68, 143, 255, 0.952) !important;
}
</style>