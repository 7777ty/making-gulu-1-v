<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'g-button-group'
    };
</script>

<style lang='scss' scoped>
.g-button-group{
    display: inline-flex;

    > .gbutton{
        border-radius: 0;
        &:not(:first-child){
            margin-left: -8px;
        }
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius:  var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
}
</style>