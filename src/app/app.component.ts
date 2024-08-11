import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RunOutsideReducedMotion } from "./utils/motion-guard";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @RunOutsideReducedMotion
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.["animation"];
  }
}
