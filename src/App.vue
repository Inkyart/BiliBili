<template>
    <router-view />
</template>

<style lang="scss">
@font-face {
    font-family: icons1;
    src: url('./assets/icons/icons1.woff2') format('woff2');
}

@font-face {
    font-family: icons2;
    src: url('./assets/icons/icons2.woff') format('woff');
}

@font-face {
    font-family: icons3;
    src: url('./assets/icons/icons3.woff2') format('woff2');
}
// 取消 边距 超链接下划线 列表样式
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.icons {
    position: relative;
    margin-right: 8px;
    display: block;
    font-style: normal;
    z-index: 999;
    > svg {
        fill: currentColor;
    }

    &::before {
        width: 100%;
        height: 100%;
        font-size: 25px;
        margin-right: 5px;
        top: 0;
        left: 0;
        color: gray;
        display: inline-flex;
        flex-flow: nowrap row;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }
}

.icons-top,
.icons-colors,
.icons-bottom,
.icons-senior,
.icons-scroll {
    > svg {
        width: 100%;
        height: 100%;
        color: hsla(0, 0%, 100%, 0.8);
    }

    &.active {
        > .icons > svg {
            color: #00a1d6;
        }
    }
}

.icons-setting {
    > svg {
        width: 30px;
        height: 30px;
        color: gray;
    }

    &:hover {
        > svg {
            color: #00a1d6;
        }
    }
}

.icons-like {
    &::before {
        font-family: icons2;
        content: '\E6E0';
    }
}

.icons-coin {
    &::before {
        font-family: icons2;
        content: '\E6E4';
    }
}

.icons-collect {
    &::before {
        font-family: icons2;
        content: '\E6E1';
    }
}

.icons-forward {
    &::before {
        font-family: icons2;
        content: '\E70F';
    }
}

.icons-note {
    &::before {
        font-family: icons3;
        content: '\E6B6';
        font-size: 18px;
        position: absolute;
        top: 16%;
    }
}

.icons-list {
    &:before {
        font-family: icons2;
        content: '\E6EA';
        font-size: 14px;
        position: absolute;
        top: 20%;
        left: 0;
    }
}
.icons-left {
    &::before {
        font-family: icons2;
        content: '\E6F1';
        font-size: 14px;
        position: absolute;
        top: 6px;
    }
}
.icons-right {
    &::before {
        font-family: icons2;
        content: '\E6F0';
        font-size: 14px;
        position: absolute;
        top: 6px;
    }
}
.icons-sync{
    &::before{
        font-family: icons3;
        content: '\E73C';
        font-size: 14px;
    }
}
.icons-remove{
    &::before{
        font-family: icons1;
        content: '\E638';
        font-size: 14px;
    }
}
.icons-correct{
    &::before{
        font-family: icons1;
        content: '\E749';
        font-size: 14px;
    }
}
.level-6 {
    background-image: url('./assets/icons/icons-comment.png');
    background-repeat: no-repeat;
    background-position: -23px -410px;
}
.level-5 {
    background-image: url('./assets/icons/icons-comment.png');
    background-repeat: no-repeat;
    background-position: -23px -346px;
}
.level-4 {
    background-image: url('./assets/icons/icons-comment.png');
    background-repeat: no-repeat;
    background-position: -23px -282px;
}
.level-3 {
    background-image: url('./assets/icons/icons-comment.png');
    background-repeat: no-repeat;
    background-position: -23px -218px;
}
.level-2 {
    background-image: url('./assets/icons/icons-comment.png');
    background-repeat: no-repeat;
    background-position: -23px -154px;
}
.level-1 {
    background-image: url('./assets/icons/icons-comment.png');
    background-repeat: no-repeat;
    background-position: -23px -90px;
}
.level-0 {
    background-image: url('./assets/icons/icons-comment.png');
    background-repeat: no-repeat;
    background-position: -23px -26px;
}
</style>
