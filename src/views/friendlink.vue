<script setup>
import { reactive } from 'vue';

const data = reactive([
    {
        title: '测试网站',
        desc: '这是一个测试网站',
        icon: 'https://www.baidu.com/favicon.ico',
        url: 'https://www.baidu.com'
    },
    {
        title: '测试网站',
        desc: '这是一个测试网站',
        icon: 'https://www.baidu.com/favicon.ico',
        url: 'https://www.baidu.com'
    },
    {
        title: '测试网站',
        desc: '这是一个测试网站',
        icon: 'https://www.baidu.com/favicon.ico',
        url: 'https://www.baidu.com'
    },
    {
        title: '测试网站',
        desc: '这是一个测试网站',
        icon: 'https://www.baidu.com/favicon.ico',
        url: 'https://www.baidu.com'
    },
    {
        title: '测试网站',
        desc: '这是一个测试网站',
        icon: 'https://www.baidu.com/favicon.ico',
        url: 'https://www.baidu.com'
    },
])

const YRange = [-7, 7], XRange = [-7, 7]
const getRangeDegree = (range, value, length) => {
    return (value / length) * (range[1] - range[0]) + range[0]
}

</script>

<template>
    <div class="showPad">
        <div class="row">
            <el-card v-for="(siteinfo, index) in data" :key="index" ref="card" class="cursor"
            @mousemove="(e) => {
                const { offsetX, offsetY } = e
                const card = $refs.card[index].$el
                const { offsetWidth, offsetHeight } = card
                const rx = getRangeDegree(XRange, offsetY, offsetHeight)
                const ry = -getRangeDegree(YRange, offsetX, offsetWidth)
                card.style.setProperty('--rx', `${rx}deg`)
                card.style.setProperty('--ry', `${ry}deg`)
            }"
            @mouseleave="(e)=>{
                const card = $refs.card[index].$el
                card.style.setProperty('--rx', `0deg`)
                card.style.setProperty('--ry', `0deg`)
            }"
            @click="()=>{
                const link = $refs.link[index].$el
                link.click()
            }"
            >
                <div class="icon">
                    <img :src="siteinfo.icon" alt="">
                </div>
                <div class="title">{{ siteinfo.title }}</div>
                <div class="desc">{{ siteinfo.desc }}</div>
                <el-link :href="siteinfo.url" target="_blank" ref="link" style="display: none;"></el-link>
            </el-card>
        </div>
    </div>

</template>

<style scoped>
.row{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row: auto;
    gap: 15px;
}
@media (max-width: 768px) {
    .row{
        grid-template-columns: 1fr 1fr;
    }
}

.cursor{
    cursor: pointer;
    transform: perspective(500px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
    transition: transform 0.3s;
}
.showPad{
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
}


</style>