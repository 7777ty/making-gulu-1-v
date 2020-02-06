<template>
    <div>
        <gbutton :loading="loading1" @click="loading1=!loading1" icon="options">按钮</gbutton>
        <gbutton iconPosition="right" :loading=loading2 @click="loading2=!loading2" icon="options">按钮</gbutton>
        <ggroup>
            <gbutton icon="left">上一页</gbutton>
            <gbutton>更多</gbutton>
            <gbutton icon="right" iconPosition="right">下一页</gbutton>
        </ggroup>

    </div>
</template>

<script lang='ts'>

    export default {
        name: 'button',
        data() {
            return {
                loading1: false,
                loading2: true
            };
        }
    };
</script>

<style lang='scss' scoped>

</style>