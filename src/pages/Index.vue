<template>
  <q-page class="flex flex-center column bg-grey-5">
    <div id="app">
      <q-input v-model="barcodeValue" outlined />
      <barcode v-bind:value="barcodeValue" format="ean13" fontOptions="bold">
        <strong class="text-red">Bunday barcode muvjud emas!</strong>
      </barcode>
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

  data() {
    return {
      barcodeValue: "4780040670048"
    };
  }
};
</script>
