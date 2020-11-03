<template>
  <div class="about">
    <div class="bruce flex-ct-x">
      <div class="console">console.log('about me')</div>
      <el-card class="card">
        <div class="auto-typing1">const aboutMe = {</div>
        <div class="auto-typing2">name: Lqy,</div>
        <div class="auto-typing3">website: 'https://lqy.kim',</div>
        <div class="auto-typing4">email: '978599280@qq.com',</div>
        <div class="auto-typing5">};</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@media (max-width: 5000px) {
  .card {
    box-sizing: content-box;
    min-width: 550px;
    padding-left: 3ch;
    background-color: #000;
    border-radius: 20px;
  }
  .about {
    width: 40vw;
    margin-top: 2rem;
  }
  .console {
    width: 90vw;
    animation: console 5s cubic-bezier(0.075, 0.82, 0.165, 1) both;
    margin: 2rem 0;
    font-weight: bold;
    font-size: 20px;
    color: rgb(32, 31, 29);
  }
  @keyframes console {
    from {
      transform: translateX(20vw);
    }
    to {
      opacity: 0;
    }
  }
  @mixin typing($count: 0, $duration: 0, $delay: 0) {
    overflow: hidden;
    border-right: 1px solid transparent;
    width: #{$count + 1}ch;
    font-family: Consolas, Monaco, Monospace;
    white-space: nowrap;
    animation: typing #{$duration}s steps($count + 1) #{$delay}s backwards,
      caret 500ms steps(1) #{$delay}s $duration * 2 backwards;
  }

  .auto-typing1 {
    @include typing(17, 1.2, 0);
  }
  .auto-typing2 {
    text-indent: 2ch;
    @include typing(11, 1, 1.2);
  }
  .auto-typing3 {
    text-indent: 2ch;
    @include typing(28, 1.5, 2.2);
  }
  .auto-typing4 {
    text-indent: 2ch;
    @include typing(27, 1.5, 3.7);
  }
  .auto-typing5 {
    @include typing(1, 0.3, 5.2);
  }
  .auto-typing1,
  .auto-typing2,
  .auto-typing3,
  .auto-typing4,
  .auto-typing5 {
    font-weight: bold;
    font-size: 30px;
    color: blanchedalmond;
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes caret {
    50% {
      border-right-color: currentColor;
    }
  }
}
@media (max-width: 860px) {
  .card {
    box-sizing: content-box;
    min-width: 550px;
    padding-left: 3ch;
    background-color: #000;
    border-radius: 20px;
    transform: translateX(-20vw);
  }
}

@media (max-width: 450px) {
  .about {
    margin-top: 0;
  }
 .console {
    transform: translateX(-20vw);
    font-size: 18px;
  }
  .card {
    min-width: 320px;
    padding-left: 1ch;
    transform: translateX(-20vw);
  }
   .auto-typing1,
  .auto-typing2,
  .auto-typing3,
  .auto-typing4,
  .auto-typing5 {
    font-size: 16px;
  }
}
</style>