import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: "login",
    loadComponent: () =>
      import(
        "./login/login.component"
        ).then((m) => m.LoginComponent),
  },
  {
    path: "activate-account",
    loadComponent: () =>
      import(
        "./activate-account/activate-account.component"
        ).then((m) => m.ActivateAccountComponent),
  },
];
