import EventBus from '../eventbus';
import './nav.css';

const Nav = {
    props: ['cate'],
    template: `<ul>
                    <li class='nav_li active' @click="SearchCate($event,'all')">전체</li>
                    <li class='nav_li' v-for='list in lists' @click='SearchCate($event,list)'>{{list}}</li>
               </ul>`,
    data(){
        return{
            lists:''
        }
    },
    created() {
        EventBus.$on('navCate', (Data) => {
            this.lists = Data
        })
    },
    methods: {
        SearchCate(event,list){
            let NavClass = event.target.className;
            const NavList = document.querySelectorAll(`.${NavClass}`)
            for(let i = 0; i<NavList.length; i++){
                NavList[i].className = 'nav_li'
            }
            event.target.className = 'nav_li active'
            EventBus.$emit('SearchCate',list)
        }
    },

}

export default Nav