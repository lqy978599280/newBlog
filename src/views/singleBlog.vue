<template>
  <div>
    <div
      style="height: 30vh; width: 80vw"
      class="markdown-body"
      v-html="blog.content"
    >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "测试用例",
        date: "20/9/9",
        tag: "技",
        id: 1,
        content: `<p>发士大夫埃尔文舒服阿瑟发士大夫</p>
                    <h3><a id="_1"></a>三级标题</h3>
                    <div class="hljs-right">
                    <p>居右</p>
                    </div>
                    <blockquote>
                    <p>阿斯蒂芬是</p>
                    </blockquote>`,
      },
    };
  },
  mounted() {
     this.$store.dispatch("hometitle",this.blog.title);
     this.$store.dispatch("homeverse",this.blog.date+'  '+this.blog.tag);
     
     console.log(this.$store.state.homeverse );
  },
  
};
</script>

<style scoped>
</style>