<script setup>
import { useRouter } from "vue-router"
import { } from 'lodash'
import { getStatus } from '../utils/back'

const logined = ref(false)
const isAdmin = ref(false)

const s = getStatus()
logined.value = s.logined
const _u_info = s.user

const router = useRouter()
const userCenter = {
    handle: () => {
        router.push(`/user/${_u_info?.uid}`)
    }
}
const logout = {
    handle: () => {
        
    }
}


</script>

<template>
    <el-dropdown-menu v-if="logined">
        <el-dropdown-item :command="userCenter">个人中心</el-dropdown-item>
        <el-dropdown-item :command="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
    <el-dropdown-menu v-else="logined">
        <el-dropdown-item>登录</el-dropdown-item>
        <el-dropdown-item>注册</el-dropdown-item>
    </el-dropdown-menu>
</template>