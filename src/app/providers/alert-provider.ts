import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertButton } from '@ionic/core';

@Injectable()
export class AlertProvider {
    
    constructor(private _alertCtrl: AlertController) {}

    async createAlertController(
        titleAlert: string,
        messageAlert: string,
        subTitleAlert?: string,
        actionButton?: FunctionStringCallback,
        cancelButton?: boolean,
        actionButtonCancel?: FunctionStringCallback,
        textActionButton?: string,
        textCancelButton?: string
    ) {

        if(!textActionButton) textActionButton = 'OK';
        if(!textCancelButton) textCancelButton = 'Cancelar';

        let arrayButtons: AlertButton[] = [];
            if(cancelButton)
                arrayButtons.push({text: textCancelButton, handler: actionButtonCancel});
        arrayButtons.push({text: textActionButton, handler: actionButton});
        
        return await this._alertCtrl.create({
                header: titleAlert,
                subHeader: subTitleAlert,
                message: messageAlert,
                cssClass: 'alertDanger',
                backdropDismiss: true,
                buttons: arrayButtons
        });
    }
}