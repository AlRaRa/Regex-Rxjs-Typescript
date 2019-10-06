export class ViewForm {

    public inputName: HTMLElement;
    public inputSurname: HTMLElement;
    public inputEmail: HTMLElement;
    public radioCountry: HTMLElement;
    public inputPostalCode: HTMLElement;
    public inputLandline: HTMLElement;
    public inputMobilePhone: HTMLElement;


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
    }

    private getInputName = () =>
    (this.inputName = this.view.getElementById("name") as HTMLElement);

    private getInputSurname = () =>
    (this.inputSurname = this.view.getElementById("surname") as HTMLElement);

    private getInputEmail = () =>
    (this.inputEmail = this.view.getElementById("email") as HTMLElement);

    private getInputPostalCode = () =>
    (this.inputPostalCode = this.view.getElementById("postalCode") as HTMLElement);

    private getInputLandline = () =>
    (this.inputLandline = this.view.getElementById("landline") as HTMLElement);

    private getInputMobilePhone = () =>
    (this.inputMobilePhone = this.view.getElementById("mobilePhone") as HTMLElement);

}
