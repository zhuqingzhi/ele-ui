import { createApp } from 'vue'
import './styles/index.scss';
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from '@/components/Icon/index.vue'
import Button from '@/components/Button/index.vue'
/* add icons to the library */
library.add(fas)
const app = createApp(App)

const install = (app) => {
    app.component('font-awesome-icon', FontAwesomeIcon)
    const components = [Icon, Button]
    components.forEach(componentItem => {
        app.component(componentItem.name,componentItem)
    })
}
export default install;

export {
    Icon,
    Button,
    install
}