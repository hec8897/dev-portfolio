import './app.css'
import axios from 'axios'
import EventBus from './eventbus'
import Nav from './component/nav'
import Lists from './component/list'


new Vue({
    template:`<div>
        <h1>
            <img src='image/ci_color.png'/>
        </h1>
        <app-nav/>
        <app-list/>
    </div>`,
    components:{
        'app-nav':Nav,
        'app-list':Lists
    },
    data(){
        return{
            cate:''
        }
    },
   created(){
    const baseURI = 'data/data.json';
    axios.get(`${baseURI}`, {
        })
        .then((result) => {
            let CateArray = [];
            for(let i = 0; i<result.data.length; i++){
                CateArray.push(result.data[i].cate)
            }
            this.cate = Array.from(new Set(CateArray))//중복제거
            EventBus.$emit('navCate',this.cate)
            EventBus.$emit('ListData',result.data)
        })
        .catch(err => console.log('Login: ', err));
},

}).$mount('#app')