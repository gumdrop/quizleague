import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import Vue from "vue"
import VueRx from 'vue-rx'
import Rx from 'rxjs'

Vue.use(Vuetify)
Vue.use(VueRx, Rx)

export const startVue = (router,rootElement) => {
    const vuetify = new Vuetify()
    new Vue({
        el:rootElement,
        vuetify,
        router,
    })

}