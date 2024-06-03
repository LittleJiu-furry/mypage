<script setup>
import { defineComponent, reactive, watchEffect } from 'vue';
import { ArrowLeft } from '@element-plus/icons-vue';
import tocPlugin from 'showdown-toc'
import katex from 'showdown-katex'
const toc = tocPlugin()
const props = defineProps({
    show: {
        type: String,
        required: true,
        default: ''
    }
})
watchEffect(()=>{
    if(!props.show){
        console.log("你要找的文章不存在");
    }
})

const article = reactive({
    title: '标题',
    subtitle: '副标题',
    tags: ['标签1', '标签2'],
    timestamp: '2021-09-01',
    content: 'text $$x = (-b +- sqrt(b^2-4ac)) / (2a)$$\n\ntext',
    
})
const showdownOpts = {
    tables: true,
    ghCodeBlocks: true,
    openLinksInNewWindow: true,
    emoji: true,
    simplifiedAutoLink: true,
    smartIndentationFix: true,
    strikethrough: true,
    smoothLivePreview: true,
}

const plugins = [
    toc(),
    katex({
        displayMode: true,
        throwOnError: false,
        output: "mathml",
        delimiters: [
            { left: "$$", right: "$$", display: true, asciimath: true,},
            { left: "$", right: "$", display: false, asciimath: true,},
        ],

    }),
]

</script>

<template>
    <div class="article">
        <div class="showPad">
            <router-link style="display: none;" ref="back" :to="{ name: 'Home' }"></router-link>
            <el-page-header @back="$refs.back.$el.click()" :icon="ArrowLeft">
                <template #title>
                    <strong>返回</strong>
                </template>
                <template #content>
                    <div class="flex-box">
                        <div class="title">{{ article.title }}</div>
                        -
                        <div class="subtitle">{{ article.subtitle }}</div>
                    </div>
                    <div class="flex-box">
                        <div class="timestamp">{{ article.timestamp }}</div>
                        <div class="tags flex-box">
                            <el-tag v-for="(tag, index) in article.tags" :key="index" type="success" size="small">
                                {{ tag }}
                            </el-tag>
                        </div>
                    </div>
                </template>
                <template #default>
                    <!-- <div class="content" v-html="htmlContent()"></div> -->
                    <vue-showdown 
                        :markdown="article.content" 
                        flavor="github" 
                        class="content" 
                        :options="showdownOpts"
                        :extensions="plugins" 
                    />
                </template>

            </el-page-header>
        </div>
    </div>
</template>


<style scoped>
.article{
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    /* background-color: red; */
}

.showPad{
    box-sizing: border-box;
    padding: 10px 20px;
    /* background-color: red; */
    max-width: 900px;
    width: 100%;
}

@media (max-width: 768px) {
    .showPad{
        width: 100%;
    }
}

.flex-box {
    display: flex;
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

.content {
    text-align: left;
    white-space: pre-wrap;
}

</style>