<template>
        <div class="blog">
             <p class="blogtitle">{{title}}</p> 
             <div>
             <span class="date">{{date}}</span> 
             <span class="point">•</span>
             <span class="tag">{{tag}}</span>  
             </div>
           
        </div>   
</template>

<script>
    export default {
        props:{
            title:'',
            date:'',
            tag:''
        }
    }
</script>

<style  scoped>
.blog{
    width: 60vw;
    margin: 6vh 10vw 2vh 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    flex-direction: column;
    border: 1px solid skyblue;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-out ;
}
.blog:hover{
    transform: scale(1.05);
    box-shadow: 1px 4px 8px 3px rgba(0, 0, 0, .075)
}
.blogtitle{
    font-size: 1.5rem;
    letter-spacing: 0.4rem;
    margin-bottom: 1rem;
}
.blog span{
    font-size: 1rem;
}

.point{
    margin: 0 0.5rem;
}

</style>