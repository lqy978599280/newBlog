<template>
  <div class="process">
    <el-timeline>
      <!-- <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item> -->
      <el-timeline-item timestamp="2020/10/22" placement="top">
        <el-card>
          <h4>更新 1.1.0</h4>
          <p> • 支持分页显示文章</p>
          <p> • 支持文章标题搜索功能</p>
          <p> • 支持文章标签搜索功能</p>
          <p> • 添加发表页面相同名称图片无法上传提示</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020/10/20" placement="top">
        <el-card>
          <h4>初步版本上线 1.0.0</h4>
          <p>  • 基础功能：发布文章</p>
          <p>  • 图片上传七牛云</p>
          <p>  • 网站设置https</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.process{
    width: 40vw;
    margin-top: 4rem;
}
</style>