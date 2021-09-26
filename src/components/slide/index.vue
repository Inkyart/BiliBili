<!-- 滑动条 -->
<template>
    <div
        class="range-active"
        :style="
            (() => {
                if (disabled) return { width: value + '%' }
                else return { width: '0%' }
            })()
        "
    ></div>
    <div
        class="range-normal"
        :style="
            (() => {
                if (disabled) return { width: 100 - value + '%' }
                else if(!text) return {width: '90%', 'margin-left': '5%'}
                return { width: '100%' }
            })()
        "
    ></div>
    <input
        :class="{ 'range-input-text': text, 'range-input-null': !text }"
        type="range"
        :max="max"
        :step="step"
        :min="min"
        v-model.number="value"
        @input="progress"
    />
    <div
        :class="{ 'range-scale-null': !text, 'range-scale': text }"
        v-if="scale"
    >
        <div
            class="range-scale-text"
            v-for="(item, index) in scale"
            :key="index"
        >
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        min: Number, // 最小值
        max: Number, // 最大值
        step: Number, // 步数
        scale: Array, // 刻度数组
        text: {
            // 是否有文本
            tpye: Boolean,
            default: true
        }
    },
    data () {
        return {
            value: 0, // 初始值
            disabled: (() => {
                // 是否禁用滑动条填充
                if (this.max >= 100) return true
                return false
            })()
        }
    },
    methods: {
        progress () {
            this.$emit('handle', this.value)
        }
    }
}
</script>
<style lang="scss" scoped>
.range-active,
.range-normal {
    position: relative;
    width: 50%;
    height: 100%;
    &.range-active {
        border-radius: 10px;
        background-color: #00a1d6;
    }
    &.range-normal {
        border-radius: 10px;
        background-color: gray;
    }
}
input[type='range'] {
    position: absolute;
    background: transparent;
    top: 0;
    left: 0;
    -webkit-appearance: none;
    height: 2px;
    z-index: 2;
    &::-webkit-slider-thumb {
        background: transparent;
        -webkit-appearance: none;
    }
    &::-webkit-slider-runnable-track， &::-moz-range-track {
        background: transparent;
        height: 2px;
        border-radius: 10px; /*将轨道设为圆角的*/
    }
    &:focus {
        outline: none;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 10px;
        width: 10px;
        left: 2;
        top: 1px;
        background: #00a1d6;
        border-radius: 50%; /*外观设置为圆形*/
    }
    &.range-input-null {
        width: 100%;
    }
    &.range-input-text {
        width: 100%;
    }
}
.range-scale-null,
.range-scale {
    z-index: 0;
    height: 15px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    > .range-scale-text {
        height: 20px;
        height: 30px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        color: rgba(160, 160, 160, 0.9);
        position: relative;
        white-space: nowrap;
        user-select: none;
        &::after {
            position: absolute;
            content: '';
            top: -2px;
            left: 50%;
            width: 2px;
            height: 6px;
            background-color: rgba(160, 160, 160);
            border-radius: 50%;
        }
    }
    &.range-scale {
        width: 170%;
        transform: scale(0.72, 1);
        left: -35%;
        > .range-scale-text {
            width: calc(100% / 5);
        }
    }
    &.range-scale-null {
        width: 100%;
        > .range-scale-text {
            width: calc(100% / 10);
        }
    }
}
</style>
