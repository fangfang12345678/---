<template>
  <div id="app">
    <div class="box">
      <div class="sidebar">
        <div class="sidebar-logo-container">
          <img
            src="http://www-wms-java.itheima.net/img/logo@2x.2c4f2c76.png"
            alt=""
          />
        </div>
        <div class="el-scrollbar">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1" @click="$router.push('workbench')">
              <template slot="title">
                <i class="el-icon-set-up"></i>
                <span>工作台</span>
              </template>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-set-up"></i>
                <span>基础信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  index="1-1"
                  @click="$router.push('warehouseManagement')"
                  >仓库管理</el-menu-item
                >
                <el-menu-item
                  index="1-2"
                  @click="$router.push('reservoirManagement')"
                  >库区管理</el-menu-item
                >
                <el-menu-item
                  index="1-3"
                  @click="$router.push('locationManagement')"
                  >库位管理</el-menu-item
                >
                <el-menu-item index="1-1">库位视图</el-menu-item>
                <el-menu-item index="1-2">货品管理</el-menu-item>
                <el-menu-item index="1-3">货品类型管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-message"></i>
                <span>商务管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">货主管理</el-menu-item>
                <el-menu-item index="1-2">承运商管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-folder"></i>
                <span>库内管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">盘点单</el-menu-item>
                <el-menu-item index="1-2">盘点任务</el-menu-item>
                <el-menu-item index="1-3">库存损益</el-menu-item>
                <el-menu-item index="1-1">实时库存</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="iconfont icon-rukuguanli"></i>
                <span>入库管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">入库单</el-menu-item>
                <el-menu-item index="1-2">收货任务</el-menu-item>
                <el-menu-item index="1-3">上架任务</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="iconfont icon-chukuguanli"></i>
                <span>出库管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">出库单</el-menu-item>
                <el-menu-item index="1-2">拣货任务</el-menu-item>
                <el-menu-item index="1-3">交接任务</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
        <div class="sidebar-tools">
          <img class="avatar" src="@/assets/avatar.png" alt="" />
          <span>admin</span>
          <span>|</span>
          <img class="minImg" src="@/assets/load.png" alt="" />
        </div>
      </div>
      <el-header class="navbar">
        <button>工作台</button>
        <el-dropdown class="right-icon">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关闭左侧</el-dropdown-item>
            <el-dropdown-item>关闭右侧</el-dropdown-item>
            <el-dropdown-item>关闭其他</el-dropdown-item>
            <el-dropdown-item disabled>关闭全部</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main"><router-view></router-view> </el-main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="less">
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;

  .sidebar {
    transition: width 0.28s;
    width: 226px !important;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background: #fff;
    // background: gold;
    box-shadow: 2px 0 6px 0 rgb(144 142 142 / 13%);
    .sidebar-logo-container {
      position: relative;
      width: 100%;
      height: 100px;
      line-height: 100px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 140px;
        height: 64px;
      }
    }
    .el-scrollbar {
      padding-left: 30px;

      width: 243px;
      height: 442px;
      // background: pink;
      div {
        width: 206px;
        height: 46px;
        font-size: 16px;
      }
    }
    .sidebar-tools {
      position: fixed;
      bottom: 0;
      width: 226px;
      height: 62px;
      font-size: 30px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      // margin-left: 40px;

      .avatar {
        width: 32px;
        height: 32px;
        font-size: 32px;
        // margin-left: 40px;
      }
      span {
        font-size: 14px;
      }
      /deep/.minImg {
        width: 21px;
        height: 21px;
        cursor: pointer;
        color: #b5abab;
        // background-color: rgb(35, 27, 27);
      }
    }
  }

  .navbar {
    // margin-left:226px;
    position: relative;
    padding-left: 260px;
    padding-top: unset;
    height: 64px;
    width: 100%;
    background: #f4f1f1;
    // background: pink;
    margin-top: -10px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    button {
      width: 69px;
      height: 36px;
      margin-top: 14px;
      margin-left: -10px;
      background: #fff;
      // cursor: pointer;
      border-radius: 6px;
      border: 1px solid #ccc;
      color: #ffb200;
    }
    .right-icon {
      position: absolute;
      right: 10px;
      top: 13px;
      width: 36px;
      height: 36px;
      background: #fff;
      border-radius: 6px;

      .el-dropdown-link {
        i {
          margin-top: 10px;
          margin-left: 10px;
        }
      }
    }
  }
  /deep/.main {
    padding-left: 240px;
    width: 100%;
    height: 1603px;
    background-color: #fdfafa;
    .mainA {
      width: 100%;
      .leftA {
        width: 894px;
        height: 440px;
        .banner {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 148px;
          border-radius: 10px;
          background: linear-gradient(270deg, #ffc771, #ffa634);
          // display: flex;
          .banner-left {
            width: 166px;
            height: 148px;
            img {
              width: 100%;
              // background-image: url("~@/assets/avatar");
            }
            .content {
              position: absolute;
              left: 290px;
              top: 114px;
              .avatar {
                width: 62px;
                height: 62px;
              }
            }
          }
          .banner-right {
            position: relative;
            width: 426px;
            height: 148px;
            // background: pink;
            img {
              width: 100%;
            }
          }
          .saying {
            display: flex;
            justify-content: center;
            position: absolute;
            top: 84px;
            right: 770px;
            h4 {
              font-weight: 400;
              font-size: 18px;
              width: 252px;
              height: 24px;
              color: #fff;
            }
            span {
              margin-top: 70px;
              margin-left: -20px;
              font-size: 16px;
              color: #fff;
            }
            button {
              position: absolute;
              top: 15px;
              right: -366px;
              width: 147px;
              height: 40px;
              background: #f8f4f4;
              border: unset;
              border-radius: 6px;
              opacity: 0.79;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-around;
            }
          }
        }
        .agentInformation {
          width: 94%;
          height: 282px;
          background: #fff;
          box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
          border-radius: 12px;
          padding: 24px;
          margin-top: 24px;
          .card {
            .cardFirst {
              margin-top: 10px;
              .grn {
                font-size: 16px;
                margin-bottom: 80px;
                i {
                  margin-right: 30px;

                  padding: 6px;
                  font-size: 30px;
                  background: rgb(0, 118, 244);
                  color: #fff;
                  // border-radius: 10px;
                  // width: 49px;
                  // height: 49px;
                  // background: #0076ff;
                  border-radius: 12px;
                  // display: flex;
                  // align-items: center;
                  // justify-content: space-around;
                }
                .icon-chukudan {
                  background: #ffa634;
                }
                .icon-navicon-pdd {
                  background: #ff7100;
                }
              }

              .newAdd {
                font-size: 36px;
                span {
                  font-size: 16px;
                  margin: 0 6px;
                }
                .spacious {
                  font-size: 36px;
                  color: rgb(0, 118, 244);
                }
              }
            }
          }
        }
      }
      .rightA {
        position: absolute;
        top: 70px;
        right: 30px;
        width: 261px;
        height: 441px;
        background: #fff;
        box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
        border-radius: 12px;
        padding: 30px;
        .note {
          font-size: 16px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #332929;
          line-height: 22px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f5efee;
        }
        .forIn {
          padding-bottom: 10px;
          font-size: 14px;
          border-bottom: 1px solid #f5efee;
          margin: 20px 0;
          .second {
            display: block;
            font-size: 12px;
            margin: 10px 0;
          }
        }
      }
    }
    .testNav {
      padding-top: 20px;
      margin-top: 80px;
      width: 100%;
      height: 188px;
      background: #fff;

      .test {
        // margin-top: 100px;
        font-size: 16px;
        font-weight: 700;
        color: #332929;
        margin: 0 0 20px 40px;
      }
      .layout {
        // display: flex;
        // justify-content: space-between;
        .el-col {
          width: 16.66667%;
          margin-left: 36px;

          padding: unset;
          .cardFirst {
            background: #fbf7f7;
            .grn {
              display: flex;
              align-items: center;
              justify-content: space-around;
              .icon-kache,
              .icon-shangjia,
              .icon-jianhuo,
              .icon-navicon-pdd,
              .icon-jjrw {
                font-size: 20px;
                width: 50px;
                height: 50px;
                color: #fff;
                background: #0076ff;
                border-radius: 25px;
                display: flex;
                align-items: center;
                justify-content: space-around;
              }
              .icon-shangjia {
                background: rgb(82, 212, 243);
              }
              .icon-jianhuo {
                background: rgb(255, 113, 0);
              }
              .icon-navicon-pdd {
                background: #0076ff;
              }
              .icon-jjrw {
                background: rgb(255, 178, 0);
              }
            }
          }
        }
      }
    }
    .barchart {
      margin-top: 20px;
      height: 500px;
      background: #fff;
      box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
      border-radius: 12px;
      padding: 25px;
    }
    .piechart {
      margin-top: 20px;
      display: flex;
      .left {
        width: 30%;
        height: 354px;
        background: #fff;
        box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
        border-radius: 12px;
        padding: 25px;
        margin-right: 30px;
      }
      .right {
        width: 70%;
        height: 354px;
        background: #fff;
        box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
        border-radius: 12px;
        padding: 25px;
      }
    }
  }
}
</style>
