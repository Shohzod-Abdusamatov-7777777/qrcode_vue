<template>
  <q-page class="flex flex-center column bg-grey-4">
    <h5>scaner</h5>
    <div style="height:200px;width:200px;border:2px solid red">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
  </q-page>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  name: "Scaner",
  components: {
    QrcodeStream
  },
  data() {
    return {
      data: ""
    };
  },
  methods: {
    onDecode(data) {
      this.data = data;
      console.log(data)
      return {
        ...toRefs(state),
        onDecode
      };
    }
  }
};
</script>

<style></style>
