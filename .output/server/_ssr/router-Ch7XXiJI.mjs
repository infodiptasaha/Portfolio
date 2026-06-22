import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts } from "../_libs/tanstack__react-router.mjs";
import { v as redirect } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as Analytics } from "../_libs/vercel__analytics.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
const Route$5 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dipta Saha | Salesforce Automation Developer" },
      {
        name: "description",
        content: "Experienced Salesforce Automation Developer specializing in Apex, Flow Builder, LWC, and CRM solutions. Building scalable enterprise automation systems."
      },
      {
        name: "keywords",
        content: "Salesforce Developer, Apex, Flow Builder, LWC, Lightning Web Components, Salesforce Admin, CRM, Process Automation"
      },
      { property: "og:title", content: "Dipta Saha | Salesforce Automation Developer" },
      {
        property: "og:description",
        content: "Expert in Salesforce automation, Apex development, and enterprise integrations."
      },
      { property: "og:type", content: "website" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Analytics, {})
    ] })
  ] });
}
const $$splitComponentImporter$4 = () => import("./resume-BTU5dmpx.mjs");
const Route$4 = createFileRoute("/resume")({
  beforeLoad: () => {
    throw redirect({
      to: "/"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./projects-BTU5dmpx.mjs");
const Route$3 = createFileRoute("/projects")({
  beforeLoad: () => {
    throw redirect({
      to: "/"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BTU5dmpx.mjs");
const Route$2 = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({
      to: "/"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-rdzXfRXR.mjs");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_slug-BTU5dmpx.mjs");
const Route = createFileRoute("/blog/$slug")({
  beforeLoad: () => {
    throw redirect({
      to: "/"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$4.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$5
});
const ProjectsRoute = Route$3.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ProjectsRoute,
  ResumeRoute,
  BlogSlugRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
