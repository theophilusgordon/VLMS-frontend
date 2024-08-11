import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./shared/home/home.component").then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: "visit",
    loadChildren: () =>
      import("./visit/visit.routes").then((m) => m.visitRoutes),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.routes").then((m) => m.authRoutes),
  },
  {
    path: "**",
    loadComponent: () =>
      import("./shared/page-not-found/page-not-found.component").then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];
