<script setup>
import { reactive, watch, watchEffect } from 'vue';
import { Sunny, Moon, Search } from '@element-plus/icons-vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const changeDarkMode = (val) => useToggle(isDark)
const inputValue = ref('')
const inputPlaceholder = ref('别看了，再看这里也不变的')

const inputChange = (val) => {
    console.log(val);
}

const handleCommand = (cmd) => {
    // cmd是一个对象， 包含handle和args两个属性
    // 如果cmd不是这个对象，那么直接返回
    if (typeof cmd !== 'object') return
    // 如果cmd.handle不是一个函数，那么直接返回
    if (typeof cmd.handle !== 'function') return
    // 如果cmd.args不是一个数组，那么直接返回
    if (!Array.isArray(cmd.args)) return
    // 调用cmd.handle函数，并传入cmd.args作为参数
    cmd.handle(...cmd.args)
}

</script>

<template>
    <div class="home">
        <el-container class="yfull">
            <el-header class="header">
                <el-row class="row">
                    <el-col :span="6">
                        <!-- 首页图 -->
                    </el-col>
                    <el-col :span="12">
                        <el-input class="inputBox" clearable v-model="inputValue" :placeholder="inputPlaceholder" @change="inputChange">
                            <template #prepend>
                                <el-button :icon="Search"></el-button>
                            </template>
                        </el-input>
                    </el-col>
                    <el-col :span="6">
                        <div class="right_flex">
                                <div aria-label="切换亮暗色">
                                    <el-switch v-model="isDark" inline-prompt size="large"
                                        class="dark_mode_switch" @change="changeDarkMode">
                                        <template #inactive-action>
                                            <el-icon style="color: #414141">
                                                <sunny />
                                            </el-icon>
                                        </template>
                                        <template #active-action>
                                            <el-icon>
                                                <moon />
                                            </el-icon>
                                        </template>
                                    </el-switch>
                                </div>
                                <el-dropdown @command="handleCommand">
                                    <el-avatar size="small" id="userIcon" class="noselect tolarge">
                                        U
                                    </el-avatar>
                                    <template #dropdown>
                                        <!-- <el-dropdown-menu>
                                            <el-dropdown-item>个人中心</el-dropdown-item>
                                            <el-dropdown-item>退出登录</el-dropdown-item>
                                        </el-dropdown-menu> -->
                                        <header-dropdown></header-dropdown>
                                    </template>
                                </el-dropdown> 
                            
                            </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main class="main">
                <el-scrollbar class="xfull needBack">
                    <div class="content">
                        <!-- <page-article v-if="article" :show="show"></page-article> -->
                        <router-view></router-view>
                    </div>
                    <el-backtop target=".needBack .el-scrollbar__wrap" :right="20" :bottom="15"></el-backtop>
                </el-scrollbar>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.yfull{
    height: 100%;
}
.xfull{
    width: 100%;
}
.home {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.header {
    width: 100%;
    display: flex;
    height: 40px;
    box-sizing: border-box;
    position: sticky;
    top: 0;

    box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
    z-index: 2;
}

.row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dark_mode_switch {
    --el-switch-on-color: #414141;
    --el-switch-off-color: #e0e0e0;
}

.flex-box {    display: flex;
    justify-content: space-between;
    align-items: center;
}
.userIcon{
    height: 40px;
    width: 40px;
    overflow: hidden;
}

.userIcon img{
    width: 100%;
    height: 100%;
}

.noselect{
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.tolarge{
    transition: transform 0.1s;
}

.tolarge:hover{
    transform: scale(1.2);
}

.main{
    height: 100%;
    padding: 0;
}

.tabs{
    overflow: visible;
}

.content{
    box-sizing: border-box;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
}

@media (max-width: 768px){
    .content {
        padding: 20px 10px;
    }
    .header{
        padding: 0 10px;
    }
    .right_flex{
        gap: 5px;
    }
}

.right_flex{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
}

.inputBox{
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
}
</style>