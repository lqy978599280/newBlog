<template>
  <div class="footer">
    <span>
      Copyright © 2020
      <a href="#">lqy</a>  版权所有
      <a href="http://beian.bizcn.com/login.jsp" target="_blank">浙ICP备19045397号</a>
    </span>
    <span class="title">
      纳兰心事
    </span>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>
@media (max-width: 5000px) {
  .footer {
    width: 80vw;
    margin-left: 10vw;
    height: 2rem;
    font-size: 0.5rem;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    line-height: 1rem;
  }
 
  .footer a {
    margin: 0 0.5rem;
    text-decoration: none;
    color: #3399ff;
  }
  .footer span {
    text-align: center;
    margin-top: 0.3rem;
  }
}

@media (max-width: 860px) {
  .footer {
    margin: 1rem 0;
    font-size: 10px;
    width: 100vw;
  }
  .footer a {
    margin: 0 0.5rem;
  }
}
@media (max-width: 450px) {
  .footer {
    margin: 2px 0;
  }
  .footer a {
    margin: 0 3px;
  }
  .title{
    display: none
  }
}
</style>
