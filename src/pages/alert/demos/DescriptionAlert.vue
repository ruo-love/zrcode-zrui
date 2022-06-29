<template>
    <div class="warp">
        <zr-alert title="带辅助性文字介绍" :description="desc" type="info"></zr-alert>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const desc = '这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……'
const code = `
   <div>
        <zr-alert title="带辅助性文字介绍" :description="desc" type="info"></zr-alert>
    </div>

const desc = '这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……'
`

</script>