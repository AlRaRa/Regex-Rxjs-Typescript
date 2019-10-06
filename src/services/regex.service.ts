import  {REGEXP} from '../constant/regex.constant'

export class RegexService{

    

    public validateName = (name:string):boolean => /^[a-zA-ZÁ-Úá-úÀ-Ùà-ù']{3,30}$/.test(name);
    

    public validateSurname = (surname:string):boolean => REGEXP["SURNAME"].test(surname);
    

    public validateEmail = (email:string):boolean => REGEXP["EMAIL"].test(email);
    

    public validatePostalCode = (postalCode:string, country: string):boolean => REGEXP[this.createCountryCp(country)].test(postalCode)
    

    public validateLandline = (landline:string, country: string):boolean => REGEXP[this.createCountryLandline(country)].test(landline);
    

    public validatePhoneNumber = (phoneNumber:string, country:string ):boolean => REGEXP[this.createCountryPhone(country)].test(phoneNumber)
    
    
    private createCountryCp = (country:string):string=> "CP".concat(country);


    private createCountryLandline = (landline:string):string=> "LANDLINE".concat(landline);
    

    private createCountryPhone= (country:string):string=> "PHONE".concat(country)

    

    
}