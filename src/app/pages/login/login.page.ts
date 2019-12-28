import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginProvider } from 'src/app/providers/login-provider';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { LoadingProvider } from 'src/app/providers/loading-provider';
import { AlertProvider } from 'src/app/providers/alert-provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errosMessagesLoginForm: Object;
   
  constructor(
    private _loginProvider: LoginProvider,
    private _navCtrl: NavController,
    private _loadProvider: LoadingProvider,
    private _alertProvider: AlertProvider
  ) { }

  ngOnInit() {
    this.loginForm = this._loginProvider.createLoginForm();
    this.errosMessagesLoginForm = this._loginProvider.createErrorsMessages();
  }

  async onSubmitLogin() {
    await this._loadProvider.showLoad();
    const { email, password } = this.loginForm.value;
    const authenticated: boolean = this._loginProvider
      .authLogin(email, password);
    await this._loadProvider.hideLoad().then(
      () => {
        authenticated ? 
        this._navCtrl.navigateRoot('/home'):
        this._showAlertErroLogin();
      },
      () => this._showAlertErroLogin("Não foi possível realizar login, por favor tente novamente.")
    );
  }

  private async _showAlertErroLogin(messageError ?: string ) {
    let defaultMessageAlert: string = "Email ou senha incorreto, verifique seus dados e tente novamente.";
    if(messageError)
      defaultMessageAlert = messageError;
    const alert = await this._alertProvider.createAlertController(
      "Login",
      defaultMessageAlert
    );
    alert.present();
  }

}
