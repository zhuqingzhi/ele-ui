<template>
<!-- project description is here-->
  <div @click="handleClick">
    <Icon :type="['fas', 'play']"/>
  </div>
</template>

<script setup lang='ts'>
import Icon from '@/components/Icon/index.vue'
const props = defineProps({
  theme: {
    type: String,
    default:'outline'
  },
  size: {
    type: String, 
    default:'24'
  },
  fill: {
    type: String,
    default:'#333'
  },

})
const emits=defineEmits(['click'])
const handleClick = () => {
  emits('click')
}
</script>
<style scoped lang='scss'>

</style>