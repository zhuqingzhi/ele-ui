<template>
  <!-- project description is here-->
  <button
    class="ele-button"
    :class="{
      [`ele-button-${type}`]: type,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled || loading,
    }"
    :disabled="disabled || loading"
    @click="clickBtn"
  >
  <Icon icon="spinner" spin-pulse v-if="loading"/>
    <slot>默认按钮</slot>
  </button>
</template>

<script setup lang='ts'>
import Icon from '../Icon/index.vue'
defineOptions({
  name:'ele-button'
})
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const { type, plain, round, disabled, loading } = props;
const clickBtn = () => {
  console.log('clicked')
}
</script>
<style scoped lang='scss'>
button {
  border: none;
}
.ele-button {
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;
  transition: all 0.1s ease-in-out;
}
.ele-button {
  --ele-button-color: var(--my-color-default);
  --ele-button-border-color: var(--my-color-default-light-3);
  --ele-button-background-color: var(--my-color-default);
  --ele-button-hover-border-color: var(--my-color-default);
  --ele-button-font-color: var(--my-color-default);
  --ele-button-border-radius:var(--my-border-radius);
}
.ele-button {
  border: 1px solid;
  background-color: var(--ele-button-background-color);
  border-color: var(--ele-button-border-color);
  color: var(--ele-button-font-color);
  &:hover {
    border-color: var(--ele-button-hover-border-color);
  }
  &.is-plain {
    color: var(--ele-button-font-color);
    background-color: var(--ele-button-background-color);
  }
  &.is-round{
    border-radius: var(--ele-button-border-radius);
  }
  &.is-disabled{
    cursor: not-allowed;
  }
}

@each $type in primary, info, success, warning, danger {
  .ele-button-#{$type} {
    --ele-button-border-color: var(--my-color-#{$type}-light-3);
    --ele-button-background-color: var(--my-color-#{$type});
    --ele-button-hover-border-color: var(--my-color-#{$type});
    --ele-button-color: var(--my-color-default);
    --ele-button-font-color: var(--my-color-font-color-default);
    &.is-disabled{
      --ele-button-border-color: var(--my-color-#{$type}-light-7);
    --ele-button-background-color: var(--my-color-#{$type}-light-7);
    --ele-button-hover-border-color: var(--my-color-#{$type}-light-7);
    --ele-button-color: var(--my-color-default);
    --ele-button-font-color: var(--my-color-font-color-default);
    }
  }
  .ele-button-#{$type}.is-plain {
    --ele-button-font-color: var(--my-color-font-color-#{$type});
    --ele-button-background-color: var(--my-color-#{$type}-light-9);
  }
}
</style>