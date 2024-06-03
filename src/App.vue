<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ref } from 'vue';
const locale = ref(zhCn)

</script>

<template>
  <!-- i18n -->
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>

</style>
