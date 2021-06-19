<template>
  <q-page class="flex flex-center column bg-grey-5">
    <div id="app">
      <q-input v-model="barcodeValue" /><br />
      <barcode v-bind:value="barcodeValue" format="upc" fontOptions="bold">
        Show this if the rendering fails.
      </barcode>
      <br><br>
      <h6 class="q-ma-none">jsbarcode format upc</h6>
      <svg
        class="barcode"
        jsbarcode-format="upc"
        v-bind:jsbarcode-value="barcodeValue"
        jsbarcode-textmargin="0"
        jsbarcode-fontoptions="bold"
      ></svg>
    </div>
  </q-page>
</template>

<script>
import VueBarcode from "vue-barcode";
export default {
  name: "PageIndex",
  components: {
    barcode: VueBarcode
  },
  mounted() {
    JsBarcode(".barcode").init();
  },
  data() {
    return {
      barcodeValue: "123456789999"
    };
  }
};
</script>
