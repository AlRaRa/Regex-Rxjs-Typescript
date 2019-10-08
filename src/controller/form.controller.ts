import { RegexpService } from "../services/regexp.service";
import { ViewForm } from "../view/form.view";
import { fromEvent, Observable } from "rxjs";
import { skip, map, tap, withLatestFrom } from "rxjs/operators";
import NAMEINPUTS from '../constant/form.constant' 
export class FormController {

    private countrySelected: string;

    constructor(private formView: ViewForm, private regexpService: RegexpService) {

    }

    private checkInputName$ = fromEvent(this.formView.inputName, "input").pipe(
        skip(2),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateName(e)))
    ;

    private checkInputSurname$: Observable<string> = fromEvent(this.formView.inputSurname, "input").pipe(
        skip(2),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateSurname(e))
    );

    private checkInputEmail$: Observable<string> = fromEvent(this.formView.inputEmail, "input").pipe(
        skip(2),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateEmail(e))

    );

    private checkRadioCountry$   = fromEvent(this.formView.radioButton, "click").pipe(
        map(event => (event.target as HTMLInputElement).value),
        map(e => this.countrySelected = e),

    ).subscribe();

    private checkInputPostalCode$: Observable<string> = fromEvent(this.formView.inputPostalCode, "input").pipe(
        skip(2),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validatePostalCode(e, this.countrySelected) ),

    );

  /*  private checkLandLine$: Observable<string> = fromEvent(this.formView.inputLandline, "input").pipe(
        skip(2),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateLandline(e, this.countrySelected)),

    );*/

    private checkMobilePhone$: Observable<string> = fromEvent(this.formView.inputMobilePhone, "input").pipe(
        skip(2),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validatePhoneNumber(e, this.countrySelected)),

    );


    private validateName(name: string): void {
        this.regexpService.validateName(name)
            ? this.formView.changeColorgreen(NAMEINPUTS.NAME)
            : this.formView.changeColorRed(NAMEINPUTS.NAME);
    };

   private validateSurname(surname: string): void {
        this.regexpService.validateSurname(surname)
            ? this.formView.changeColorgreen(NAMEINPUTS.SURNAME)
            : this.formView.changeColorRed(NAMEINPUTS.SURNAME);
    };


    private validateEmail(email: string): void {
        this.regexpService.validateEmail(email)
            ? this.formView.changeColorgreen(NAMEINPUTS.EMAIL)
            : this.formView.changeColorRed(NAMEINPUTS.EMAIL);
    };

       private validatePostalCode(postalCode: string, country: string):void {
           this.regexpService.validatePostalCode(postalCode, country)
               ? this.formView.changeColorgreen(NAMEINPUTS.POSTALCODE)
               : this.formView.changeColorRed(NAMEINPUTS.POSTALCODE);
       };
       
       private validateLandline(landLine: string, country:string):void {
           this.regexpService.validateLandline(landLine,country)
               ? this.formView.changeColorgreen(NAMEINPUTS.LANDLINE)
               : this.formView.changeColorRed(NAMEINPUTS.LANDLINE);
       };

       private validatePhoneNumber(phoneNumber:string, country:string):void{
           this.regexpService.validatePhoneNumber(phoneNumber, country)
           ? this.formView.changeColorgreen(NAMEINPUTS.PHONENUMBER)
           :  this.formView.changeColorRed(NAMEINPUTS.PHONENUMBER);
       }
   
       
       
   
   



    private submitButtons$ = fromEvent(this.formView.button, "click");


    private isFormValid$ = this.submitButtons$
        .pipe(
            withLatestFrom(
                this.checkInputName$,
                this.checkInputSurname$,
                this.checkInputEmail$,
                this.checkMobilePhone$,
                this.checkInputPostalCode$
            

            ),

            map(data => {
                const [click, ...formData] = data;
                return formData;
            }),

        )
        .subscribe(console.log);

    
    
}
