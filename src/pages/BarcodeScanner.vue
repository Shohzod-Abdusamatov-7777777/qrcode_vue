<template>
  <q-page class="flex flex-center column bg-grey-4">
    <div class="relative-position">
      <div
        class="absolute-top flex flex-center full-height bg-grey-8"
        v-show="loader"
      >
        <q-spinner-ios style="font-size:2rem " class="text-red"></q-spinner-ios>
      </div>
      <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
        style="width:300px;"
      ></StreamBarcodeReader>
    </div>
    <h6>{{ data }}</h6>
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
      data: "",
      loader: true
    };
  },
  mounted() {
    this.loader = false;
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
