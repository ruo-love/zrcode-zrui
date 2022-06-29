

import zrButton from './zrButton/index'
import zrContainer from './zrContainer/index'
import zrIcon from './zrIcon/index'
import zrLink from './zrLink/index'
import zrRadioGroup from './zrRadioGroup/index'
import zrCheckboxGroup from './zrCheckboxGroup'
import zrInput from './zrInput'
import zrSelect from './zrSelect'
import zrCascader from './zrCascader'
import zrSwitch from './zrSwitch'
import zrTable from './zrTable'
import zrTag from './zrTag'
import zrProgress from './zrProgress'
import zrTree from './zrTree'
import zrMessage from './zrMessage'
import zrAlert from './zrAlert'
import zrLoading, { showZrLoading } from './zrLoading'
import { toAlert, toConfirm, toPrompt } from './zrMessageBox'
import { Notify } from './zrNotification'
import zrTabs from './zrTabs'
import zrBreadcrumb from './zrBreadcrumb'
import zrSteps from './zrSteps'
import zrBadge from './zrBadge'
import zrResult from './zrResult'
import zrEmpty from './zrEmpty'
import zrDrawer from './zrDrawer'
//全部注册组件插件
const ZRUI: any = {
    install: (app: any) => {
        app.use(zrContainer)
            .use(zrButton)
            .use(zrIcon)
            .use(zrLink)
            .use(zrRadioGroup)
            .use(zrCheckboxGroup)
            .use(zrInput)
            .use(zrSelect)
            .use(zrCascader)
            .use(zrSwitch)
            .use(zrTable)
            .use(zrTag)
            .use(zrProgress)
            .use(zrTree)
            .use(zrAlert)
            .use(zrLoading)
            .use(zrTabs)
            .use(zrBreadcrumb)
            .use(zrSteps)
            .use(zrBadge)
            .use(zrResult)
            .use(zrEmpty)
            .use(zrDrawer)
        app.config.globalProperties.$zrMessage = zrMessage
        app.config.globalProperties.$showZrLoading = showZrLoading
        app.config.globalProperties.$toAlert = toAlert
        app.config.globalProperties.$toConfirm = toConfirm
        app.config.globalProperties.$toPrompt = toPrompt
        app.config.globalProperties.$Notify = Notify
    }
}
//按需引入对应组件的插件
export {
    zrButton,
    zrContainer,
    zrIcon,
    zrLink,
    zrRadioGroup,
    zrCheckboxGroup,
    zrInput,
    zrSelect,
    zrCascader,
    zrSwitch,
    zrTable,
    zrTag,
    zrProgress,
    zrTree,
    zrMessage,
    zrAlert,
    showZrLoading,
    toAlert,
    toConfirm,
    toPrompt,
    Notify,
    zrTabs,
    zrBreadcrumb,
    zrSteps,
    zrBadge,
    zrResult,
    zrEmpty,
    zrDrawer
};

// 暴露全局插件
export default ZRUI;