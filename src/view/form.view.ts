export class ViewForm {

  public inputName: HTMLInputElement;
  public inputSurname: HTMLInputElement;
  public inputEmail: HTMLInputElement;
  public radioCountry: HTMLInputElement;
  public inputPostalCode: HTMLInputElement;
  public inputLandline: HTMLInputElement;
  public inputMobilePhone: HTMLInputElement;
  public allForm: HTMLElement;
  public button: HTMLButtonElement;
  public radioButton: HTMLInputElement;

  constructor(private view: Document) {
    this.init();
  }

  private init = () => {
    this.CachingForm();
  };

  private CachingForm() {
    this.getInputName();
    this.getInputSurname();
    this.getInputEmail();
    this.getInputEmail();
    this.getInputPostalCode();
    this.getInputLandline();
    this.getInputMobilePhone();
    this.getForm();
    this.getButton();
    this.getRadioButton();
  }

  private getInputName = () =>
    this.inputName = this.view.getElementById("name") as HTMLInputElement;

  private getInputSurname = () =>
    (this.inputSurname = this.view.getElementById("surname") as HTMLInputElement);

  private getInputEmail = () =>
    (this.inputEmail = this.view.getElementById("email") as HTMLInputElement);

  private getInputPostalCode = () =>
    (this.inputPostalCode = this.view.getElementById("postalCode") as HTMLInputElement);

  private getInputLandline = () =>
    (this.inputLandline = this.view.getElementById("landline") as HTMLInputElement);

  private getInputMobilePhone = () =>
    (this.inputMobilePhone = this.view.getElementById("phoneNumber") as HTMLInputElement);

  private getForm = () =>
    (this.allForm = this.view.getElementById("form") as HTMLInputElement);

  private getButton = () => (this.button = this.view.getElementById("button") as HTMLButtonElement);

  private getRadioButton = () =>
    (this.radioButton = this.view.getElementById("countryValue") as HTMLInputElement);


  public changeColorgreen = (target:string) =>
    this.view.getElementById(target).className= "form-control is-valid"

  public changeColorRed = (target:string) =>
    this.view.getElementById(target).className= "form-control is-invalid";

  


}
