<template>
  <q-page class="flex flex-center column bg-grey-4">
    <div style="height:200px;width:200px;border:2px solid red">
      <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
      ></StreamBarcodeReader>
      <h6>{{data}}</h6>
    </div>
  </q-page>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
export default {
  name: "BarcodeScanner",
  components: {
    StreamBarcodeReader
  },
  data() {
    return {
      data: ""
    };
  },
  methods: {
    onDecode(data) {
      this.data = data;
      console.log(data);
    },
    onLoaded() {
      console.log("loading");
    }
  }
};
</script>

<style></style>
