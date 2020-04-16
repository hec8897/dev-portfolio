<template>
        <section class="home section2" >
            <h2>About</h2>
            <div class='h2_line'></div>
            <div id='wrap'>
                    <b-row class='info'>
                        <transition name='fade-right'>
                            <b-col cols="12" sm='12' md='6' v-if="scrollPositon > 500" >
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
                                <ul>
                                    <li><b-icon-arrow-return-right></b-icon-arrow-return-right>자유 분방함 속에 책임감</li>
                                    <li><b-icon-arrow-return-right></b-icon-arrow-return-right>포기보단 다른 방법을 찾는 집요함</li>
                                    <li><b-icon-arrow-return-right></b-icon-arrow-return-right>멈추지 않고 성장하는 개발자</li>
                                    <li><b-icon-arrow-return-right></b-icon-arrow-return-right>스펀지 같은 흡수력을 가진 개발자</li>
                                </ul>
                                <div class='resum'>
                                    <h3>Career</h3>
                                    <ul>
                                        <li>
                                            <p>대림대학교 (전문학사)</p>
                                            <p>모바일인터넷과 전공</p>
                                            <dd>2013.3~2019.2</dd>
                                        </li>
                                         <li>
                                            <p>BM Company 웹개발자</p>
                                            <p>html,css,js,php 개발</p>
                                            <dd>2019.3~2020.5</dd>
                                        </li>
                                         <li>
                                            <p>대림대학교 (전공심화)</p>
                                            <p>모바일인터넷과 학사과정</p>
                                            <dd>2020.3~2021.2</dd>
                                        </li>
                                    </ul>
                                </div>
                            </b-col>
                        </transition>
                        <transition name='fade-left'>
                            <b-col cols="12" sm='12' md='6' v-if="scrollPositon > 500" >
                                <h3>Skill</h3>
                                <div class='skill_info'>
                                    <ul>
                                        <li>html5,css3 웹 표준 마크업</li>
                                        <li>SEO 구글,네이버 웹마스터 도구 등록 경험</li>
                                        <li>css animation(keyframe,transform) 제작</li>
                                        <li>css preprocessor (less,scss) 활용</li>
                                        <li>jquery 활용</li>
                                        <li>javascript es6 개발</li>
                                        <li>webpack,bable 활용</li>
                                        <li>Vue.js(vue,router,vuex) 개발 경험</li>
                                        <li>react, react native 학습 중</li>
                                        <li>기초 php 가능 (mysql 연동)</li>
                                    </ul>
                                </div>
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
                width: 150px;
                height: 200px;
                background: dodgerblue;
                display: inline-block;
            }
            div.infos{
                width: 60%;
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
                    margin-top: 20px;
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
            ul{
                padding-left: 10px;
                margin-top:20px;
                li{
                    list-style: none;
                    font-size: 1.0rem;
                    margin-bottom: 5px;
                    svg{
                        margin-right: 5px;
                    }
                }
            }
            div.resum{
                margin-top: 30px;
                ul{
                    li{
                        width: 33%;
                        display: inline-block;
                        vertical-align: bottom;
                        p{
                            font-size:0.875rem;
                        }
                        dd{
                            font: size 0.875rem;
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
        div.skill_info{
            ul{
                li{

                }
            }
        }

    }

</style>