<template>
    <thead :style="`background-color:${status}`">
        <th>
            <slot></slot>
        </th>
    </thead>
</template>
<script>
export default {
    name: 'zrTableTh',
    props: ['border', 'stripe', 'status'],
    provide() {
        return {
            head: true,
            border: this.border,
            stripe: this.stripe
        }
    }
}
</script>