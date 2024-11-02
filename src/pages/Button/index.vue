<template>
  <!-- project description is here-->
  <div>
    <h2 style="margin-bottom: 20px">普通BUTTON</h2>
    <div class="rows">
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
    <h2 style="margin-bottom: 20px">朴素按钮</h2>
    <div class="rows">
      <Button plain>默认按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
      <Button type="info" plain>信息按钮</Button>
      <Button type="success" plain>成功按钮</Button>
      <Button type="warning" plain>警告按钮</Button>
      <Button type="danger" plain>危险按钮</Button>
    </div>
    <h2 class="row-title">圆角按钮</h2>
    <div class="row">
      <Button round>默认按钮</Button>
      <Button type="primary" round>主要按钮</Button>
      <Button type="info" round>信息按钮</Button>
      <Button type="success" plain round>成功按钮</Button>
      <Button type="warning" plain round>警告按钮</Button>
      <Button type="danger" plain round>危险按钮</Button>
    </div>
    <h2 class="row-title">禁用状态</h2>
    <div class="row">
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>主要按钮</Button>
      <Button type="info" disabled>信息按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="danger" disabled>危险按钮</Button>
    </div>
    <h2 class="row-title">等待状态</h2>
    <div class="row">
      <Button loading>默认按钮</Button>
      <Button type="primary" loading>主要按钮</Button>
      <Button type="info" loading>信息按钮</Button>
      <Button type="success" loading round>成功按钮</Button>
      <Button type="warning" loading round>警告按钮</Button>
      <Button type="danger" loading round>危险按钮</Button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "@/components/Button/index.vue";
onMounted(() => {});
</script>
<style scoped lang='scss'>
.rows,.row {
  padding: 0 50px;
  display: flex;
  gap: 30px;
}
h2 {
  margin: 10px 0;
}
</style>