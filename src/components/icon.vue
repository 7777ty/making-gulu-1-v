<template>
    <svg class="icon" >
        <use v-bind:xlink:href="'#'+name"/>
    </svg>
</template>

<script lang='ts'>
    let importALL = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {
        importALL(require.context('../assets/icons', true, /\.svg$/));
    } catch (error) {
        console.log(error);
    }
    export default {
        props:['name'],

        name: 'icon',

    };
</script>

<style lang='scss' scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }


</style>