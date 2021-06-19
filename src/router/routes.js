const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/qrcode",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/QrCode.vue") }]
  },
  {
    path: "/scaner",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/QrCodeSCanner.vue") }]
  },
  {
    path: "/barcode-scaner",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/BarcodeSCanner.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
