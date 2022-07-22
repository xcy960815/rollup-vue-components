// 开发单组件例子🌰
import rollupVueComponent from './rollup-vue-component.vue'
const install = function (Vue) {
    Vue.component(rollupVueComponent.name, rollupVueComponent)
}
rollupVueComponent.install = install

export {
    rollupVueComponent
}

export default {
    install,
}