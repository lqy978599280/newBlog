<template>
     <router-link :to='"/singleBlog:"+id' tag="span">
           <div class="blog">
             <p class="blogtitle">{{title}}</p> 
             <div>
             <span class="date">{{date}}</span> 
             <span class="point">•</span>
             <span class="tag">{{tag}}</span>  
             </div>
           
        </div>   
     </router-link>
      
</template>

<script>
    export default {
        props:{
            title:'',
            date:'',
            tag:'',
            id:''
        }
    }
</script>

<style  scoped>
.blog{
    width: 50vw;
    margin: 6vh 10vw 2vh 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 27vh;
    flex-direction: column;
    background: url(../assets/bg3.png)  no-repeat 50% 70%; 
    background-size: 100%;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.8s ease-out ;

}
.blog:hover{
    /* transform: scale(1.05); */
    box-shadow: 5px 8px 11px 2px rgba(0, 0, 0, .4);
    background-size: 120%;
    transform: translateY(-5px) translateX(-10px);
}
.blogtitle{
    font-size: 1.5rem;
    letter-spacing: 0.4rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: .75rem;
}
.blog span{
    color: #eee;
    font-size: .875rem;
    text-align: center;
    font-weight: 400;
}

.point{
    margin: 0 0.5rem;
}

</style>