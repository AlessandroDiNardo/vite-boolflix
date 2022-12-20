/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBell, faCirclePlay, faMagnifyingGlass, faSortDown, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSquareFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faStar, faStarHalfStroke, faMagnifyingGlass, faBell, faSortDown, faCirclePlay, faSquareFacebook, faTwitter, faInstagram, faYoutube)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

