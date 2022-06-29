import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../pages/Layout.vue'),
        redirect: '/icon',
        children: [
            {
                path: '/companion',
                name: '使用指南',
                component: () => import('../pages/Companion.vue'),
            },
            {
                path: '/icon',
                name: 'Icon',
                component: () => import('@/pages/icon/icon_doc.md'),
            },
            {
                path: '/container',
                name: 'Container',
                component: () => import('@/pages/container/container_doc.md'),
            },
            {
                path: '/color',
                name: 'Color',
                component: () => import('@/pages/color/color_doc.md'),
            },
            {
                path: '/button',
                name: 'Button',
                component: () => import('@/pages/button/button_doc.md'),
            },
            {
                path: '/link',
                name: 'Link',
                component: () => import('@/pages/link/link_doc.md'),
            },
            {
                path: '/radio',
                name: 'Radio',
                component: () => import('@/pages/radio/radio_doc.md'),
            },
            {
                path: '/checkbox',
                name: 'Checkbox',
                component: () => import('@/pages/checkbox/checkbox_doc.md'),
            },
            {
                path: '/input',
                name: 'Input',
                component: () => import('@/pages/input/input_doc.md'),
            },
            {
                path: '/select',
                name: 'Select',
                component: () => import('@/pages/select/select_doc.md'),
            },
            {
                path: '/cascader',
                name: 'Cascader',
                component: () => import('@/pages/cascader/cascader_doc.md'),
            },
            {
                path: '/switch',
                name: 'Switch',
                component: () => import('@/pages/switch/switch_doc.md'),
            },
            {
                path: '/table',
                name: 'Table',
                component: () => import('@/pages/table/table_doc.md'),
            },
            {
                path: '/tag',
                name: 'Tag',
                component: () => import('@/pages/tag/tag_doc.md'),
            },
            {
                path: '/progress',
                name: 'Progress',
                component: () => import('@/pages/progress/progress_doc.md'),
            },
            {
                path: '/tree',
                name: 'Tree',
                component: () => import('@/pages/tree/tree_doc.md'),
            },
            {
                path: '/message',
                name: 'Message',
                component: () => import('@/pages/message/message_doc.md'),
            },
            {
                path: '/alert',
                name: 'Alert',
                component: () => import('@/pages/alert/alert_doc.md'),
            },
            {
                path: '/loading',
                name: 'Loading',
                component: () => import('@/pages/loading/loading_doc.md'),
            },
            {
                path: '/messageBox',
                name: 'MessageBox',
                component: () => import('@/pages/messageBox/messageBox_doc.md'),
            },
            {
                path: '/notification',
                name: 'Notification',
                component: () => import('@/pages/notification/notification_doc.md'),
            },
            {
                path: '/tabs',
                name: 'Tabs',
                component: () => import('@/pages/tabs/tabs_doc.md'),
            },
            {
                path: '/breadcrumb',
                name: 'Breadcrumb',
                component: () => import('@/pages/breadcrumb/breadcrumb_doc.md'),
            },
            {
                path: '/steps',
                name: 'Steps',
                component: () => import('@/pages/steps/steps_doc.md'),
            },
            {
                path: '/badge',
                name: 'Badge',
                component: () => import('@/pages/badge/badge_doc.md'),
            },
            {
                path: '/result',
                name: 'Result',
                component: () => import('@/pages/result/result_doc.md'),
            },
            {
                path: '/empty',
                name: 'Empty',
                component: () => import('@/pages/empty/empty_doc.md'),
            },
            {
                path: '/drawer',
                name: 'Drawer',
                component: () => import('@/pages/drawer/drawer_doc.md'),
            },
        ]

    },]

export default createRouter({
    history: createWebHistory(),
    routes,
})
