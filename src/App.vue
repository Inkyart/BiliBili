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
.icons {
    width: 30px;
    height: 30px;
    position: relative;
    margin-right: 8px;

    > svg {
        fill: currentColor;
    }
    &::before {
        width: 100%;
        height: 100%;
        font-size: 25px;
        top: 0;
        left: 0;
        color: gray;
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
    transform: rotateZ(-5deg);
    transform: rotateX(5deg);
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
    transform: rotateZ(-5deg);
    &::before {
        font-family: icons2;
        content: '\E6E1';
    }
}

.icons-forward {
    transform: rotateZ(-5deg);
    &::before {
        font-family: icons2;
        content: '\E70F';
    }
}

.icons-note {
    transform: rotateZ(-3deg);
    &::before {
        font-family: icons3;
        content: '\E6B6';
        font-size: 18px;
        position: absolute;
        top: 16%;
    }
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
</style>
