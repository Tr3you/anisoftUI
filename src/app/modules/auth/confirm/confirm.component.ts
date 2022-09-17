import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent implements OnInit {
  
  confirmForm!: UntypedFormGroup;
  isLoading = false;

  constructor(
    private fb: UntypedFormBuilder, 
    protected router: Router, 
    private authService: AuthService,
    private message: NzMessageService
    ) { 
    this.confirmForm = this.fb.group({
      code: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('access_token') != null){
      this.router.navigate(['/home'])
    }
  }

  submitForm(): void {
    if (this.confirmForm.valid) {
      this.isLoading = true;
      const code = this.confirmForm.get('code')?.value
      const email = localStorage.getItem("email_confirm") as string
      this.authService.confirmAccount(code, email).subscribe({
        next: (response) => {
          
        },
        error: ()=>{
          this.isLoading = false;
          this.createBasicMessageError("Codigo invalido o cuenta ya confirmada")
        },
        complete: () => {
          this.createBasicMessageSuccess("Su cuenta se encuentra confirmada, ya puede ingresar con normalidad")
          this.router.navigate(['/login'])
        }
      })
    } else {
      Object.values(this.confirmForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

      if(this.confirmForm.controls[3].value != this.confirmForm.controls[4].value){

      }
    }
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
