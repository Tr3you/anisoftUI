import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenUtils } from 'src/app/core/utils/token';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})


export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
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
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      remember: [true]
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
    if (this.loginForm.valid) {
      this.isLoading = true;
      const email = this.loginForm.get('email')?.value
      const password = this.loginForm.get('password')?.value
      this.authService.login(email, password).subscribe({
        next: (response) =>{
          if(response.message != undefined){
            console.log(response.message.exception)
            if(response.message.exception == "UserNotConfirmedException"){
              this.createBasicMessageError("Usuario no confirmado, confirme su cuenta para poder ingresar")
              localStorage.setItem("email_confirm", email)
              this.router.navigate(['/confirm'])
            }
            else{
              this.isLoading = false;
              this.createBasicMessageError("Algo salio mal, verifique sus credenciales y vuelva a intentarlo")
            }
          } else{
            localStorage.setItem("access_token", response.access_token)
            localStorage.setItem("id_token", response.id_token)
            localStorage.setItem("refresh_token", response.refresh_token)
            localStorage.setItem("expires_in", response.expires_in.toString())
            localStorage.setItem("email", response.email)
            this.router.navigate(['/dashbaord'])
          }
        },
        error: (error) =>{
          this.isLoading = false;
          this.createBasicMessageError("Algo salio mal, verifique sus credenciales y vuelva a intentarlo")
        }
      })
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  loginWithGoogle(){
    this.loginForm.disable()
    window.location.href =`https://anisoft.auth.us-east-2.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=${this.REDIRECT}/login&response_type=CODE&client_id=7b35jv379536khq7iv8i06s3c4&scope=email openid phone profile`
  }

  createBasicMessageError(message: string): void {
    this.message.error(message, {
      nzDuration: 5000
    });
  }

}
