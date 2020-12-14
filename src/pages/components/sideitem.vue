
<template>
  <Submenu :name="item.id" v-if="item.children && item.children.length>0" :class="{activeSubMenu: openNames[0]==item.id&&item.pid=='0'}">
    <template slot="title"><Icon v-if="item.pid=='0'" :class="item.class"></Icon>{{item.name}}</template>
    <template v-for="child in item.children">
      <sideitem v-if="child.children && child.children.length>0" :param="child" :openNames="openNames"></sideitem>
      <MenuItem :name="child.id_more" v-else>{{child.name}}</MenuItem>
    </template>
  </Submenu>
  <MenuItem :name="item.id_more" v-else>{{item.name}}</MenuItem>
</template>
 
<script>
    export default {
      name: "sideitem", //至关重要的一步，一定要写name，递归的时候使用
      props: ['param','openNames'],
      data: function () {
        return {item: this.param}
      },
    }
</script>
<style lang="scss">

</style>
