import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }

    onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}

/**
 * View Model for the webViewInterfaceDemo.
 */
class WebViewInterfaceDemoVM extends Observable{
    
    /**
     * Holds language to add
     */
    private _language: string;
    
    /**
     * Holds currently selected language in webView.
     */
    private _selectedLanguage: string;
    
    /**
     * Default languages to load in dropdown.
     */
    lstLanguages: string[] = ['English', 'Sanskrit', 'French'];
    
    constructor(){
        super();
    }
    
    get language(){
        return this._language;
    }
    
    set language(language: string){
        this._language = language;
        this.notifyPropertyChange('language', language);
    }
    
    get selectedLanguage(){
        return this._selectedLanguage;
    }
    
    set selectedLanguage(language: string){
        this._selectedLanguage = language;
        this.notifyPropertyChange('selectedLanguage', language);    
    }
}

export var webViewInterfaceDemoVM = new WebViewInterfaceDemoVM();
