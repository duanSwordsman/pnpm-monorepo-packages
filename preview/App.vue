<template>
  <t-layout style="height: 100vh">
    <t-aside style="padding-left: 8px; padding-top: 8px">
      <t-menu theme="light" :value="activeMenu" @change="handleChange">
        <icon name="undraw_welcome_cats_thqn" width="220" height="80" />
        <t-menu-item value="icon">
          <icon slot="icon" name="查询" />Icon 组件
        </t-menu-item>
        <t-menu-item value="markd">
          <icon slot="icon" name="个人中心" />Markd编辑组件
        </t-menu-item>
        <!-- <t-menu-item value="root">
          <icon slot="icon" name="个人信息" />根目录
        </t-menu-item>
        <t-menu-item value="control-platform">
          <icon slot="icon" name="数据展示2" />调度平台
        </t-menu-item> -->
      </t-menu>
    </t-aside>
    <t-layout>
      <t-content style="position: relative;">
        <router-view></router-view>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: "icon",
    };
  },
  methods: {
    handleChange(val) {
      this.activeMenu = val;
      this.$router.push(`/${val}`);
    },
  },
};
</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>
