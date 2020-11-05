<template>
  <div class="process">
    <el-timeline>
      <el-timeline-item timestamp="2020/11/5" placement="top">
        <el-card>
          <h4>修复 1.2.1</h4>
          <p>• 修复标签筛选取消后bannertitle不改变的问题</p>
          <p>• 添加搜索成功后提示</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020/11/3" placement="top">
        <el-card>
          <h4>更新 1.2.0</h4>
          <p>• 压缩图片，webpack配置启用gzip压缩</p>
          <p>• 详情页面添加面包头</p>
          <p>• 按标签搜索后出现该标签名和文章数</p>
          <p>• about页面初步完成</p>
          <p>• 移动端显示适配</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020/10/22" placement="top">
        <el-card>
          <h4>更新 1.1.0</h4>
          <p>• 支持分页显示文章</p>
          <p>• 支持文章标题搜索功能</p>
          <p>• 支持文章标签搜索功能</p>
          <p>• 添加发表页面相同名称图片无法上传提示</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020/10/20" placement="top">
        <el-card>
          <h4>初步版本上线 1.0.0</h4>
          <p>• 基础功能：发布文章</p>
          <p>• 图片上传七牛云</p>
          <p>• 网站设置https</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 5000px) {
  .process {
    width: 40vw;
    margin-top: 4rem;
  }
}
@media (max-width: 860px) {
    .process {
    width: 60vw;
    margin-top: 4rem;
  }
}
@media (max-width: 450px) {
    .process {
    width: 80vw;
    margin-top: 4rem;
  }
}
</style>