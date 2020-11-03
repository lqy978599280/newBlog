<template>
  <router-link tag="span" :to="{ path: '/singleBlog:' + id }">
    <div class="blog" :class="bgtype">
      <p class="centerblogtitle">{{ title }}</p>
      <div>
        <span class="date">{{ date }}</span>
        <span class="point">•</span>
        <span class="tag">{{ tag }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: "",
    date: "",
    tag: "",
    id: "",
    content: "",
  },
  data() {
    return {};
  },
  computed: {
    bgtype: function () {
      return this.tag == "杂"
        ? "bgvillage"
        : this.tag == "技"
        ? "bg6"
        : this.tag == "学"
        ? "bgwater"
        : "bg3";
    },
  },
};
</script>

<style  scoped>
@media (max-width: 5000px) {
  .bgvillage {
    background: url(../assets/bgvillage.jpg) no-repeat 50% 70%;
    background-size: cover;
  }
  .bgwater {
    background: url(../assets/bgwater.jpg) no-repeat 50% 70%;
    background-size: cover;
  }
  .bg6 {
    background: url(../assets/bg8.jpg) no-repeat 50% 43%;
  }
  .bg3 {
    background: url(../assets/bg3.jpg) no-repeat 50% 70%;
  }

  .blog {
    width: 50vw;
    margin: 6vh 0 2vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 27vh;
    flex-direction: column;
    background-size: 100%;
    filter: brightness(0.8);
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.8s ease-out;
  }
  .blog:hover {
    /* transform: scale(1.05); */
    box-shadow: 5px 8px 11px 2px rgba(0, 0, 0, 0.4);
    background-size: 120%;
    transform: translateY(-5px) translateX(-10px);
  }
  .centerblogtitle {
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 0.75rem;
    margin-left: 0.4rem;
  }
  .blog span {
    color: #eee;
    font-size: 0.875rem;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  .point {
    margin: 0 0.5rem;
  }
}

@media (max-width: 860px) {
  .centerblogtitle {
    font-size: 16px;
  }
  .blog span {
    font-size: 14px;
  }
  .blog{
        border-radius: 5px;
    }
     .blog{
        width: 60vw;
        transform: translateX(5vw);
    }
}
@media (max-width: 450px) {
  .centerblogtitle {
    font-size: 16px;
  }
  .blog span {
    font-size: 14px;
  }
  .blog{
        border-radius: 5px;
         min-height: 13vh;
        width: 60vw;
        transform: translateX(10vw);
    }
}
</style>