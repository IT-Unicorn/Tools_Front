<template>
  <div class="home">
    <!-- head -->
    <tools-head/>
    <!-- main -->
    <el-tabs>
      <el-tab-pane label="全部">
        <card/>
        <card/>
        <card/>
        <card/>
        <card/>
        <card/>
        <card/>
      </el-tab-pane>
      <el-tab-pane label="开发类">配置管理</el-tab-pane>
      <el-tab-pane label="站长类">角色管理</el-tab-pane>
      <el-tab-pane label="极客类">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    toolsHead : require("components/toolsHead").default,
    card:require("components/card").default
  }
}
</script>

<style scoped>
.home{
  margin: 0 50px ;
}
</style>
