import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Input, OnInit, QueryList,ViewChildren } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem } from 'src/app/core/models/menu.model';

@Component({
  selector: 'div[navbar-submenu]',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.css'],
  imports: [NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIf, AngularSvgIconModule],
})
export class NavbarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem[]>{};
  @ViewChildren('submenuRef') submenuRefs!: QueryList<ElementRef<HTMLUListElement>>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.submenuRefs.changes.subscribe(() => {
      this.submenuRefs.forEach((submenuRef) => {
        if (submenuRef?.nativeElement) {
          const submenu = submenuRef.nativeElement.getBoundingClientRect();
          const bounding = document.body.getBoundingClientRect();

          if (submenu.right > bounding.right) {
            const childrenElement = submenuRef.nativeElement.parentNode as HTMLElement;
            if (childrenElement) {
              childrenElement.style.left = '-100%';
            }
          }
        }
      });
    });
  }
}
