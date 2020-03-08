import EventBus from '../eventbus';
import './list.css'

const Lists = {
    template: `
                <div>
                    <div class='images-group'>
                        <div v-for = '(list,i) in lists' v-bind:key="list.idx" class="images group" >{{list.title}}</div>
                    </div>
                    <button @click='ChangeData'>test</button>
                </div>`,
    data() {
        return {
            lists: ''
        }
    },
    created() {
        EventBus.$on('ListData', (Data) => {
            console.log(Data)
            this.lists = Data
        })
    },
    methods: {
        ChangeData() {

            this.lists = [

                {
                    "idx": "1",
                    "cate": "랜딩페이지",
                    "title": "유전자분석"
                },
                {
                    "idx": "2",
                    "cate": "상세페이지",
                    "title": "멍꾸멍꾸"
                }
            ]
        }
    },
}

export default Lists;