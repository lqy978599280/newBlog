<template>
  <div class="footer">
    <p>
      Copyright © 2020
      <a href="#">y</a>
    </p>
    <p>
      <a href="http://beian.bizcn.com/login.jsp" target="_blank">浙ICP备19045397号</a>
    </p>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>
@media (max-width: 5000px) {
  .footer {
    width: 100vw;
    position: fixed;
    bottom: 0;
    height: 4rem;
    font-size: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1rem;
  }
 
  .footer a {
    margin: 0 0.5rem;
    text-decoration: none;
    color: #3399ff;
  }
  .footer p {
    text-align: center;
    margin-top: 0.3rem;
  }
}

@media (max-width: 666px) {
  .footer {
    margin: 1rem 0;
    font-size: 0.8rem;
  }

  .footer a {
    margin: 0 0.5rem;
  }
}
</style>
