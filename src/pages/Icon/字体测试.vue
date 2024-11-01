<template>
<!-- project description is here-->
  <div>
    字体展示
    <div style="margin-bottom: 20px;">
      <span class="front1">
        <p>----&#x4EA4;</p>&#x4EB8;
        <p>abcdefg</p>
      </span>
    </div>
    <div>
      <span class="front2">
        <p class="front2" style="font-family: customFront2;">----&#x4EB8;</p>
        <p>abcdefg</p>
      </span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive,  onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
onMounted(() => {

})

</script>
<style scoped lang='scss'>
.front1{
  font-family: 'customFront';
  margin-bottom: 10px;
}
.front2{
  font-family: 'customFront2';
}
</style>