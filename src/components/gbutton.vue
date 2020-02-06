<template>

    <button class="gbutton"  :class="{[`icon-${iconPosition}`]:true}"  @click="$emit('click')">
        <icon :name=icon v-if="icon && !loading"/>
        <icon name="Loading" class="loading" v-if="loading"/>
        <div class="content">
            <slot></slot>
        </div>
    </button>

</template>

<script lang='ts'>
    import logger from 'vuex/dist/logger';


    export default {
        name: 'gbutton',
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
            },
            loading:{
                type: Boolean,
                default: false,
            },
        },
    };
</script>

<style lang='scss' scoped>
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .gbutton {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        margin: 0.5em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;   //内联元素如果对不齐就加这个
        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        &.icon-left {
            > .icon {
                order: 1;
                margin-right: 0.3em;
            }
            > .content{
                order:2;
            }
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: 0.3em;
            }
            > .content{
                order:1;
            }
        }
        .loading{
            animation: spin 2s linear infinite;
        }
    }

</style>