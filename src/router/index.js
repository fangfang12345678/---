import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/workbench",
  // redirect:},
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout"),
    redirect: "/workbench",
    children: [
      {
        path: "workbench",
        name: "workbench",
        component: () => import("@/views/workbench"),
      },
      {
        path: "warehouseManagement",
        name: "warehouseManagement",
        component: () => import("@/views/warehouseManagement"),
      },
      {
        path: "toolPage",
        name: "toolPage",
        component: () => import("@/components/toolPage"),
      },
      {
        path: "reservoirManagement",
        name: "reservoirManagement",
        component: () => import("@/views/reservoirManagement"),
      },
      {
        path: "locationManagement",
        name: "locationManagement",
        component: () => import("@/views/locationManagement"),
      },
      {
        path: "locationView",
        name: "locationView",
        component: () => import("@/views/locationView"),
      },
      {
        path: "locationTool",
        name: "locationTool",
        component: () => import("@/components/locationTool"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
