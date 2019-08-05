<template>
  <div>
    <h1>
      {{count}}
    </h1>
    <van-button
      size="small"
      round
      type="info"
      @click="add"
    > +
    </van-button>

    <van-button
      size="small"
      round
      type="info"
      @click="sub"
    > -
    </van-button>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    add() {
      this.$store.commit("SET_COUNT", ++this.count);
    },
    sub() {
      this.$store.commit("SET_COUNT", --this.count);
    },
    route() {
      wx.navigateTo({
        url: `/pages/index/main`
      });
    }
  }
};
</script>

<style lang="scss">
</style>
