import { Component } from '@angular/core';
import { LayoutComponent } from "./shared/ui/layout-component/layout-component";

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
