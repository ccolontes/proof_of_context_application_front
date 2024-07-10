import { ViewContainerRef } from '@angular/core';

export abstract class Application {
  abstract render(viewContainerRef: ViewContainerRef): void;
  abstract form(): {};
}
