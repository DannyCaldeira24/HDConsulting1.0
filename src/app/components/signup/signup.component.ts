import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ValidationService } from '../../services/validation.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
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
      ],
      name: [
        '',
        [Validators.required, Validators.minLength]
      ],
      surname: [
        '',
        [Validators.required, Validators.minLength]
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

  hide() {
    $('#signup').modal('hide');
  }

  onSubmit(form: any) {
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      html: '<div class = "animated fadeIn fa-child-ss" style="color:#fed136"><i class="fas fa-spinner fa-spin fa-2x"></i></div>',
      allowOutsideClick: false
    });
    if (form.valid) {
      try{
        this._userService.register(form.value).subscribe(
          response => {
            Swal.close();
            if (response['user']) {
              this.resetForm();
              Swal.fire({
                title: 'Excelente',
                text: "Se ha registrado correctamente",
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
              }).then(() => {
                this.hide();
                $('#login').modal('show');
              })
            } else {
              this.message = response['message'];
              Swal.fire(
                'Ups',
                this.message,
                'warning'
              )
              console.log(this.message);
            }
          },
          error => {
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
