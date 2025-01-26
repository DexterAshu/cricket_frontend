import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService, AuthService } from '../../_services';
import { SharedModule } from '../../shared/shared/shared.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.alertService.error('Invalid form');
      return;
    }

    const body = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.authService.login(body).subscribe({
      next: (res: any) => {
        this.alertService.success(res.message);
        console.log(res);
      },
      error: (err: any) => {
        this.alertService.error(err?.error?.message);
      }
    })
  }
}
