import { fromEvent, combineLatest } from 'rxjs';
import { map, skip, tap } from 'rxjs/operators';


export class viewForm{

    constructor(private view: Document){
        this.init();
        
    }

    private init = () => {
        this.CachingForm()
    }


    public CachingForm = (): void => {
         const form: HTMLElement =  this.view.getElementById('name') as HTMLElement;
         const name$ = fromEvent(form, 'input').pipe(
            skip(3),
            map(e  => (e.target as HTMLInputElement).value))
            
            
         function validateName(name: string){
             
                var regex:RegExp =  /^[a-zA-Z ]+$/; 
        
                 regex.test(name) : changeColorgreen() ? changeColorreed();
             }
                
         //validateName(name) : changeColorgreen() ? changeColorRed();

         function changeColorgreen(){ form.classList.add('is-valid')}
         function changeColorreed(){ form.classList.add('is-invalid')}

         

         const subcription = name$.subscribe(char => validateName(char))
    }


     


}