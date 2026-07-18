export default class Validator {

  validateUsername (username) {        
	  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры');
	  } 
	  if (/\d{4,}/.test(username)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
	  } 
	  if (/^[0-9_-]/.test(username) || /[0-9_-]$/.test(username)) {
      throw new Error('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
	  }
    return username;   
  }
}