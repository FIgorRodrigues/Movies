import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoadingProvider {

    private _load = null;
    public _isLoading: boolean = false;

    constructor(private _loadingCtrl: LoadingController) { }

    async showLoad(message?: string) {
        if(this._isLoading)
            return;
        this._load = await this._loadingCtrl.create(
            this._loadingSetting(message));
        this._isLoading = true;
        return await this._load.present();
    }

    async hideLoad() {
        if(!this._isLoading)
            return;
        this._isLoading = false;
        return await this._load.dismiss();
    }

    private _loadingSetting(message?: string): Object {
        let messageDefault: string = 'Aguarde um momento...';
        return {
            spinner: "circular",
            message: message ? message : messageDefault,
            translucent: true
        }
    }

}