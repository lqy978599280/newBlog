<template>
  <div>
    <mavon-editor
      :toolbars="toolbars"
      @imgAdd="$imgAdd"
      @imgDel="handleEditorImgDel"
      v-model="value"
      @change="change"
      ref="md"
      :ishljs="true"
      class="mavon"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      value: "",
      blogInfo: {
        blogMdContent: "",
        blogContent: "",
      },
      html: "",
    };
  },

  methods: {
    //监听markdown变化
    change(value, render) {
      this.html = render;
      this.blogInfo.blogMdContent = value;
      this.blogInfo.blogContent = render;
      // console.log(this.html);
    },
    //上传图片接口pos 表示第几个图片
    $imgAdd(pos, $file) {
      const qiniu = require("qiniu-js");
      var config = {
        useCdnDomain: true,
        region: qiniu.region.z2,
      };
      var putExtra = {
        fname: "",
        params: {},
        mimeType: ["image/png"],
      };
      
      this.$get("/getToken")
        .then((res) => {
          console.log(res);
          var key = $file.name;
          let uploadToken = res.data.uploadToken;
          let url = ''
          let that = this
          var observable = qiniu.upload(
            $file,
            key,
            uploadToken,
            putExtra,
            config
          );
          // 文件上传
          let subscription = observable.subscribe({
            next(res) {
              console.log(res);
            },
            error(err) {
              console.log(err);
              if(err.code == 614){
                  that.$notify.info({
                title: "上传失败",
                message: "已经存在同名图片，此图片无法存入库，请更改名称后重新上传",
                position: "top-left",
                duration: 2500,
              });
              }
            
            },
            complete(res) {
              console.log(res);
              url = "https://img.lqy.kim/" + res.key+'>to30';
              console.log(url);
              that.$refs.md.$img2Url(pos, url)
            },
          });
          
        })
        .catch((err) => {

          console.log(err);
        });
    
    },
    handleEditorImgDel() {
      console.log("handleEditorImgDel"); //我这里没做什么操作，后续我要写上接口，从七牛云CDN删除相应的图片
    },
  },
};
</script>

<style scoped>
.mavon {
  width: 100vw;
  max-width: 100%;
  flex: 1;
  display: flex;
  position: absolute;
  top: 4.25rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  box-shadow: none !important;
}
</style>