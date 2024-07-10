import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import ApplicationFactory, {
  Proccess,
  Procedure,
} from '../factory/ApplicationFactory';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApplicationFactory],
})
export class AppComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  title = 'proof_of_context';

  constructor(
    private readonly factory: ApplicationFactory,
    private readonly builder: FormBuilder,
  ) {}

  ngOnInit(): void {
    const application = this.factory.create(
      Proccess.PSO,
      Procedure.CANCELACION,
    );
    if (!application) return;
    application.render(this.container);
    const form = application.form();
    this.createFrom({ ...form });
  }

  createFrom(form: {}): FormGroup {
    return this.builder.group(form);
  }
}
