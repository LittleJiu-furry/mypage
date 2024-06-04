<script setup>
import { watchEffect } from "vue";
import map from "../utils/tabsViewMap"
import { Expand, Share } from "@element-plus/icons-vue";
// 默认显示的tab
const current_tab = ref("timeline");
const props = defineProps({
    show: {
        type: String,
        required: false,
        default: ''
    }
})

watchEffect(()=>{
    current_tab.value = map[props.show] || "timeline"
})

const isMobile = ref(window.innerWidth < 768)
const tabPosition = ref(window.innerWidth < 768 ? "top" : "left")
onMounted(() => {
    isMobile.value = window.innerWidth < 768
    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth < 768
        tabPosition.value = isMobile.value ? "top" : "left"
    })
})

</script>

<template>
    <el-tabs :tab-position="tabPosition" class="tabs" v-model="current_tab" :stretch="true">
        <el-tab-pane name="timeline" class="pane">
            <template #label>
                <span class="custom_label">
                    <el-icon><Expand /></el-icon>
                    <span>时间线</span>
                </span>
            </template>
            <timeline></timeline>
        </el-tab-pane>
        <el-tab-pane name="friendlink" class="pane">
            <template #label>
                <span class="custom_label">
                    <el-icon><Share /></el-icon>
                    <span>友情链接</span>
                </span>
            </template>
            <friendlink></friendlink>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped>
.tabs{
    overflow: visible;
}

.custom_label {
    vertical-align: middle;
    text-align: center;
}

.custom_label .el-icon {
    vertical-align: middle;
}

.custom_label span {
    vertical-align: middle;
    margin-left: 4px;
}

</style>