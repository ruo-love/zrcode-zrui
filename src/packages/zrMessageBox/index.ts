//      引入创建虚拟节点和渲染方法
import { createVNode, render } from "vue";
import Alert from "./Alert.vue";
import Confirm from './Confirm.vue'
import Prompt from './Prompt.vue'
//      定义一个div容器
const div = document.createElement("div");

type AlertOptions = {
    title?: string,
    content?: string,
    confirmButtonText?: string,
    html: boolean,
    callback?: (types: string) => {}
}

type ConfirmOptions = {
    title?: string,
    content?: string,
    confirmButtonText?: string,
    cancelButtonText?: string,
    html: boolean,
    confirm?: () => {},
    cancel?: () => {},
}
type PromptOptions = {
    title?: string,
    confirmButtonText?: string,
    cancelButtonText?: string,
    confirm?: () => {},
    cancel?: () => {},
}



export const toAlert = (options: ConfirmOptions) => {
    render(null, div);
    const vnode = createVNode(Alert, options);
    render(vnode, div);
};

export const toConfirm = (options: AlertOptions) => {
    render(null, div);
    const vnode = createVNode(Confirm, options);
    render(vnode, div);
};

export const toPrompt = (options: PromptOptions) => {
    render(null, div);
    const vnode = createVNode(Prompt, options);
    render(vnode, div);
};
