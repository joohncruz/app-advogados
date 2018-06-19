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
import { UserProvider } from '../../providers/user/user';

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
    public loadingCtrl: LoadingController,
    private userProvider: UserProvider
  ) { }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  resetPassword() {
    this.navCtrl.push(ResetpasswordPage);
  }

  loginFacebook() {
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
    toast.setMessage('Ainda estamos trabalhando para implementar o login com o Facebook.');
    toast.present();
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
        .then((authUser) => {
          console.log("signIn authUser", authUser);
          console.log(authUser.key);
          this.userProvider.saveUserLocalStorage({ key: authUser.key, uid: authUser.uid, email: authUser.email, displayName: authUser.displayName });
          loading.dismiss();
          this.navCtrl.setRoot(HomePage).then(() => {
            let toast = this.toastCtrl.create({
              duration: 3000,
              position: "bottom"
            });
            toast.setMessage(`Olá ${authUser.displayName}.`);
            toast.present();
          });
        })
        .catch((error: any) => {
          loading.dismiss();
          let toast = this.toastCtrl.create({
            duration: 3000,
            position: "bottom"
          });

          if (error.code == "auth/invalid-email") {
            toast.setMessage("O endereço de e-mail não é válido.");
          }

          if (error.code == "auth/user-disabled") {
            toast.setMessage(
              "O endereço de email pode ter sido desativado."
            );
          }

          if (error.code == "auth/user-not-found") {
            toast.setMessage(
              "Email não está cadastrado no sistema."
            );
          }

          if (error.code == "auth/wrong-password") {
            toast.setMessage(
              "Endereço de email ou senha inválidos."
            );
          }

          toast.present();
        });
    } else {
      let toast = this.toastCtrl.create({
        duration: 3000,
        position: "bottom"
      });
      toast.setMessage("Preencha corretamente todos os dados antes de continuar!");
      toast.present();
    }
  }

  saveUserLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}
