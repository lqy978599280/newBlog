<template>
  <div>
    <div :class="bgchange?'bgafter':'bg'">
      <div id="loading"></div>
      <div id="loading-btn" v-if="!bgchange">
        <button class="button" @click="goHome">
          <span>入</span>
        </button>
      </div>
    </div>
    <div v-if="bgchange" class='box'>
      <!-- header  -->
      <header class="myheader header-top">
        <div class="nav">
          <span class="title">
            <i class="iconfont icon-ci-copy" style="margin-right: .8rem;font-size: 1.85rem;vertical-align: center;" > </i>
            <a href="#" >纳兰心事</a>
          </span>
           <ul>
             <li>主页</li>

             <li>归档</li>

             <li>关于</li>

             <li>建议</li>

             <li>友联</li>


           </ul>
           <div class="search"></div>
        </div>
      </header>
      <!-- banner  -->
      <div class="banner"></div>
      <div class="mask">
        <h2>纳兰心事</h2>
        <p>月似当时，人似当时否？</p>
      </div>
      <!-- content  -->
      <router-view />
      <div class="content"></div>
    </div>
    <!-- footer -->
    <div class="myfooter" :class="bgchange?'show':''">
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
import myFooter from "../components/footer";
export default {
  components: {
    myFooter,
  },
  data() {
    return {
      bgchange: false,
    };
  },
  methods: {
    showButton() {
      setTimeout(() => {
        // document.getElementById("#loading-btn").css("display", "flex");
        document.getElementById("loading-btn").style.display = "flex";
        document.getElementById("loading").style.display = "none";
      }, 1000);
    },
    goHome() {
      this.bgchange = true;
      // this.$router.push('/index')
    },
  },
  mounted() {
    this.showButton();
    console.log(this.bgchange);
  },
};
</script>
<style scoped>
@media (max-width: 5000px) {
  .box{
    overflow-y: auto;
  }
  .content{
    position: absolute;
    top: 65vh;
    height: 1000vh;
    width: 100vw;
    max-width:100%;
  }
  .title a{
    text-decoration: none;
    color: inherit;
    z-index: 1033;
    font-size: 1.35rem;
    vertical-align:top;
    margin-right: 2rem;
  }
  .title:hover{
    color: rgba(250, 241, 225,0.8);
    transform: translateY(-3px);
      text-shadow: 8px 7px 6px black;
  }
  .nav{
    font-size: 1.3rem;
    margin-left: 20vw;
    display: flex;
  }
  .nav ul{
    list-style: none;
    vertical-align:top;
  }
  .nav ul li {
    float: left;
    margin-right: 1.2rem;
  }
  .nav ul li:hover{
    color: rgba(250, 241, 225,0.8);
    cursor: pointer;
      transform: translateY(-3px);
      text-shadow: 8px 7px 6px black;
  }
  .myheader {
    width: 100vw;
    height: 6vh;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background: #fff;
    color: black;
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }
  .header-top {
    background-color: transparent;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    padding: 1rem 0;
    color: rgba(250, 241, 225,0.3);
  }
  .myfooter {
    display: none;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0.3;
  }
  .myfooter:hover {
    opacity: 0.8;
  }
  .show {
    display: block;
  }
  .banner {
    position: absolute;
    top: 0;
    width: 100vw;
    background: url(../assets/bg1.jpg) no-repeat 50% 45%;
    animation: banner 1s steps(100) forwards 0.7s;
    max-width:100%
  }
  @keyframes banner {
    from {
      height: 0;
    }
    to {
      height: 65vh;
    }
  }
  @keyframes mask {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: 65vh;
      opacity: 0.5;
    }
  }
  .mask {
    position: absolute;
    top: 0px;
    width: 100vw;
    background: rgba(0, 0, 0, 0.1);
    filter: alpha(opacity=60);
    z-index: 100;
    color: cornsilk;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: mask 1s steps(100) both 1s;
    max-width:100%
  }
  .mask p {
    animation: word 1s ease-in 1.4s both;
    text-align: center;
    margin-top: 1rem;
  }
  .mask h2 {
    padding-top: 3rem;
    animation: word 1s ease-out 1.4s both;
    text-align: center;
  }
  @keyframes word {
    from {
      opacity: 0;
      -webkit-transform: translateX(500px) translateZ(0);
      transform: translateX(500px) translateZ(0);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0) translateZ(0);
      transform: translateX(0) translateZ(0);
    }
  }
  #loading {
    transition: all 0.8s cubic-bezier(0.7, -0.5, 0.2, 1.6);
    background: #ee6a73;
    width: 0.15vw;
    height: 0;
    animation: load 1s linear;
    position: absolute;
    left: 0;
  }
  @keyframes load {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(16.6vw);
      height: 0.25vh;
      width: 0.35vw;
    }
    50% {
      transform: translateX(33.3vw);
      height: 0.25vh;
      width: 0.7vw;
    }
    75% {
      transform: translateX(50vw);
      height: 0.25vh;
      width: 0.35vw;
    }
    88% {
      transform: translateX(50vw);
      height: 0.3vh;
      width: 0.25vw;
    }
    100% {
      transform: translateX(47.3vw);
      height: 3vh;
      width: 0.15vw;
    }
  }
  .bg {
    width: 100vw;
    height: 100vh;
    background: url(../assets/00234.jpg) no-repeat 50% 50%;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bgafter {
    width: 100vw;
    height: 100vh;
    background: url(../assets/00234.jpg) no-repeat 50% 50%;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: bgchange 1.2s cubic-bezier(0.7, 0.1, 0.2, 1) forwards;
  }
  @keyframes bgchange {
    0% {
      transform: translateY(0);
    }

    100% {
      height: 0vh;
    }
  }
  #loading-btn {
    display: none;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transition: all 0.5s cubic-bezier(0.9, -0.5, 0.2, 1.8);
  }

  button {
    background: transparent;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    padding: 1.2vh 2vw;
    position: relative;
    cursor: pointer;
    outline: none;
  }

  button:before {
    transition: all 0.4s cubic-bezier(0.9, -0.5, 0.2, 1.6);
    content: "";
    width: 3%;
    height: 100%;
    background: #ff5964;
    position: absolute;
    top: 0;
    left: 0;
  }

  button span {
    font-size: 1.3rem;
    color: white;
    transition: color 2s cubic-bezier(0.1, 0.8, 0.2, 1.6) 0.2s;
  }
  button:hover span {
    color: black;
    mix-blend-mode: darken;
  }
  button:hover:before {
    background: #ff5964;
    width: 100%;
    border-radius: 3px;
  }
}

@media (max-width: 666px) {
  .bg {
    width: 100vw;
    min-height: 100vh;
    background: wheat;
    background-size: 100%;
  }
}
</style>
