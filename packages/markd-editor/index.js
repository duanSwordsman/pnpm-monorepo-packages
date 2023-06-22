import Icon from './src/Icon.vue'

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Vue.component(Icon.name, Icon)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,
}
