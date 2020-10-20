<template>
  <div>
    <mavon-editor 
    v-html="blog.content" 
    style="padding:20px" 
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
.singleBlog {
  min-height: 30vh;
  width: 50vw;
  margin-top: 3rem;
  /* box-shadow: none!important; */
  z-index: 0;
}


</style>