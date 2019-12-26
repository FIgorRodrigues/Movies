import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class AuthProvider {

    private _validEmail: string = "igor.oliveira@gmail.com";
    private _validPassword: string = "igor1234";
    
    private _authenticated = new BehaviorSubject<boolean>(false);
    isAuthenticated = this._authenticated.asObservable();

    constructor() {}

    authLogin(email: string, password: string): boolean {
        const responseAuth = this._compareDataLogin(email, password);
        this._authenticated.next(responseAuth);
        return responseAuth;
    }

    logout() {
        this._authenticated.next(false);
        return this.isAuthenticated;
    }

    private _compareDataLogin(email: string, password: string): boolean {
        const emailIsValid: boolean = email == this._validEmail;
        const passwordIsValid: boolean = password == this._validPassword;
        return emailIsValid && passwordIsValid ? true: false;
    }

}