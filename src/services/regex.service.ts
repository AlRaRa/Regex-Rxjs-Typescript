import REGEXP from "../constant/regex.constant";

export class RegexService {
    public validateName = (name: string): boolean => REGEXP.NAME.test(name);

    public validateSurname = (surname: string): boolean =>
        REGEXP.SURNAME.test(surname);

    public validateEmail = (email: string): boolean => REGEXP.EMAIL.test(email);

    public validatePostalCodeUsa = (postalCode: string): boolean =>
        REGEXP.CPUSA.test(postalCode);

    public validatePostalCodeSpain = (postalCode: string): boolean =>
        REGEXP.CPSPAIN.test(postalCode);

    private validateLandlineSpain=(landline:string):boolean=>
        REGEXP.LANDLINESPAIN.test(landline);
        
    private validateLandlineUsa=(landline:string):boolean=>
        REGEXP.LANDLINEUSA.test(landline);

    private validatePhoneNumberSpain=(phoneNumber:string):boolean=>
        REGEXP.PHONENUMBERSPAIN.test(phoneNumber);
        
    private validatePostalphonenumberUsa=(phoneNumber:string):boolean=>
        REGEXP.PHONENUMBERUSA.test(phoneNumber)

    public validatePostalCode = (country: string, postalcode: string) =>
        this.validateCountry(country)
            ? this.validatePostalCodeSpain(postalcode)
            : this.validatePostalCodeUsa(postalcode);

    public validateLandline = (landline: string, country: string) =>
        this.validateCountry(country)
            ? this.validateLandlineSpain(landline)
            : this.validateLandlineUsa(landline);

    public validatePhoneNumber = (mobilePhone: string, country: string) =>
        this.validateCountry(country)
            ? this.validatePhoneNumberSpain(mobilePhone)
            : this.validatePostalphonenumberUsa(mobilePhone); 

    //private validatePhoneNumberUsa = (phoneNumber:string):boolean => REGEXP.CPUSA.test(phoneNumber);

    // private validatePhoneNumberSpain = (phoneNumber:string):boolean => REGEXP.PHONESPAIN.test(phoneNumber);

    private validateCountry = (country: string) => country == "SPAIN";

    /* private createCountryCp = (country:string):string=> "CP".concat(country);
  
  
      private createCountryLandline = (landline:string):string=> "LANDLINE".concat(landline);
      
  
      private createCountryPhone= (country:string):string=> "PHONE".concat(country)*/
}
