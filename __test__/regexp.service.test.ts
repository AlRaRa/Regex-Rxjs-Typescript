import { RegexpService } from '../src/services/regexp.service';
import cryptoRandomString from 'crypto-random-string'


const longstring = cryptoRandomString({length: 310, characters: 'string'})
 

const regexpService = new RegexpService();


describe('test to isValidName, ', () => {
	test('should be true', () => {
		expect(regexpService.validateName('rafa')).toBeTruthy();
    });
    
    test('should be false, string too long', () => {
		expect(regexpService.validateName(longstring)).toBeFalsy();
	});

	test('should be false, invalid characters', () => {
		expect(regexpService.validateName('p2342322')).toBeFalsy();
	});
});

describe('test to isValidSurname, ', () => {
	test('should be true', () => {
		expect(regexpService.validateSurname('Calderon')).toBeTruthy();
    });
    
    test('should be false, string too long', () => {
		expect(regexpService.validateSurname(longstring)).toBeFalsy();
	});

	test('should be false, invalid characters', () => {
		expect(regexpService.validateSurname('p2342322')).toBeFalsy();
	});
});

describe('test to isValidEmail', () => {
	test('should be true', () => {
		expect(regexpService.validateEmail('rcrdfewf@gmail.com')).toBeTruthy();
    });
    
    test('should be false, string too long', () => {
		expect(regexpService.validateEmail("334")).toBeFalsy();
	});

	
});