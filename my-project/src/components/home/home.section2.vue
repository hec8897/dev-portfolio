<template>
        <section class="home section2" >
            <h2>About</h2>
            <div class='h2_line'></div>
            <div id='wrap'>
                    <b-row class='info'>
                        <transition name='fade-right'>
                            <b-col sm='6'  v-if="scrollPositon > 500" >
                                <h3>Profile</h3>
                                <div class='private_info'>
                                    <div class='photo'></div>
                                    <div class='infos'>
                                        <h4>김다운</h4>
                                        <p>Front-end Developer [경력 1년 2개월]</p>
                                        <ul>
                                            <li><b-icon-calendar></b-icon-calendar>2020.04.16</li>
                                            <li><b-icon-house-fill></b-icon-house-fill>경기도 김포시</li>
                                            <li><b-icon-phone></b-icon-phone>010-2386-6487</li>
                                            <li><b-icon-envelope></b-icon-envelope>hec8897@naver.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </b-col>
                        </transition>
                        <transition name='fade-left'>
                            <b-col sm='6' v-if="scrollPositon > 500" >
                                <h3>Profile</h3>
                                <div class='private_info'></div>
                            </b-col>
                        </transition>


                    </b-row>    
            </div>

        </section>
</template>
<script>

    export default {
        name:'homeSection2',
        data(){
            return{
                scrollPositon:0
            }
        },
        created(){
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                this.scrollPositon = window.scrollY
            },
        },
    }
</script>
<style scoped lang='scss'>

    .fade-right-enter-active,
    .fade-left-enter-active {
        transition: all .3s ease;
    }
    .fade-right-leave-active,
    .fade-left-leave-active {
        transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-right-enter, .fade-right-leave-to{
        transform: translateX(10px);
        opacity: 0;
    }
   
    .fade-left-enter, .fade-left-leave-to{
        transform: translateX(-10px);
        opacity: 0;
    }

    section.section2{
        height: 100vh;
        background: #f6f6f6;
        div#wrap{
            max-width: 1200px;
            margin: 0 auto;
            padding: 50px 0px;
        }
        h2{
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            position: relative;
        }
        div.h2_line{
            width: 3%;
            height: 3px;
            background: #42b983;
            margin: 0 auto;
        }
        div.info{
            h3{
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: 20px;
            }
            div.photo{
                width: 40%;
                max-width: 190px;
                height: 280px;
                background: dodgerblue;
                display: inline-block;
            }
            div.infos{
                width: 55%;
                height: 100%;
                float: right;
                vertical-align: top;
                margin-right: 5%;
                h4{
                    letter-spacing: 10px;
                    font-weight: bold;;
                    font-size: 1.25rem;
                }
                p{
                    letter-spacing: -1px;
                    color: #666;
                }
                ul{
                    margin-top: 10px;
                    padding-left: 5px;
                    li{
                        list-style: none;
                        color: #444;
                        margin-bottom: 5px;
                        svg{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }

    }

</style>