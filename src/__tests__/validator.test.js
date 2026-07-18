import Validator from '../index.js';

describe('class Validator', () => {
  const validator = new Validator();

  test('create validator with valid username', () => {    
    expect(validator.validateUsername('john_doe')).toBe('john_doe');
  });

  test('create validator with valid username with three digits', () => {    
    expect(validator.validateUsername('user123name')).toBe('user123name');
  });  

  test('create validator with valid username with digits inside', () => {    
    expect(validator.validateUsername('a1b2c3d')).toBe('a1b2c3d');
  }); 

  test('create validator with invalid username with digits', () => {
    expect(() => validator.validateUsername('123abc')).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  });

  test('create validator with invalid username ends with _', () => {
    expect(() => validator.validateUsername('user_')).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  });  

  test('create validator with invalid username with 4 digits in a row', () => {
    expect(() => validator.validateUsername('user1234name')).toThrow('Имя не должно содержать подряд более трёх цифр');
  }); 

  test('create validator with invalid usernameends with invalid character', () => {
    expect(() => validator.validateUsername('user@name')).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры');
  });

  test('invalid username with cyrillic letters', () => {
    expect(() => validator.validateUsername('userИмя')).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры');
  });

});