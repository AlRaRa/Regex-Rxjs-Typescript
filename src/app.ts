
import {ViewForm} from './view/form.view'
import {FormController} from './controller/form.controller'
import {RegexpService} from './services/regexp.service'


const view: Document = window.document;


const formController: FormController = new FormController( new ViewForm(view), new RegexpService());


