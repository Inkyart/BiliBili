<!-- 页面头部的容器 -->
<template>
    <div class="head">
        <v-link></v-link>
        <v-search></v-search>
        <v-user></v-user>
    </div>
</template>
<script>
import VSearch from './search.vue' // 导入 搜索框
import VLink from './link.vue' // 导入 超连接
import VUser from './user.vue' // 导入 用户相关
export default {
    components: {
        VSearch,
        VLink,
        VUser
    }
}
</script>
<style lang="scss" scoped>
.head {
    position: relative;
    z-index: 99;
    width: 100%;
    height: 50px;
    background-color: white;
	display: flex;
	flex-flow: nowrap row;
	justify-content: space-between;
	align-items: center;
    box-shadow: 0 2px 5px 0 #f1f1f1;
    margin-bottom: 20px;
}
</style>
