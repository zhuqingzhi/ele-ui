<script setup>
const menus = [
  {
    label: "icon",
    route: "icon",
  },
  {
    label: "Button",
    route: "button",
  },
  {
    label: "Card",
    route: "card",
  },
  {
    label: "Dialog",
    route: "dialog",
  },
];
</script>

<template>
  <div class="title">ELEMENT_UI_PLUS</div>
  <div class="links">
    <router-link
    v-for="(menuItem, menuIndex) in menus"
    :key="menuIndex"
    :to="menuItem.route"
    >{{ menuItem.label }}</router-link
  >
  </div>

  <div class="content">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.title{
  text-align: center;
  margin: 10px;
}
.links{
  display: flex;
  justify-content: space-between;
  padding:0 30px;
}
.content{
  padding:20px;
}
</style>
