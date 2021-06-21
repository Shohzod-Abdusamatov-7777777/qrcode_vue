<template>
  <q-page class="flex flex-center column bg-grey-5">
    <q-input v-model="text" outlined />
    <img :src="qrData" alt="" />
    <video src=""></video>
  </q-page>
</template>

<script>
export default {
  name: "QrCode",
  computed: {
    qrData() {
      return (
        `https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H|5&chl=` +
        this.text
      );
    }
  },
  data() {
    return {
      text: "shohzod"
    };
  }
};
</script>

<style></style>
