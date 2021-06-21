<template>
  <q-layout view="hHr lpR fFr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="qr_code_scanner"
          aria-label="Menu"
          side="right"
          @click="rightDrawerOpen = !rightDrawerOpen"
          >
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer
      v-model="rightDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1 row justify-center items-center"
      side="right"
      width="500"
    >
      <div style="width:300px">
        <q-img src="/icons/scanner.png" />
      </div>
      <div>
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
          style="width:300px;"
        ></StreamBarcodeReader>
        <h6 class="text-center q-mt-md">{{ scannerDate }} data</h6>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

const linksData = [
  {
    title: "Barcode",
    caption: "Barcode",
    icon: "school",
    link: "/"
  },
  {
    title: "QrCode",
    caption: "QRCode",
    icon: "code",
    link: "/qrcode"
  },
  {
    title: "Barcode Scaner",
    caption: "Barcode Scaner",
    icon: "code",
    link: "/barcode-scaner"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink, StreamBarcodeReader },
  data() {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      essentialLinks: linksData,
      scannerDate: ""
    };
  },
  methods: {
    onDecode(data) {
      this.scannerDate = data;
      console.log(data);
    },
    onLoaded() {
      console.log("loading");
    }
  }
};
</script>
