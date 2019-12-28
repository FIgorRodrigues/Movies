import { Injectable } from '@angular/core';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

@Injectable()
export class NormalizeDateProvider {

    constructor() {}

    getFullYears(date: string) {
        return new Date(date).toLocaleString('pt-BR', { year: 'numeric' });
    }

    getMonthMoreYear(date: string) {
        const newDate = new Date(date)
            .toLocaleString('pt-BR', { month: 'long', year: 'numeric' })
            .split(" ");
        return newDate[0] + ', ' + newDate[2];

    }
}