import EventBus from '../eventbus';
import './list.css'

const Lists = {
    template: `
                <transition-group tag='div' class='images-group' name='fade'>
                        <div v-for = '(result,i) in results' v-bind:key="i" v-if="i<limit" class="images group" >
                            <div class='inner'>
                                <figure class='main_img' v-bind:style="{backgroundImage:'url('+result.img+')'}">
                                </figure>
                                <div class='title'>
                                    <h2>{{result.title}}</h2>
                                    <p>{{result.sub_title}}</p>
                                    <span class='download' v-if="mode != 'sub'" @click='getSubData(result.idx)'>자세히 보기</span>
                                    <a class='download' v-bind:href='result.img' v-else download>다운로드</a>

                                </div>
                            </div>
                        </div>
                </transition-group>`,
    data() {
        return {
            mode: '',
            lists: '',
            results: '',
            limit: 4
        }
    },
    created() {
        EventBus.$on('ListData', (Data) => {
            this.mode = 'Recently'
            this.lists = Data
            this.results = this.lists.filter((x) => {
                return x.main_acitve == 1;//최근활동
            })
        })
        setInterval(() => {
            if (this.limit > this.results.length) {
                this.limit = this.results.length
            } else {
                this.limit += 2
            }
        }, 100);
    },

    mounted() {
        this.ChangeData()
    },
    methods: {
        ChangeData() {
            this.limit = this.results.length
            EventBus.$on('SearchCate', (Data) => {
                this.mode = 'all'

                this.results = [];

                if (Data == 'all') {
                    setTimeout(() => {
                        this.results = this.lists
                    }, 100);
                    this.mode = 'all'
                }
                else if (Data == 'Recently') {
                    this.results = this.lists.filter((x) => {
                        return x.main_acitve == 1;//최근활동
                    })
                    this.mode = 'Recently'
                }

                else {
                    this.results = this.lists.filter((x) => {
                        return x.cate == Data;
                    })
                    this.limit = this.results.length
                }

            })
        },
        getSubData(idx) {
            this.results = [];
            
            setTimeout(() => {
                let result = this.lists.filter((x) => {
                    return x.idx == idx;
                })
                this.mode = 'sub'
                this.results = result[0].sub
            }, 100);

        }
    },
}

export default Lists;