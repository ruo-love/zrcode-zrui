<template>
    <div class="color-container">
        <div class="color-card">
            Primary Color
            <div>#e55472</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.color-container {
    padding: 10px;

    .color-card {
        box-sizing: border-box;
        height: 120px;
        padding: 10px;
        max-width: 300px;
        background-color: $main-color;
        border-radius: 4px;
        color: $text-primary;
        text-align: center;

        div {
            margin-top: 20px;
        }
        &:hover {
            box-shadow: 2px 2px 10px 5px #ccc;
        }
    }
}
</style>