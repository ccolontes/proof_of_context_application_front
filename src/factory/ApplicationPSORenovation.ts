import { ViewContainerRef } from '@angular/core';
import { Application } from './Application';

export class ApplicationPSORenovation extends Application {
  constructor() {
    super();
  }

  async render(viewContainerRef: ViewContainerRef): Promise<void> {
    viewContainerRef.clear();
    const component = await import(
      '../components/PSO/renovation/renovation.component'
    ).then((m) => m.RenovationComponent);
    viewContainerRef.createComponent(component);
    return;
  }

  form(): {} {
    return {};
  }
}
