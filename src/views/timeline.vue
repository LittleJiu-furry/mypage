<script setup>
import { reactive, ref } from 'vue';
const loading = ref(false)
const activities = reactive([])
const load = () => {
    loading.value = true
    activities.push({
        title: '标题',
        subtitle: '副标题',
        timestamp: '2021-09-01',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n内容内容内容内容内容内容',
        tags: ['标签1', '标签2'],
        id: "test1"
    })
    loading.value = false
}

</script>

<template>
    <div class="showPad">
        <div class="timeline">
            <el-timeline id="timeline_out">
                <el-timeline-item
                    placement="top"
                    v-for="(activity, index) in activities"
                    :key="index"
                    type="primary"
                >
                    <el-card style="text-align: left;"
                        @click="$refs.routerlink[index].$el.click()"
                        class="card"
                        shadow="never"
                    >
                        <div class="flex-box">
                            <div class="title">{{ activity.title }}</div>
                            <div class="tags flex-box">
                                <el-tag
                                    v-for="(tag, index) in activity.tags"
                                    :key="index"
                                    type="success"
                                    size="small"
                                >{{ tag }}</el-tag>
                            </div>
                        </div>
                        <div class="subtitle">{{ activity.subtitle }}</div>
                        <div class="timestamp">{{ activity.timestamp }}</div>
                        <p class="content">{{ activity.content }}</p>
                        <router-link ref="routerlink" :to="{name: 'Article', params: {show: activity.id}}"></router-link>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
        <el-button @click="load" :loading="loading">加载更多</el-button>
    </div>
    
</template>

<style scoped>
* {
    width: fit-content;
}

.showPad{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.timeline{
    width: 100%;
    display: flex;
    justify-content: center;
}

.flex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.tags{
    gap: 5px;
}

.title{
    font-size: 20px;
}

.subtitle {
    font-size: 12px;
}

.timestamp {
    font-size: 12px;
}

.card{
    --hover-color: rgba(0,0,0,.2);

}

html.dark .card{
    --hover-color: rgba(255,255,255,.3);
}

.card:hover {
    box-shadow: 0px 0px 10px var(--hover-color);
}

#timeline_out{
    padding: 0 10px;
    box-sizing: border-box;
}

</style>