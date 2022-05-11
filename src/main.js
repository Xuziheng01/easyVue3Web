import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router'
import api from '@/config/api';
import serve from '@/config/serve';
import Images from '@/assets/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import { Icon, List, PullRefresh, Loading, Stepper  } from 'vant';
import { httpPost, httpGet } from "./utils/axios";
import '@/assets/img/AntDesignIcon/iconfont.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(Icon);
app.use(List);
app.use(PullRefresh);
app.use(Loading);
app.use(Stepper);
app.config.globalProperties.$api = api;
app.config.globalProperties.$serve = serve;
app.config.globalProperties.$assets = Images;
app.config.globalProperties.$get = httpGet;
app.config.globalProperties.$post = httpPost;
app.mount('#app')
