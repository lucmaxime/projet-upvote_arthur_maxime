import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import CategorieDetail from '@/components/CategorieDetail';
import CategorieAjout from '@/components/CategorieAjout';
import VideoAjout from '@/components/VideoAjout';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/categorie/:slug',
            name: 'CategorieDetail',
            component: CategorieDetail
        },
        {
            path: '/ajoutCat/',
            name: 'CategorieAjout',
            component: CategorieAjout
        },
        {
            path: '/ajoutVid/',
            name: 'VideoAjout',
            component: VideoAjout
        }
    ]
});
