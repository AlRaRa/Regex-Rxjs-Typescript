import { RegexService } from "../services/regex.service";
import { ViewForm } from "../view/form.view";
import { fromEvent, Observable, Observer } from "rxjs";
import { skip, map, combineLatest, tap, withLatestFrom } from "rxjs/operators";

export class FormController {

    private countrySelected: String;

    constructor(private formView: ViewForm, private regexService: RegexService) {

    }

    private checkInputName$: Observable<string> = fromEvent(this.formView.inputName, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateName(e))
    );

    private checkInputSurname$:Observable<string> = fromEvent(
        this.formView.inputSurname,
        "input"
    ).pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateSurname(e))
    );

    private checkInputEmail$:Observable<string> = fromEvent(this.formView.inputEmail, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.validateEmail(e))
    );

    private checkRadioCountry$ = fromEvent(this.formView.radioButton, "click").pipe(
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.countrySelected = e),

    ).subscribe();

    private checkInputPostalCode$:Observable<string> = fromEvent(this.formView.inputPostalCode, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.countrySelected = e),

    );

    private checkLandLine$:Observable<string> = fromEvent(this.formView.inputLandline, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.countrySelected = e),

    );

    private checkMobilePhone$:Observable<string> = fromEvent(this.formView.inputMobilePhone, "input").pipe(
        skip(3),
        map(event => (event.target as HTMLInputElement).value),
        tap(e => this.countrySelected = e),

    );



    private validateSurname(surname: string) {
        this.regexService.validateSurname(surname)
            ? this.changeColorSurnamegreen()
            : this.changeColorSurnamered();
    }
    private changeColorSurnamegreen = () =>
        (this.formView.inputSurname.className = "form-control is-valid");

    private changeColorSurnamered = () =>
        (this.formView.inputSurname.className = "form-control is-invalid");

    private validateEmail(email: string) {
        this.regexService.validateEmail(email)
            ? this.changeColorEmailgreen()
            : this.changeColorEmailreed();
    }
    private changeColorEmailgreen = () =>
        (this.formView.inputEmail.className = "form-control is-valid");

    private changeColorEmailreed = () =>
        (this.formView.inputEmail.className = "form-control is-invalid");

    private validateName(name: string) {
        this.regexService.validateName(name)
            ? this.changeColorgreen()
            : this.changeColorreed();
    }

    private changeColorgreen = () =>
        (this.formView.inputName.className = "form-control is-valid");

    private changeColorreed = () =>
        (this.formView.inputName.className = "form-control is-invalid");

    private submitButtons$ = fromEvent(this.formView.button, "click");


    private isFormValid$ = this.submitButtons$
        .pipe(
            withLatestFrom(
                this.checkInputName$,
                this.checkInputSurname$,
                this.checkInputEmail$,
                this.checkLandLine$,
                this.checkMobilePhone$,
                this.checkInputPostalCode$

            ),

            map(data => {
                const [click, ...formData] = data;
                return formData;
            }),

        )
        .subscribe(console.log);

    /*private validateInputName = () =>{
            const validateName$= this.checkInputName();
            validateName$.map
     }
    */
}
