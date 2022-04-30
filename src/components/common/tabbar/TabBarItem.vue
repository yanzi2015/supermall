<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div :class="{active: isActive}"><slot name="item-text">我的</slot></div> -->
    <div :style="activeStyle"><slot name="item-text">我的</slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        if(this.$route.path.indexOf(this.link) == -1) {
          this.$router.replace(this.link) //不同item跳转link不同
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    font-size: 12px;
    text-align: center;
  }
  .tab-bar-item img {
    margin-top: 5px;
    margin-bottom: 2px;
    width: 22px;
    height: 22px;
    vertical-align: middle; /* 去掉默认3px */
  }
</style>
