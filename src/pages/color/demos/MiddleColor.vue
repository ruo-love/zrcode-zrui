<template>
    <div class="color-container">
        <div class="color-card shallow-primary">
            Shallow primary
            <div>#f0f1f7</div>
        </div>
        <div class="color-card shallow-success">
            Shallow Success
            <div>#f0f9eb</div>
        </div>
        <div class="color-card shallow-info">
            Shallow Info
            <div>#eff3fd</div>
        </div>
        <div class="color-card shallow-warning">
            Shallow Warning
            <div>#fdf6ec</div>
        </div>
        <div class="color-card shallow-error">
            Shallow Error
            <div>#fcdadd</div>
        </div>
    </div>
    <h3>文字色彩</h3>
    <div class="text-color-container">
        <div class="color-card text-primary">
            Text Primary
            <div>#ffffff</div>
        </div>
        <div class="color-card text-gray">
            Text Gray
            <div>#f0f9eb</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// //文字色
// $text-primary: #fff;
// $text-gray: #5e6d82;

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
        color: #000;

        div {
            margin-top: 20px;
        }

        &.shallow-primary {
            background-color: $shallow-primary;
        }

        &.shallow-success {
            background-color: $shallow-success;
        }

        &.shallow-info {
            background-color: $shallow-info;
        }

        &.shallow-warning {
            background-color: $shallow-warning;
        }

        &.shallow-error {
            background-color: $shallow-error;
        }

        &:hover {
            box-shadow: 2px 2px 10px 5px #ccc;
        }
    }
}

h3 {
    color: $main-color;
}

.text-color-container {
    padding: 10px;
    display: flex;

    .color-card {
        margin-right: 10px;
        box-sizing: border-box;
        height: 120px;
        padding: 10px;
        max-width: 300px;
        border-radius: 4px;
        text-align: center;
        color: #000;

        div {
            margin-top: 20px;
        }

        &.text-primary {
            background-color: $text-primary;
        }

        &.text-gray {
            background-color: $text-gray;
        }

        &:hover {
            box-shadow: 2px 2px 10px 5px #ccc;
        }
    }
}
</style>