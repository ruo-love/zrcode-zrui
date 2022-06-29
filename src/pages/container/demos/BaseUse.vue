<template>
    <div style="margin:20px 0px">
        <zrContainer style="margin-bottom:20px">
            <zr-header>header</zr-header>
            <zr-container>
                <zr-aside>aside</zr-aside>
                <zr-main>main</zr-main>
            </zr-container>
            <zr-footer>footer</zr-footer>
        </zrContainer>
        <zr-Container style="margin-bottom:20px">
            <zr-header>header</zr-header>
            <zr-container>
                <zr-aside>aside</zr-aside>
                <zr-main>main</zr-main>
            </zr-container>
        </zr-Container>
        <zr-Container style="margin-bottom:20px">
            <zr-header>header</zr-header>
            <zr-container>
                <zr-main>main</zr-main>
            </zr-container>
        </zr-Container>
        <zr-Container style="margin-bottom:20px">
            <zr-aside>aside</zr-aside>
            <zr-main>main</zr-main>
        </zr-Container>
        <showCode :code="code" />
    </div>
</template>
<script lang="ts" setup>

const code = `
<div>
   <zrContainer style="margin-bottom:20px">
        <zr-header>header</zr-header>
        <zr-container>
            <zr-aside>aside</zr-aside>
            <zr-main>main</zr-main>
        </zr-container>
        <zr-footer>footer</zr-footer>
    </zrContainer>
    <zr-Container style="margin-bottom:20px">
        <zr-header>header</zr-header>
        <zr-container>
            <zr-aside>aside</zr-aside>
            <zr-main>main</zr-main>
        </zr-container>
    </zr-Container>
    <zr-Container style="margin-bottom:20px">
        <zr-header>header</zr-header>
        <zr-container>
            <zr-main>main</zr-main>
        </zr-container>
    </zr-Container>
    <zr-Container style="margin-bottom:20px">
        <zr-aside>aside</zr-aside>
        <zr-main>main</zr-main>
    </zr-Container>
</div>
`
</script>
