import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, LoadingController, AlertController } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginProvider } from 'src/app/providers/login-provider';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';
import { AlertProvider } from 'src/app/providers/alert-provider';
import { LoadingProvider } from 'src/app/providers/loading-provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
  ],
  declarations: [
    LoginPage, 
    ErrorMessageComponent
  ],
  providers: [
    LoginProvider,
    LoadingProvider,
    AlertProvider
  ]
})
export class LoginPageModule {}
