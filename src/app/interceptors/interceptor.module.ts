import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { SerializerResponseInterceptor } from './serializer-response-interceptor';
import { NormalizeDateProvider } from '../providers/normalize-date-provider';

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: SerializerResponseInterceptor, multi: true },
        NormalizeDateProvider
    ]
})

export class InterceptorsModule { }
