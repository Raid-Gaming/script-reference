<template>
  <div class="banner">
    <div class="banner__shapes">
      <div class="banner__shape" />
      <div class="banner__shape" />
      <div class="banner__shape" />
      <div class="banner__shape" />
      <div class="banner__shape" />
      <div class="banner__shape" />
      <div class="banner__shape" />
      <div class="banner__shape" />
      <div class="banner__shape" />
      <div class="banner__shape" />
    </div>
    <h1 class="banner__title">{{ $t('global.appTitle') }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/globals.scss';

.banner {
  position: relative;
  background: $color-primary;
  background: linear-gradient(to left, $color-primary-active, $color-primary);
  height: 350px;
}

.banner__title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 36px;
  font-weight: normal;
  font-family: $font-secondary;
  color: $color-primary-contrast;
  text-align: center;
  min-width: 300px;
}

.banner__shapes {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.banner__shape {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: flow-up 25s linear infinite;
  bottom: -150px;
}

.banner__shape:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.banner__shape:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.banner__shape:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.banner__shape:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.banner__shape:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.banner__shape:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.banner__shape:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.banner__shape:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.banner__shape:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.banner__shape:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes flow-up {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

@media screen and (max-width: 767px) {
  .banner {
    height: 200px;
  }
}
</style>
