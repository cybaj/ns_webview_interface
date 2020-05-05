import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { WebView } from "tns-core-modules/ui/web-view";
import { webViewInterfaceDemoVM } from "./main-view-model";
var webViewInterfaceModule = require('nativescript-webview-interface');
var oLangWebViewInterface;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().
    */
    page.bindingContext = webViewInterfaceDemoVM;
    setupWebViewInterface(page) 
}

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
}

export function webViewLoaded(args: EventData) {
    const webView = <WebView>args.object;
}

/**
 * Initializes webViewInterface for communication between webview and android/ios
 */
function setupWebViewInterface(page: Page){
    console.log('webView: ', webView)
    console.log('nativeView: ', webView.nativeView)
    var webView = page.getViewById('webView');
    oLangWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView);
}
