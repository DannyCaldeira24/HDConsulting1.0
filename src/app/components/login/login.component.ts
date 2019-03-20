import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ValidationService } from '../../services/validation.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public message: string;
  public hidePass;
  public form: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private formBuilder: FormBuilder) { }

  resetForm() {
    this.form = this.formBuilder.group({
      email: [
        '',
        [Validators.required, ValidationService.emailValidator]
      ],
      password: [
        '',
        [Validators.required, ValidationService.passwordValidator]
      ]
    });
  }

  ngOnInit() {
    this.hidePass = true;
    this.resetForm();
  }

  showPass() {
    this.hidePass = !this.hidePass;
  }

  hide(){
    $('#login').modal('hide');
  }

  onSubmit(form: any) {
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      html: '<div class = "animated fadeIn fa-child-ss" style="color:#fed136"><i class="fas fa-spinner fa-spin fa-2x"></i></div>',
      allowOutsideClick: false
    })
    console.log(form);
    if (form.valid) {
      try {
        this._userService.login(form.value).subscribe(
          response => {
            if (response['user'] && response['token']) {
              localStorage.setItem('token', JSON.stringify(response['token']));
              localStorage.setItem('session', JSON.stringify(response['user']));
              Swal.close();
              $('#login').modal('hide');
              this._router.navigate(['/']);
            } else {
              console.log(response);
              this.message = response['message'];
              Swal.close();
              Swal.fire(
                'Ups',
                this.message,
                'warning'
              )
            }
          },
          error => {
            this.message = "Ha ocurrido un error inesperado. Intente nuevamente";
            Swal.close();
            Swal.fire(
              'Ups',
              this.message,
              'warning'
            )
            console.log(<any>error);
          }
        );
      } catch (e) {
        console.log(e);
      }
    }else{
      this.message = "Datos invalidos";
      Swal.close();
      Swal.fire(
        'Ups',
        this.message,
        'warning'
      )
    }
  }

}
