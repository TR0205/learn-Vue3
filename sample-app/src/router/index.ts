import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "../views/Top.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Top",
    component: Top,
    meta: {
      title: "Topページ",
      description: "Topページの説明"
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "Aboutページ",
      description: "Aboutページの説明"
    }
  },
  {
    path: "/author",
    name: "Author",
    component: () =>
      import(
        "../views/Author.vue"
      ),
    meta: {
      title: "Authorページ",
      description: "Authorページの説明"
    }
  },
  {
    path: "/production-note",
    name: "Production Note",
    component: () =>
      import(
        "../views/ProductionNote.vue"
      ),
    meta: {
      title: "ProductionNoteページ",
      description: "ProductionNoteページの説明"
    }
  },
  {
    path: "/faq",
    name: "Q&A",
    component: () =>
      import(
        "../views/Faq.vue"
      ),
    meta: {
      title: "Faqページ",
      description: "Faqページの説明"
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 画面遷移時にスクロール位置をトップへ戻す
  scrollBehavior() {
    return { left: 0, top:0 }
  }
});

// メニューにはTOPへのリンクが無いためsliceで排除
export const menuRoutes = routes.slice(1, routes.length);
