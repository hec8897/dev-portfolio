<template>
        <section class="home section1" >
            <div class='obj left1'></div>
            <div class='obj left2'></div>
            <div class='obj left3'></div>
            <div class='obj right1'></div>
            <div class='obj right2'></div>
            <div class='obj right3'></div>

            <h2><span v-if='Typing>1'>성</span>
                <span v-if='Typing>2'>장</span>
                <span v-if='Typing>3'>형</span>
                <span v-if='Typing>5'> 개</span>
                <span v-if='Typing>6'>발</span>
                <span v-if='Typing>7'>자</span>
                <span> 김다운</span>
            </h2>
            <div class='scroll_ani'>
                <div></div>
            </div>
        </section>
</template>
<script>

    export default {
        name:'homeSection1',
   
        data(){
            return{
                Typing:0
            }
        },
        mounted(){
            setInterval(() => {
                this.Typing<10?this.Typing+=1:clearInterval()
            }, 150);
        },
        methods: {
        },
    }
</script>
<style scoped lang='scss'>

    section.home.section1{
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        position: relative;
        z-index: 10;
        div.obj{
            width:80px;
            height:80px;
            border-radius: 100%;
            border: 15px solid #42b983;
            box-sizing: border-box;
            position: absolute;
            &.left1{
                top:20%;
                left: 10%;
            }
             &.left2{
                width: 100px;
                height: 100px; 
                top:40%;
                left: 15%;
            }
              &.left3{
                width: 150px;
                height: 150px;
                top:45%;
                left: 10%;
                opacity: 0.7;
                background:#42b983
            }
             &.right1{
                width: 100px;
                height: 100px;
                top: 50%;
                right: 10%;
                background:#42b983;
                opacity: 0.9;


            }
            &.right2{
                 width: 120px;
                height: 120px;
                 top: 70%;
                right: 20%;
            }
             &.right3{
                top: 20%;
                right: 20%;
            }

        }
        h2{
            position: absolute;
            left: 50%;
            top: 48%;
            transform: translate(-50%,-50%);
            font-size: 3rem;
            font-weight: bold;
            color: #42b983;
        }
        div.scroll_ani{
            width: 40px;
            height: 80px;
            border: 2px solid #42b983;
            border-radius: 50px;;
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            div{
                width: 20px;
                height: 20px;
                background: #42b983;
                border-radius: 100%;
                margin: 10px auto;
            }
        }
    }

</style>