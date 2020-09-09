<template>
  <Affix :offset="100">
    <div class="tags">
      <i class="iconfont icon-ci-copy icon"></i>
      <div class="top"></div>
      <span class="tag">技
        <div class="tagShow">术</div>
      </span>
      <p>·</p>

      <span class="tag">学
        <div class="tagShow">习</div>

      </span>
      <p>·</p>

      <span class="tag">杂
        <div class="tagShow">记</div>

      </span>
      
    </div>
  </Affix>
</template>

<script>
import Affix from "./affix";
export default {
  components: {
    Affix,
  },
};
</script>

<style  scoped>
.icon {
  font-size: 3rem;
}
.top {
    margin-top: 2ch;
}
.tags {
  margin-left: 11vw;
  width: 50px;
  padding-top: 10px;
  font-size: 1.5rem;
  border-radius: 25px;
  text-align: center;
  margin-top: 2rem;
  min-height: 60vh;
  animation: tags 3s ease both 1s;
  position: absolute;
}
@keyframes tags {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
.tag {
  cursor: pointer;
  height: 1.8rem;
  display: block;
  line-height: 1.8rem;
  transition: font-size ease-out 0.2s 0.1s;
}

.tagShow{
  opacity: 0;
  position: relative;
  left: 1.8rem;
  top: -1rem;
  font-size: 1.3rem;
  transition: all ease-out 0.5s 0.1s;

  }
.tag:hover {
  font-size: 2rem;
}
.tag:hover  .tagShow{
  opacity: 0.7;
  left: 2.5rem;
}

</style>