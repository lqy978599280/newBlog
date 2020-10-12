<template>
  <router-link tag="span" :to="{path: '/singleBlog:' + id}" >
    <div class="blog" :class="bgtype">
      <p class="blogtitle">{{ title }}</p>
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
    content:""
  },
  data() {
    return {
    };
  },
  computed: {
    bgtype: function () {
      return this.tag=='杂' ? 'bg4':this.tag=='技' ? 'bg3':this.tag == '学' ?'bg2': 'bg4'
    },
  },
};
</script>

<style  scoped>
.bg1{
  background: url(../assets/bg.png) no-repeat 50% 70%;

}
.bg2{
  background: url(../assets/bg1.jpg) no-repeat 50% 70%;

}
.bg3{
  background: url(../assets/bg3.png) no-repeat 50% 70%;

}
.bg4{
  background: url(../assets/bg4.jpg) no-repeat 50% 70%;

}
.blog {

  width: 50vw;
  margin: 6vh 10vw 2vh 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 27vh;
  flex-direction: column;
  background-size: 100%;
  filter:brightness(0.8);
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
.blogtitle {
  font-size: 1.5rem;
  letter-spacing: 0.4rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 0.75rem;
}
.blog span {
  color: #eee;
  font-size: 0.875rem;
  text-align: center;
  font-weight: 400;
}

.point {
  margin: 0 0.5rem;
}
</style>