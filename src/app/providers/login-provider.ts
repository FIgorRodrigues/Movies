import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from './auth-provider';

@Injectable()
export class LoginProvider {
    
    constructor(
        private _formBuilder: FormBuilder, 
        private _authProvider: AuthProvider) {}
    
    createLoginForm(): FormGroup {
        return this._formBuilder.group({
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1}/)
            ])],
            password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])]
        });
    }

    createErrorsMessages(): Object {
        return {
            'email': [
                { type: 'required', message: 'E-mail é obrigatório.' },
                { type: 'pattern', message: 'Digite um email válido.' }
            ],
            'password': [
                { type: 'required', message: 'Senha é obrigatória.' },
                { type: 'minlength', message: 'Senha deve conter no mínimo 6 caracteres.' }
            ],
        };
    }

    authLogin(email: string, password: string): boolean {
        return this._authProvider.authLogin(email, password);
    }

}
