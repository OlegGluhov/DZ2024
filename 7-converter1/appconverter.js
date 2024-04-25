
function convert(currency, cCurrency) {
    switch (true) {
        case currency == 'rub' && (cCurrency == 'usd'):
            return 92;
        case (currency == 'rub') && (cCurrency == 'eur'):
            return 100;
        case (currency == 'rub') && (cCurrency == 'jpy'):
            return 0.61;
        case currency == 'usd' && (cCurrency == 'rub'):
            return 0.0110;
        case (currency == 'eur') && (cCurrency == 'rub'):
            return 0.0100;
        case (currency == 'jpy') && (cCurrency == 'rub'):
            return 1.64;

        default: return null;
    }
}



function itogSum(sum, currency, cCurrency) {

    const convertSum = convert(currency, cCurrency);

    return sum / convertSum;

}


console.log(itogSum(1000, `rub`, 'jpy'));






//Нече умнее не придумал,чтобы если нету курса такой валюты возвращать null
const itogSumConst = itogSum(1000, `rub`, 'jpy');

if (itogSumConst == Infinity) {
    console.log(null);

} else { console.log(itogSumConst); };


