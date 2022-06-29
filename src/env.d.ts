/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>

  export default component
}
declare module '@zhaoqiancheng/zrui';
declare module "@/pages/button/button_doc.md"
declare module "@/pages/color/color_doc.md"
declare module "@/pages/container/container_doc.md"
declare module "@/pages/icon/icon_doc.md"
declare module "@/pages/link/link_doc.md"
declare module "@/pages/radio/radio_doc.md"
declare module "@/pages/checkbox/checkbox_doc.md"
declare module "@/pages/input/input_doc.md"
declare module "@/pages/select/select_doc.md"
declare module "@/pages/cascader/cascader_doc.md"
declare module "@/pages/switch/switch_doc.md"
declare module "@/pages/table/table_doc.md"
declare module "@/pages/tag/tag_doc.md"
declare module "@/pages/progress/progress_doc.md"
declare module "@/pages/tree/tree_doc.md"
declare module "@/pages/message/message_doc.md"
declare module '@/pages/alert/alert_doc.md'
declare module "@/pages/loading/loading_doc.md"
declare module "@/pages/message/message_doc.md"
declare module "@/pages/messageBox/messageBox_doc.md"
declare module "@/pages/notification/notification_doc.md"
declare module "@/pages/tabs/tabs_doc.md"
declare module "@/pages/breadcrumb/breadcrumb_doc.md"
declare module "@/pages/steps/steps_doc.md"
declare module "@/pages/badge/badge_doc.md"
declare module "@/pages/result/result_doc.md"
declare module "@/pages/empty/empty_doc.md"
declare module "@/pages/drawer/drawer_doc.md"