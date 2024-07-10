import { ViewContainerRef } from '@angular/core';
import { Application } from './Application';
import { Validators } from '@angular/forms';

export class ApplicationPSOCancelation extends Application {
  constructor() {
    super();
  }

  async render(viewContainerRef: ViewContainerRef): Promise<void> {
    viewContainerRef.clear();
    const component = await import(
      '../components/PSO/cancelation/cancelation.component'
    ).then((m) => m.CancelationComponent);
    viewContainerRef.createComponent(component);
  }

  form(): {} {
    return {
      expediente: ['', [Validators.required, Validators.min(0)]],
      condicion: ['', [Validators.required]],
    };
  }
}
