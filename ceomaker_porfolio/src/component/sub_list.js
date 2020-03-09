import EventBus from '../eventbus';
import './list.css'

const SubLists = {
    props:['idx'],
    template: `<div>123</div>
                `,
                created(){
                    console.log(this.idx)
                }

}

export default SubLists;