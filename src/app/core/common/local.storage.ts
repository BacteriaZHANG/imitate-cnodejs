export class LocalStorage {

    public localStorage:any;

    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }

    public setItem(key:string, value:string):void {
        this.localStorage[key] = value;
    }

    public getItem(key:string):string {
        return this.localStorage[key] || false;
    }

    public setObject(key:string, value:any):void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public getObject(key:string):any {
        return JSON.parse(this.localStorage[key] || '{}');
    }

    public removeItem(key:string):any {
        this.localStorage.removeItem(key);
    }
}