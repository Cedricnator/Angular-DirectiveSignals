import { Component, signal } from '@angular/core';

interface MenuItem {
  title:  string;
  router: string;
}

@Component({
  selector: 'signal-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', router: 'counter'},
    { title: 'Usuario', router: 'user'},
    { title: 'mutaciones', router: 'properties'}
  ]);
}
