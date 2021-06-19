<template>
  <q-page class="flex flex-center column bg-grey-5">
    <h5 class="q-mb-none text-capitalize">nqulay.uz</h5>
    <img :src="qrData" alt="" />
  </q-page>
</template>

<script>
export default {
  name: "QrCode",
  computed: {
    qrData() {
      return (
        `https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H|5&chl=` +
        "nqulay.uz"
      );
    }
  }
};
</script>

<style></style>
