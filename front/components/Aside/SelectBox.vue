<!-- 左侧项组件-->

<template>
  <div :class="[selectBox, {active: box.isActive, activeMenu: box.activeMenu} ]" @click.stop="click" :id="box.id">
    <div class="left">
      <div :class="['radio-kgt', {iconActive: box.isActive}, {iconActiveMenu: box.activeMenu}]">
        <i :class="box.icon"/>
      </div>
      {{box.label}}
    </div>
    <div v-if="box.close" class="closeIcon radio-kgt" @click.stop="closeHost(box.time)">
      <i class="el-icon-close"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBox',
  props: {
    box: Object
  },
  data: () => {
    return {
      selectBox: 'selectBox'
    }
  },
  methods: {
    click: function (event) {
      if (this.$props.box.type !== 'menu') {
        // 不是菜单项目才设置 isActive 属性
        this.$props.box.isActive = !this.$props.box.isActive
        // 加载当前host页的数据
        this.$store.commit('hostView/restoreCurrentHost', this.box.time)
      } else { // 点击host菜单项
        this.$props.box.activeMenu = true
      }
      // 更新激活项的显示状态
      this.$emit('active', this.$props.box.time)
      // 跳转到当前host的详情页
      this.$router.push({ name: this.box.router })
    },
    closeHost(time) {
      // 删除左侧host栏目项
      this.$store.commit('host/closeHost', time)
      // 删除右侧host栏目项数据
      this.$store.commit('hostView/closeHost', time)
      // 选出删除后呈现的下一host, 返回给父组件解决
      this.$emit('removeHost')
    }
  }
}
</script>

<style lang="less" scoped>
  .selectBox {
    &:hover {
      background-color: #4f6d8c;
      cursor: pointer;
      color: #fff;
      // color: #00de7e;
      .left > div {
        border-color: #fff;
      }
    }
    font-size: 14px;
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      user-select: none;
      .iconActive {
        background-color: #152435;
      }
      .iconActiveMenu {
      }
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      div {
        height: 25px;
        width: 25px;
        margin: 0 10px 0 0;
        display: flex;
        justify-content: center;
        background-color: #33404f;
        align-items: center;
      }
      > i{
        font-size: 14px;
        height: 14px;
      }
    }
    .closeIcon:hover {
      background-color: #334460;
    }
    .closeIcon {
      height: 25px;
      width: 25px;
      > i {
        font-size: 14px;
        height: 14px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .active {
    background-color: #4f6d8c;
    color: #00de7e !important;
  }
  .activeMenu {
    background-color: #4f6d8c;
    color: #fff !important;
  }
</style>
