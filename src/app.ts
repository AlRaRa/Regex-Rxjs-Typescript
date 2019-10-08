
import {ViewForm} from './view/form.view'
import {FormController} from './controller/form.controller'
import {RegexService} from './services/regex.service'


const view: Document = window.document;


const formController: FormController = new FormController( new ViewForm(view), new RegexService());



/*const rafa= validatePostalCode("3333", "USA")
console.log(rafa)
/*

const Viewform = new viewForm(view);

console.log(Viewform.inputLandline)*/