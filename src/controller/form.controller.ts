import { RegexService } from "../services/regex.service";
import { ViewForm } from "../view/form.view";
import { fromEvent, Observable, Observer } from "rxjs";
import { skip, map, combineLatest, tap, withLatestFrom } from "rxjs/operators";

export class FormController {

    private countrySelected: string;

    constructor(private formView: ViewForm, private regexService: RegexService) {

    }

    private checkInputName$ = fromEvent(this.formView.inputName, "input").pipe(
        skip(2),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateName(e)))
    ;
/*
    private checkInputSurname$: Observable<string> = fromEvent(this.formView.inputSurname, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateSurname(e))
    );

    private checkInputEmail$: Observable<string> = fromEvent(this.formView.inputEmail, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateEmail(e))

    );

    private checkRadioCountry$ = fromEvent(this.formView.radioButton, "click").pipe(
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.countrySelected = e),

    ).subscribe();

    private checkInputPostalCode$: Observable<string> = fromEvent(this.formView.inputPostalCode, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.countrySelected = e),

    );

    private checkLandLine$: Observable<string> = fromEvent(this.formView.inputLandline, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.countrySelected = e),

    );

    private checkMobilePhone$: Observable<string> = fromEvent(this.formView.inputMobilePhone, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.countrySelected = e),

    );

*/
    private validateName(name: string): void {
        this.regexService.validateName(name)
            ? this.formView.changeColorgreen("name")
            : this.formView.changeColorreed();
    };

 /*   private validateSurname(surname: string): void {
        this.regexService.validateSurname(surname)
            ? this.formView.changeColorSurnameGreen()
            : this.formView.changeColorSurnameRed();
    };
/*

    private validateEmail(email: string): void {
        this.regexService.validateEmail(email)
            ? this.formView.changeColorEmailGreen()
            : this.formView.changeColorEmailRed();
    };

       private validatePostalCode(postalCode: string, country: string):void {
           this.regexService.validatePostalCode(postalCode, this.countrySelected)
               ? this.formView.changeColorPostalCodeGreen()
               : this.formView.changeColorEmailRed();
       };
       
       private validateLandline(landLine: string):void {
           this.regexService.validateLandline(landLine, this.countrySelected)
               ? this.formView.changeColorLandlineGreen()
               : this.formView.changeColorLandlineRed();
       };

       private validatePhoneNumber(phoneNumber:string, country:string){
           this.regexService.validatePhoneNumber(phoneNumber, this.countrySelected)
           ? this.formView.
       }
   
       private validatePhone(email: string):void {
           this.regexService.validateEmail(email)
               ? this.formView.changeColorEmailGreen()
               : this.formView.changeColorEmailRed();
       };

       
   
   */



    private submitButtons$ = fromEvent(this.formView.button, "click");


    private isFormValid$ = this.submitButtons$
        .pipe(
            withLatestFrom(
                this.checkInputName$,
               /* this.checkInputSurname$,
                this.checkInputEmail$,*/
                /*this.checkLandLine$,
                this.checkMobilePhone$,
                this.checkInputPostalCode$*/

            ),

            map(data => {
                const [click, ...formData] = data;
                return formData;
            }),

        )
        .subscribe(console.log);

    
    
}
