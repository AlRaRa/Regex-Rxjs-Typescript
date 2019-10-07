import  REGEXP from '../constant/regex.constant'

export class RegexService{

    

    public validateName = (name:string):boolean => REGEXP.NAME.test(name);
    

    public validateSurname = (surname:string):boolean => REGEXP.SURNAME.test(surname);
    

    public validateEmail = (email:string):boolean => REGEXP.EMAIL.test(email);
    

    public validatePostalCodeUsa = (postalCode:string, country: string):boolean => REGEXP.CPUSA.test(postalCode);


    public validatePostalCodeSpain = (postalCode:string, country: string):boolean => REGEXP.CPSPAIN.test(postalCode);


    //private validatePhoneNumberUsa = (phoneNumber:string):boolean => REGEXP.CPUSA.test(phoneNumber);
    
   // private validatePhoneNumberSpain = (phoneNumber:string):boolean => REGEXP.PHONESPAIN.test(phoneNumber);


    

    private createCountryCp = (country:string):string=> "CP".concat(country);


    private createCountryLandline = (landline:string):string=> "LANDLINE".concat(landline);
    

    private createCountryPhone= (country:string):string=> "PHONE".concat(country)

    

    
}