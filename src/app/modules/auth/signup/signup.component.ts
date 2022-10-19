import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenUtils } from 'src/app/core/utils/token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  signupForm!: UntypedFormGroup;
  isLoading = false;
  REDIRECT = environment.redirectTo

  constructor(
    private fb: UntypedFormBuilder, 
    protected router: Router,
    private route: ActivatedRoute, 
    private authService: AuthService,
    private tokenUtils: TokenUtils,
    private message: NzMessageService
    ) { 
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params['code']) {
        this.isLoading = true;
        const code_grant = params['code'];

        this.authService.getTokensWithCode(code_grant).subscribe({
          next: (response) => {
            localStorage.setItem("access_token", response.access_token)
            localStorage.setItem("id_token", response.id_token)
            localStorage.setItem("refresh_token", response.refresh_token)
            localStorage.setItem("expires_in", response.expires_in.toString())
            const data_token = this.tokenUtils.decodeToken(response.id_token)
            localStorage.setItem('email', data_token.email)
          },
          error: (error) => {
            this.isLoading = false;
            this.createBasicMessageError("Algo salio mal, verifique sus credenciales y vuelva a intentarlo")
            this.router.navigate(['/login'])
          },
          complete: () => {
            this.isLoading = false;
            this.router.navigate(['/dashboard'])
          }
        })
      }
    });
  }

  submitForm(): void {
    if(this.signupForm.controls[3].value != this.signupForm.controls[4].value){
      this.createBasicMessageError("¡La contraseña y su confirmacion no coinciden!")
      return
    }
    if (this.signupForm.valid) {
      this.isLoading = true;
      const email = this.signupForm.get('email')?.value
      const password = this.signupForm.get('password')?.value
      const name = this.signupForm.get('name')?.value
      const lastName = this.signupForm.get('lastName')?.value
      this.authService.signup(email, password, name, lastName).subscribe({
        next: (response) =>{
          localStorage.setItem("email_confirm", email)
        },
        error: () =>{
          this.isLoading = false;
          this.createBasicMessageError("Algo salio mal, no se pudo crear la cuenta, vuelva a intentarlo")
        }, 
        complete: () =>{
          this.createBasicMessageSuccess("Su cuenta fue creada con exito, confirmela para que pueda ingresar con normalidad")
          this.isLoading = false;
          this.router.navigate(['/confirm'])
        }
      })
    } else {
      Object.values(this.signupForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  registerWithGoogle(){
    this.signupForm.disable()
    window.location.href =`https://anisoft.auth.us-east-2.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=${this.REDIRECT}/login&response_type=CODE&client_id=7b35jv379536khq7iv8i06s3c4&scope=email openid phone profile`
  }

  createBasicMessageError(message: string): void {
    this.message.error(message, {
      nzDuration: 5000
    });
  }

  createBasicMessageSuccess(message: string): void {
    this.message.success(message, {
      nzDuration: 5000
    });
  }

}
