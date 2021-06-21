<template>
  <q-page class="flex flex-center column bg-grey-3">
    <div id="app">
      <q-input v-model="barcodeValue" outlined :hint="barcodeValue.length" />
      <div class="q-gutter-md q-my-md">
        <q-select
          outlined
          v-model="format"
          :options="options"
          label="barcodeFormat"
          emit-value
        />
      </div>
      <barcode
        v-bind:value="barcodeValue"
        :format="format"
        fontOptions="normal"
      >
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
      barcodeValue: "4780040670048",
      format: "ean13",
      options: [
        {
          label: "Code39",
          value: "code39"
        },
        {
          label: "ean13",
          value: "ean13"
        },
        {
          label: "code128",
          value: "code128"
        },
        {
          label: "ean8",
          value: "ean8"
        },
        {
          label: "pharmacode",
          value: "pharmacode"
        },
        {
          label: "upc",
          value: "upc"
        }
      ]
    };
  }
};
</script>
