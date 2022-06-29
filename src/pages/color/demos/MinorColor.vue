<template>
    <div class="color-container">
        <div class="color-card success">
            Success Color
            <div>#26de81</div>
        </div>
        <div class="color-card warning">
            Warning Color
            <div>#f7b731</div>
        </div>
        <div class="color-card error">
            Error Color
            <div>#fc5c65</div>
        </div>
        <div class="color-card info">
            Info Color
            <div>#a5b1c2</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.color-container {
    padding: 10px;
    display: flex;
    justify-content: space-around;

    .color-card {
        margin-right: 10px;
        box-sizing: border-box;
        height: 120px;
        padding: 10px;
        flex: 1;
        border-radius: 4px;
        text-align: center;
        color: $text-primary;

        div {
            margin-top: 20px;
        }

        &.success {
            background-color: $success;
        }

        &.info {
            background-color: $info;
        }

        &.warning {
            background-color: $warning;
        }

        &.error {
            background-color: $error;
        }

        &:hover {
            box-shadow: 2px 2px 10px 5px #ccc;
        }
    }
}
</style>