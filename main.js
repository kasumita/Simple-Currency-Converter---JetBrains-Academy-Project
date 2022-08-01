const input = require('sync-input');

console.log('Welcome to Currency Converter!');
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
let usdAmount = 1;
let option = 1;
while (option !== 2){
console.log('What do you want to do?');
console.log('1-Convert currencies 2-Exit program');
option = input();
if (option ==2) break;
if (option ==1){

console.log('What do you want to convert?');
let fromCurrency = input('From: ').toLowerCase();
      if (fromCurrency !== 'jpy' && fromCurrency !== 'eur' && fromCurrency !== 'rub' && fromCurrency !== 'gbp' && fromCurrency !== 'usd') console.log('Unknown currency');
else{
      let toCurrency = input('To: ').toLowerCase();
if (toCurrency !== 'jpy' && toCurrency !== 'eur' && toCurrency !== 'rub' && toCurrency !== 'gbp' && toCurrency !== 'usd') console.log('Unknown currency')
      else {
          let amount = input('Amount: ');
          if (amount < 1) console.log('The amount cannot be less than 1');
          else if (isNaN(amount) === true) { console.log('The amount has to be a number');
              } else {
              switch(fromCurrency){
                  case 'jpy': usdAmount=amount/113.5;
                  break;
                  case 'eur': usdAmount=amount/0.89;
                  break;
                  case 'rub': usdAmount=amount/74.36;
                  break;
                  case 'gbp': usdAmount=amount/0.75;
                  break;
                  case 'usd': usdAmount=amount;
              }
switch (toCurrency) {
    case 'jpy': console.log(`Result: ${amount} ${fromCurrency.toUpperCase()} equals ${(usdAmount * 113.5).toFixed(4)} ${toCurrency.toUpperCase()}`);
    break;
    case 'eur': console.log(`Result: ${amount} ${fromCurrency.toUpperCase()} equals ${(usdAmount * 0.89).toFixed(4)} ${toCurrency.toUpperCase()}`);
    break;
    case 'rub': console.log(`Result: ${amount} ${fromCurrency.toUpperCase()} equals ${(usdAmount * 74.36).toFixed(4)} ${toCurrency.toUpperCase()}`);
    break;
    case 'gbp': console.log(`Result: ${amount} ${fromCurrency.toUpperCase()} equals ${(usdAmount * 0.75).toFixed(4)} ${toCurrency.toUpperCase()}`);
    break;
    case 'usd': console.log(`Result: ${amount} ${fromCurrency.toUpperCase()} equals ${(usdAmount * 1).toFixed(4)} ${toCurrency.toUpperCase()}`);
    break;
}}}}}else {console.log('Unknown input');}}
console.log('Have a nice day!');