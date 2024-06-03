<script setup>
import { ref } from 'vue';

const currentTime = ref(3)
const returnHome = () => {
    window.location.replace("/")
}

window.setInterval(() => {
    currentTime.value--
    if(currentTime.value === 0){
        returnHome()
    }
}, 1000)

</script>

<template>
    <div id="renderDiv">
        <el-result
            icon="error"
            title="404 Not Found"
            sub-title="看来你迷路了，这里什么都没有"
            class="result"
        >
        <template #extra>
          <el-button type="primary" @click="">{{ currentTime }}s 后返回主页</el-button>
        </template>
      </el-result>
    </div>
</template>

<style scoped>
#renderDiv{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
}

.result{
    width: 100%;
    height: 100%;
}

</style>