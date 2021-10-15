// import 'amfe-flexible/index.js' // 自适应插件
// import './rem'
import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'element-plus/packages/theme-chalk/src/base.scss'
import './index.scss'
import { router, routerHistory } from '@/router'
// import { ElLoading, ElMessage, ElDatePicker } from 'element-plus'
import ElementPlus from 'element-plus'
import * as filters from '@/utils/filters'
import i18n from '@/utils/i18n'
import UserAvatar from '@/components/NftUserAvatar/NftUserAvatar.vue'

// ElementLocale.i18n(i18n.global.t)

const app = createApp(App)

// 挂载全局过滤器
app.config.globalProperties.$filters = {
  ...filters,
}

// 全局组件
app.component('UserAvatar', UserAvatar)

app
  .use(router)
  .use(ElementPlus, {
    i18n: i18n.global.t,
  })
  // .use(ElDatePicker)
  // .use(ElLoading)
  // .use(ElDatePicker, { i18n: i18n.global.t })
  .use(i18n)
  .mount('#app')
