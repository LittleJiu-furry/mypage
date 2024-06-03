<script setup>
const logined = ref(false)
const isAdmin = ref(false)

// 读取cookie
const getCookies = () => {
    console.log(document.cookie.split(';'));
    // return document.cookie.split(';').map(cookie => {
    //     const [name, value] = cookie.split('=')
    //     return { name: name.trim(), value: value.trim() }
    // })
}

const cookies = getCookies()
// const getCookie = (name: string): string | undefined => {
//     return cookies.find(cookie => cookie.name === name)?.value
// }

// console.log(cookies);



</script>

<template>
    <el-dropdown-menu >
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
    </el-dropdown-menu>
</template>