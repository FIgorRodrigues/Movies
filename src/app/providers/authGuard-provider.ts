import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthProvider } from './auth-provider';

@Injectable()

export class AuthGuard implements CanActivate {
    
    private _authRespose: boolean = false;

    constructor(
        private _router: Router,
        private _authProvider: AuthProvider
    ) {
        this._authProvider.isAuthenticated.subscribe(
            (authResponse: boolean) => this._authRespose = authResponse
        )    
    }

    canActivate(): boolean {
        return this._canLoad();
    }

    private _canLoad(): boolean {
        const isAuthenticated: boolean = this._authRespose;
        if(!isAuthenticated){
            this._router.navigate(['/login']);
            return false;
        }
        return isAuthenticated;
    }
}