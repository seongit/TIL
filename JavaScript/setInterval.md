  mounted() {
    interval = setInterval(() => {
      this.getData(true);
    }, 300000);
  },

  beforeDestroy() {
    console.log("clearInterval ===> infraStatusInfo ");
    clearInterval(interval); // 페이지 이동 시 타이머 중지
  },

  Ref.
  https://www.youtube.com/watch?v=4eiqU19ckNw