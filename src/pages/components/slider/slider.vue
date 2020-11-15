<template>
  <div
    class="slider"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <slot v-if="!sliderItems.length" name="loading">
      <div class="slider-loading">
        <div class="ball-pulse">
          <div />
          <div />
          <div />
        </div>
      </div>
    </slot>
    <div ref="touchArea" class="slider-items">
      <slot />
    </div>
    <div
      v-if="indicators"
      :class="`slider-indicators slider-indicators-center`"
      @click.stop
    >
      <span
        v-for="i in sliderItems.length"
        :key="i"
        :class="{ 'slider-indicator-active': currentIndex === i - 1 }"
        class="slider-indicator-icon"
        @click="handleIndicator(i - currentIndex - 1)"
      />
    </div>
    <template v-if="controlBtn">
      <div class="slider-btn slider-btn-left" :aria-label="prevBtnLabel" @click.stop="prev">
        <Icon type="ios-arrow-back" />
      </div>
      <div class="slider-btn slider-btn-right" :aria-label="nextBtnLabel" @click.stop="next">
        <Icon type="ios-arrow-forward" />
      </div>
    </template>
  </div>
</template>

<script>
import { throttle, debounce } from './utils'
import AlloyFinger from './alloyfinger'

export default {
  name: 'Slider',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    touch: {
      type: Boolean,
      default: true,
    },
    animation: {
      type: String,
      default: 'normal',
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    stopOnHover: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    speed: {
      type: Number,
      default: 500,
    },
    indicators: {
      type: [String, Boolean],
      default: 'center',
    },
    controlBtn: {
      type: Boolean,
      default: true,
    },
    beforePrevious: {
      type: Function,
      default: () => true,
    },
    beforeNext: {
      type: Function,
      default: () => true,
    },
    prevBtnLabel: {
      type: String,
      default: 'Previous slide',
    },
    nextBtnLabel: {
      type: String,
      default: 'Next slide',
    },
  },
  data() {
    return {
      sliderItems: [],
      currentIndex: 0,
      timer: 0,
      af: null,
      isStopped: false,
    }
  },

  watch: {
    // FIXME: debounce
    value(current) {
      const step = current - this.currentIndex

      if (!step || current < 0 || current > this.sliderItems.length - 1) return

      this.handleIndicator(step)
    },
  },

  created() {
    this.init = throttle(this.init, 100)
    this.move = debounce(this.move, this.speed - 200)
    this.$on('slider:init', this.init)
  },
  mounted() {
    this.init()
    this.initTouchArea()
  },
  // init when keep-alive
  activated() {
    this.init()
    this.initTouchArea()
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
    this.af && this.af.destroy()
  },
  deactivated() {
    this.timer && clearInterval(this.timer)
    this.af && this.af.destroy()
    this.af = null
  },

  methods: {
    init() {
      this.sliderItems = this.$children.filter(child => {
        return child.$options.name === 'SliderItem'
      })

      if (this.sliderItems[this.value]) {
        this.currentIndex = this.value
      }

      const currentItem = this.sliderItems[this.currentIndex]

      if (!currentItem) return
      currentItem.init()
      this.auto()
    },
    initTouchArea() {
      if (this.af || !this.touch) return

      const touchArea = this.$refs.touchArea

      this.af = new AlloyFinger(touchArea, {
        swipe: e => {
          e.direction === 'Left' ? this.next() : this.prev()
        },
      })
    },
    auto() {
      if (!this.autoplay || this.isStopped) return

      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.move(1)
      }, this.interval)
    },
    move(step) {
      if (!step || !this.canMove()) return

      // direction: left: true, right: false
      const direction = step > 0
      const nextIndex = this.getNextIndex(step)
      const currentItem = this.sliderItems[this.currentIndex]
      const nextItem = this.sliderItems[nextIndex]

      currentItem.hide(direction)
      nextItem.show(direction)
      this.currentIndex = nextIndex
      this.$emit('change', nextIndex)
    },
    prev() {
      if (!this.beforePrevious()) return

      this.handleControlBtn('previous')
    },
    next() {
      if (!this.beforeNext()) return

      this.handleControlBtn('next')
    },
    handleIndicator(step) {
      if (!step || !this.canMove()) return

      this.move(step)
      this.auto()
    },
    /**
     * @param direction 'previous' | 'next'
     */
    handleControlBtn(direction) {
      if (!this.canMove()) return

      const step = direction === 'next' ? 1 : -1
      const nextIndex = this.getNextIndex(step)

      this.$emit(direction, {
        original: this.currentIndex,
        next: nextIndex,
      })
      this.move(step)
      this.auto()
    },
    getNextIndex(step) {
      const slidersLen = this.sliderItems.length
      if (!this.sliderItems[this.currentIndex]) {
        this.currentIndex = slidersLen - 1
      }
      return (this.currentIndex + step + slidersLen) % slidersLen
    },
    canMove() {
      return this.sliderItems.length > 1
    },
    handleMouseenter() {
      if (this.autoplay && this.stopOnHover) {
        this.isStopped = true
        if (this.timer) clearInterval(this.timer)
      }
    },
    handleMouseleave() {
      if (this.autoplay && this.stopOnHover) {
        this.isStopped = false
        this.auto()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.slider{
  position :relative;
  height: 660px;
  .slider-items{
    width :100%;
    height :100%;
    }
  .slider-btn{
    position: absolute;
    top: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index :999;
    height :50px;
    width: 50px;
    border: none;
    outline: none;
    border-radius: 50%;
    background: rgba(0,0,0,0.05);
    
  }
  .slider-btn:hover{
    background :#246FEA;
  }
  .slider-btn:hover .ivu-icon{
    color: #fff;
  }

     
  .slider-btn-left{  
    left :0;
    }
  .slider-btn-right{
    right :0;
    }
  .slider-indicators-center {
    left: 50%;
    transform: translateX(-50%);
}
  .slider-indicators{
    position: absolute;
    bottom: -100px;
    z-index :999;
    .slider-center{
      left :50%;
      transform :translateX(-50%);}
    .slider-left{
      left :6%;}
    .slider-right{
      right: 6%;}
  .slider-indicator-icon{
    display: inline-block;
    width :8px;
    height :8px;
    margin: 0 10px;
    cursor: pointer;
    background-color :rgba( 0, 0, 0, .2);}
  .slider-indicator-active{
    width: 30px;
    background: #246FEA;
    }

  .slider-loading{
    position: absolute;
    top: 0;
    left: 0;
    z-index :99;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .1);
    display :flex;
    justify-content :center;
    align-items :center;
  }

}
  
.ball-pulse{
  & > div:nth-child(1){
    animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);}
  & > div:nth-child(2){
    animation :scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);}
  & > div:nth-child(3){
    animation :scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)};
  & > div{
    background-color :#fff;
    width :15px;
    height: 15px;
    border-radius:100%;
    margin: 2px;
    // animation-fill-mode both;
    display :inline-block;
    }
}
} 
@keyframes scale{
  0%{
    transform:scale(1);
    opacity: 1;
    }
  45%{
    transform :scale(0.1);
    opacity: 0.7;
    }
  80%{
    transform :scale(1);
    opacity: 1;
  }
    
}
</style>
