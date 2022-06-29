//      引入创建虚拟节点和渲染方法
import { createVNode, render } from "vue";
import zrNotification from "./zrNotification.vue";
//      定义一个div容器
const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");
const box4 = document.createElement("div");
box1.classList.add('zr-notify-container-right-top')
box2.classList.add('zr-notify-container-left-top')
box3.classList.add('zr-notify-container-right-bottom')
box4.classList.add('zr-notify-container-left-bottom')
document.body.appendChild(box1);
document.body.appendChild(box2);
document.body.appendChild(box3);
document.body.appendChild(box4);
type NotificationOptions = {
    title?: string,
    content?: string,
    html?: boolean,
    duration?: number,
    direction?: 'right-top' | 'left-top' | 'right-bottom' | 'left-bottom',
    type?: 'success' | 'warning' | 'error' | 'info',
    callback?: () => {}
}

export const Notify = ({ title = '标题', content = '这是一段内容', html = false, duration = 3000, callback, direction = 'right-top', type = 'success' }: NotificationOptions) => {

    const div = document.createElement("div");
    //      将定义的容器添加到dom上
    let parent: any = null
    switch (direction) {
        case 'right-top':
            box1.appendChild(div);
            parent = box1;
            break;
        case 'left-top':
            box2.appendChild(div);
            parent = box2;
            break;
        case 'right-bottom':
            box3.appendChild(div);
            parent = box3;
            break;
        case 'left-bottom':
            box4.appendChild(div);
            parent = box4;
            break;
    }
    function clearDom() {
        parent.removeChild(div);
        if (parent.children.length === 0) {
            document.body.removeChild(parent);
        }
    }
    const vnode = createVNode(zrNotification, { title, content, type, html, callback, clearDom });
    render(vnode, div);
    if (duration != 0) {
        let timer = setTimeout(() => {
            render(null, div);
            parent.removeChild(div);
            clearTimeout(timer);
            if (parent.children.length === 0) {
                document.body.removeChild(parent);
            }
        }, Math.abs(duration));
    }

};
