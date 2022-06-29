//      引入创建虚拟节点和渲染方法
import { createVNode, render } from "vue";
import zrMessage from "./zrMessage.vue";

const box = document.createElement("div");
box.classList.add('zr-message-container')
document.body.appendChild(box);
//      定义定时器：一定时间后清除
// let timer: any = null;
type Type = 'success' | 'warning' | 'error' | 'info'


export default ({ message, type, duration = 3000, dangerouslyUseHTMLString }: { message: string, type: Type, duration?: number, dangerouslyUseHTMLString?: boolean }) => {
    //      调用创建虚拟节点方法
    //      第一个参数为要创建的虚拟节点即编写好的vue组件
    //      第二个参数为props的参数

    const vnode = createVNode(zrMessage, { message, type, dangerouslyUseHTMLString });
    //      调用渲染方法：将虚拟节点渲染到dom中
    //      定义一个div容器
    const div = document.createElement("div");
    //      将定义的容器添加到dom上
    box.appendChild(div)

    render(vnode, div);
    //      开启定时器，若原先存在则先进行清除
    // timer && clearTimeout(timer);
    let timer = setTimeout(() => {
        render(null, div);
        box.removeChild(div);
        clearTimeout(timer);
    }, duration);

};

