import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/layout/main-layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("projects", "routes/projects.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
