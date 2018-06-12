import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  ToastController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { NgForm } from "@angular/forms";
import { User } from "../../providers/auth/user";
import { AuthService } from "../../providers/auth/auth-service";
import { HomePage } from "../home/home";
import { SignupPage } from "../signup/signup";
import { ResetpasswordPage } from "../resetpassword/resetpassword";

@IonicPage()
@Component({
  selector: "page-signin",
  templateUrl: "signin.html"
})
export class SigninPage {
  user: User = new User();
  @ViewChild("form") form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  resetPassword() {
    this.navCtrl.push(ResetpasswordPage);
  }

  loginFacebook() {
    let alert = this.alertCtrl.create({
      title: "Ooops!",
      message:
        "Ainda estamos trabalhando para implementar o login com o Facebook.",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "OK",
          handler: () => {
            console.log("Buy clicked");
          }
        }
      ]
    });
    alert.present();
    /* let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});
    toast.setMessage('Login com o Facebook ainda não implementado.');
    toast.present(); */
  }

  signIn() {
    if (this.form.form.valid) {
      let loading = this.loadingCtrl.create({

        showBackdrop: true,
        content: `Fazendo login...`,
        duration: 5000
      });
      loading.present();

      this.authService
        .signIn(this.user)
        .then(() => {
          loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          loading.dismiss();
          let toast = this.toastCtrl.create({
            duration: 3000,
            position: "bottom"
          });

          if (error.code == "auth/invalid-email") {
            toast.setMessage("Thrown if the email address is not valid.");
          }

          if (error.code == "auth/user-disabled") {
            toast.setMessage(
              "Thrown if the user corresponding to the given email has been disabled."
            );
          }

          if (error.code == "auth/user-not-found") {
            toast.setMessage(
              "Thrown if there is no user corresponding to the given email."
            );
          }

          if (error.code == "auth/wrong-password") {
            toast.setMessage(
              "Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set."
            );
          }

          toast.present();
        });
    }
  }
}
