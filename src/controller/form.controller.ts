
import {RegexService} from '../services/regex.service'
import {ViewForm} from '../view/form.view'
import { fromEvent, Observable,Observer } from 'rxjs';
import { skip, map } from 'rxjs/operators';

export class FormController{
        constructor(private formView: ViewForm, private regexService: RegexService){


         this.checkInputName();
        }


      private checkInputName = () => {
            
            const imputName = this.formView.inputName
        
            const name$ = fromEvent(imputName, 'input').pipe(
                skip(3),
                map(e  => (e.target as HTMLInputElement).value))
            
            this.subscribers(name$);

        } 

        private subscribers=(observer)=>{
            observer.subscribe(char => this.validateName(char))
        }

        private validateName(name: string){
            
             this.regexService.validateName(name) ? this.changeColorgreen() : this.changeColorreed();
         }

          changeColorgreen = () => this.formView.inputName.className = 'form-control is-valid';
          
          changeColorreed = () => this.formView.inputName.className = 'form-control is-invalid';



       /* public CachingForm = (): void => {
            const form: HTMLElement =  this.view.getElementById('name') as HTMLElement;
            const name$ = fromEvent(form, 'input').pipe(
               skip(3),
               map(e  => (e.target as HTMLInputElement).value))
            
               
   
            function validateName(name: string){
                   const regex:RegExp =  /^[a-zA-Z ]+$/; 
           
                    regex.test(name) ? changeColorgreen() : changeColorreed();
                }
               
             const prueba= "form-control is-valid"   
   
            function changeColorgreen(){ form.className = 'form-control is-valid'}
            function changeColorreed(){ form.className = 'form-control is-invalid'}
   
            
   
            const subcription = name$.subscribe(char => validateName(char))
       }*/
   


}