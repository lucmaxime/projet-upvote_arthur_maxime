// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './main.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery-bar-rating/themes/fontawesome-stars.less';
import 'sweetalert2/dist/sweetalert2.min.css';
import firebase from 'firebase';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    data() {
        return {
        };
    },
    firebase() {
        return {
            categories: {
                source: firebase.database().ref('/categories')
            }
        };
    },
    methods: {
    }
});
