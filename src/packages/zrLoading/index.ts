import zrLoading from './zrLoading.vue'
import { createVNode, render } from "vue";
//将组件注册为插件 导出

type Options = {
    title?: string,
    duration?: number,
    show?: boolean
    color?: string,
    backgroundColor?: string,
    icon?: string
}

let timer:any
const div = document.createElement("div");
export const showZrLoading = ({ title = 'Loading', duration = 3000, show = false, color = "#e55472", backgroundColor = 'rgba(230, 213, 216, 0.6)', icon = 'more1' }: Options) => {
    const vnode = createVNode(zrLoading, { title, color, backgroundColor, icon });
    render(vnode, div);
    if (!show) {
        timer = setTimeout(() => {
            render(null, div);
            timer = null
        }, duration);
    }
    return function () {
        render(null, div);
        timer = null
    }

}
export default {
    install: (app: any, options: any) => {
        app.directive('loading', {
            // 指令具有一组生命周期钩子：
            // 在绑定元素的 attribute 或事件监听器被应用之前调用
            created(el: any, bind: any) {
                if (!timer) {
                    let duration= bind.value.duration||3000
                    const loadingVnode = createVNode(zrLoading, bind.value);
                    render(loadingVnode, div);
                    timer = setTimeout(() => {
                        render(null, div);
                        timer = null
                    }, duration);
                }

            },
            // 在绑定元素的父组件卸载之前调用
            beforeUnmount(el: any, bind: any) {
                timer = setTimeout(() => {
                    render(null, div);
                    timer = null
                }, bind.value.duration);
            },

        })

    }
}