import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  createAccount() {
    if (this.form.form.valid) {
      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});

      this.authService.createUser(this.user)
        .then((user: any) => {
          user.sendEmailVerification();

          toast.setMessage('Usuário criado com sucesso.');
          toast.present();

          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          if (error.code == 'auth/email-already-in-use') {
            toast.setMessage('Thrown if there already exists an account with the given email address.');
          }

          if (error.code == 'auth/invalid-email') {
            toast.setMessage('Thrown if the email address is not valid.');
          }

          if (error.code == 'auth/operation-not-allowed') {
            toast.setMessage('Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.');
          }

          if (error.code == 'auth/weak-password') {
            toast.setMessage('Thrown if the password is not strong enough.');
          }

          toast.present();
        });
    }
  }

  signIn() {
    this.navCtrl.setRoot(SigninPage);
  }

}
