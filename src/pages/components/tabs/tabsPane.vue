<template>
    <div class="tab-pane" :class="{'active':name==$parent.active}" v-show="name==$parent.active"><slot></slot></div>
</template>
<script>
    export default {
        name: 'tabsPane',
        data(){
            return {}
        },
        props: ['label','tip','disabled','name'],
        mounted(){
        },
        components: {},
        methods: {},
        computed: {}
    }
</script>
<style scoped lang="scss">
.tabs-content{
    .tab-pane{ display: none;
      &.active{ display: block; }
    }
  }
  </style>