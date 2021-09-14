<!-- 页面头部的容器 -->
<template>
    <div class="head">
        <v-link></v-link>
        <v-search></v-search>
        <v-user></v-user>
    </div>
</template>
<script>
import VSearch from './search.vue'
import VLink from './link.vue'
import VUser from './user.vue'
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
    z-index: 0;
    width: 100%;
    height: 50px;
    background-color: white;
	display: flex;
	flex-flow: nowrap row;
	justify-content: space-around;
	align-items: center;
    box-shadow: 0 3px 0 0 #f1f1f1;
}
</style>
