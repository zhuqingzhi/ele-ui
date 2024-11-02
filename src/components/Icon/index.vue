<template>
  <!-- project description is here-->
  <font-awesome-icon :icon="props.icon" :spine-pluse="props.spin-pulse"/>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import iconProps from "./props";
const props = defineProps(iconProps);
console.log('ddd',props.icon)
</script>
<style scoped lang='scss'>
</style>