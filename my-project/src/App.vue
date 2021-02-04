<template>
  <div id="app">
    <importTest>
      <div slot="left" class="leftRow"></div>
      <div slot="center">辅导满意度</div>
    </importTest>
    <!-- <router-view/> -->
    <div class="title">
      <p>
        {{ content }}
      </p>
    </div>
    <div class="imgContainer">
      <!-- 这里暂时用图片代替 -->
      <img :src="logoURL1" alt="标签名" />
    </div>
    <div class="quesContainer">
      <p>
        1、在2021寒假班上课过程中，您认为班主任老师在以下服务环节中表现<span
          >【单选】</span
        >
      </p>
      <ul class="optionsContainer">
        <li class="optionA">
          <div class="ansContainer" v-for="(item, index) in List" :key="index">
            <div class="isSelectContainer" @click="isChecked(index)">
              <img v-if="isActive == index" :src="logoURL3" alt="选中按钮" />
              <img v-else :src="logoURL2" alt="未选中按钮" />
              <div class="ansTextContainer">{{ item.answer }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 问题2  -->
    <div class="quesContainer">
      <p>
        2、在2021年寒假班上课过程中，您认为班主任老师在以下服务要素中<span
          >【最多...</span
        >
      </p>
      <ul class="optionsContainer">
        <li class="optionA">
          <div
            class="ansContainer"
            v-for="(item, index) in ListTwo"
            :key="index"
          >
            <div class="isSelectContainer" @click="isCheckedMulti(index)">
              <img
                v-if="ListTwo[index].checked === true"
                :src="logoURL3"
                alt="wei选中按钮"
              />
              <img v-else :src="logoURL2" alt="选中按钮" />
              <div class="ansTextContainer">{{ item.answer }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--问题3  -->
    <div id="quesThreeContainer">
      <p>3、针对2021年寒假的课程，您对班主任老师的整体服务感受如何,满分10？</p>
      <div class="satisContain">
        <div class="satisfyTip satisfy">非常不满意</div>
        <div class="satisfyDis satisfy">非常满意</div>
      </div>
      <div class="outContain">
        <div
          class="satiScoreContain"
          v-for="(item, index) in scoreList"
          :key="index"
        >
          <div
            class="satiScore"
            style="float: left; text-align: center; display: table"
            @click="scoreChecked(index)"
            :class="{ active: isScored, disActive: disScored }"
          >
            <span class="scoreSpan" :class="{ font_active: isScored }">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 问题4 -->
    <div id="quesFourContainer">
      <p>
        4、针对寒假班主任的日常工作，是否还有其他意见与建议(您的意见对我们"<span
          >【开...</span
        >
      </p>
      <div class="textContainer">
        <!-- <input type="text" value="输入文本" /> -->
        <textarea name="" id="" cols="30" rows="5">输入文本</textarea>
      </div>
    </div>
    <button class="btn"><p>提交</p></button>
  </div>
</template>

<script>
//这里导入组件
import importTest from "./components/importTest";
export default {
  name: "App",
  // 这里注册组件,注册完成就可以在上面使用了
  components: {
    importTest,
  },
  data () {
    return {
      isActive: -1,
      counter: 2,
      // checked: true,
      isScored: false,
      disScored: false,
      logoURL1: require('./assets/img/标签名.png'),
      logoURL2: require('./assets/img/未选中.png'),
      logoURL3: require('./assets/img/选中.png'),
      content: "亲爱的用户，为了向您提供更好的服务，诚邀您对2021年寒假班（截止目前课程）的班主任老师做出评价，"
        + "您的意见对我们分厂重要。评价内容对班主任老师匿名，请放心填写。",
      scoreList: [1, 2, 3, 4, 5],
      List: [
        {
          checked: false,
          answer: "课前提醒：班主任老师能及时提醒学员到课&课前预习。",
        },
        {
          checked: false,
          answer: "班主任直播：班主任直播中，做到作业讲解，知识点复习。",
        },
        {
          checked: false,
          answer: "学习活动：班主任定期在朋友圈或班级群中分享学习方法。",
        },
        {
          checked: false,
          answer: "以上都没有",
        }],
      ListTwo: [
        {
          checked: false,
          answer: "及时响应：班主任老师能及时快速的响应学生/家长提出的问题。",
        },
        {
          checked: false,
          answer: "主动反馈：班主任老师会对学生的学习情况主动进行督促。",
        },
        {
          checked: false,
          answer: "有效解决：班主任老师对学生/家长提出的能够给到有效。",
        },
        {
          checked: false,
          answer: "以上都没有",
        }],
    };
  },
  methods: {
    // 单选函数
    isChecked (index) {
      this.isActive = index;
    },
    // 多选按钮函数
    isCheckedMulti (index) {
      this.ListTwo[index].checked = true;
      if (index === 3) {
        this.ListTwo[index - 3].checked = false;
        this.ListTwo[index - 2].checked = false;
        this.ListTwo[index - 1].checked = false;
      } else {
        this.ListTwo[3].checked = false;
      }
    },
    // 评分按钮
    scoreChecked (index) {
      this.isScored = true;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin-top: 0px;
  /* border: 0.11px solid black; */
  background-color: #ffffff;
}
li {
  margin: 12px 0 0 0;
  position: relative;
  left: -27px;
  list-style: none;
}
.leftRow {
  width: 9px;
  height: 9px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(-135deg);
  background: white;
  text-align: center;
  position: relative;
  left: 13px;
  top: 15px;
}
.title {
  width: 347px;
  height: 54px;
  margin: 0 auto 17px auto;
}

.title p {
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 18px;
  text-align: left;
}
/* 先用图片代替 */
img {
  width: 150px;
  height: 31px;
  float: left;
}
.imgContainer {
  width: 150px;
  height: 31px;
  float: left;
  /* width: 150px;
  height: 31px;
  background: linear-gradient(
    210deg,
    rgba(224, 39, 39, 1) 0%,
    rgba(255, 74, 74, 1) 100%,
    rgba(255, 74, 74, 1) 100%
  ); */
}

.quesContainer {
  width: 347px;
  height: 279px;
  background: rgba(247, 247, 248, 1);
  /* 这里浮动设置有问题，没有理解很好 */
  float: left;
  position: relative;
  left: 6px;
  border-radius: 10px;
  margin-top: 12px;
}

.quesContainer p {
  width: 319px;
  height: 48px;
  font-size: 17px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  margin: 16px 14px;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
  text-align: left;
}
.quesContainer span {
  opacity: 0.4;
}

.ansTextContainer {
  width: 293px;
  height: 42px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 21px;
  text-align: left;
  float: right;
  /* word-spacing: 0.3px; */
  letter-spacing: 0.3px;
  /* 这里设置不知道对不？ */
  position: relative;
  top: -17px;
  left: 5px;
}

.ans {
  width: 293px;
  height: 42px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 21px;
  text-align: left;
}

.ansContainer img {
  float: left;
  width: 16px;
  height: 16px;
  background: rgba(247, 247, 248, 1);
  border-radius: 10px;
}
#quesThreeContainer {
  width: 347px;
  height: 154px;
  background: rgba(247, 247, 248, 1);
  /* 这里浮动设置有问题，没有理解很好 */
  float: left;
  position: relative;
  left: 6px;
  border-radius: 10px;
  margin: 0px auto;
  margin-top: 10px;
}
#quesThreeContainer p {
  width: 319px;
  height: 48px;
  font-size: 17px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  margin: 16px 14px;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
  text-align: left;
}
.satisContain {
  width: 319px;
  height: 16px;
  margin: 0 auto;
}
.satisfy {
  width: 65px;
  height: 18px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 18px;
}
.satisfyTip {
  float: left;
}
.satisfyDis {
  float: right;
}

.satiScore {
  width: 32px;
  height: 32px;
  background: rgba(153, 153, 153, 0.1);
  margin: 2px auto;
  border-radius: 100px;
}
.active {
  background: rgba(224, 39, 39, 0.1);
}

.scoreSpan {
  width: 8px;
  height: 13px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 13px;
  /* 垂直居中元素使用两次这个table-cell了 */
  display: table-cell;
  vertical-align: middle;
}
.font_active {
  /* 下面是红色 */
  color: rgba(224, 32, 32, 1);
}
.satiScoreContain {
  float: left;
  padding: 8px 17.5px;
}
/* float脱离文档流，要想位置不发生改变，包含框也要float布局 */
.outContain {
  float: left;
}

#quesFourContainer {
  width: 347px;
  height: 198px;
  background: rgba(247, 247, 248, 1);
  /* 这里浮动设置有问题，没有理解很好 */
  float: left;
  position: relative;
  left: 6px;
  border-radius: 10px;
  margin: 12px auto;
}
#quesFourContainer p {
  width: 319px;
  height: 48px;
  font-size: 17px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  margin: 16px 14px 10px 14px;

  color: rgba(51, 51, 51, 1);
  line-height: 24px;
  text-align: left;
}
#quesFourContainer span {
  opacity: 0.4;
}
.textContainer {
  width: 319px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px solid white;
  position: relative;
  left: 14px;
}
textarea {
  width: 295px;
  height: 86px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 18px;
  margin-top: 12px;
  /* 去除默认样式 */
  border: 0;
  outline: none;
}
.btn {
  color: white;
  width: 288px;
  height: 40px;
  background: rgba(224, 39, 39, 1);
  border-radius: 23px;
  border: 0;
}
.btn p {
  width: 28px;
  height: 16px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
  margin: 0 auto;
}
</style>
