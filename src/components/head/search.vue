<!-- 头部的搜索框 -->
<template>
    <div class="search">
        <input type="text" class="search-input" />
        <button class="search-button">搜索</button>
    </div>
</template>
<style lang="scss" scoped>
.search {
    width: 485px;
	margin-left: 10px;
    height: 35px;
	display: flex;
	flex-flow: nowrap row;
	justify-content: center;
	align-items: center;
	padding-left: 15px;
	background-color: rgb(240, 240, 240);
}
.search-input {
    width: 90%;
    height: 25px;
	border: none;
	background-color: rgb(240, 240, 240);
	&:focus{
		border: none;
		outline: none;
	}
}
.search-button {
    width: 10%;
    height: 100%;
	border: none;
	background-color: rgb(230, 230, 230);
}
</style>
