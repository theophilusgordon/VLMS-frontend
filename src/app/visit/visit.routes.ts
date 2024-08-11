import { Routes } from "@angular/router";

export const visitRoutes: Routes = [
  {
    path: "checkin",
    loadComponent: () =>
      import(
        "./checkin/checkin.component"
        ).then((m) => m.CheckinComponent),
  },
  {
    path: "checkout",
    loadComponent: () =>
      import(
        "./checkout/checkout.component"
        ).then((m) => m.CheckoutComponent),
  },
];
