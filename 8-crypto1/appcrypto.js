const userPassword = `superpas`;

function crypto(password) {
    const arrayPassword = password.split(``);
    const reversePasOne = arrayPassword.splice(1, 5).reverse();
    const reversePasTwo = arrayPassword.splice(1, 2).reverse();
    arrayPassword.splice(1, 0, reversePasOne.join(''));
    arrayPassword.splice(1, 0, reversePasTwo.join(''));
    return arrayPassword.join('');
}
console.log(`CryptoPassword: ${crypto(userPassword)}`);


const cryptoPassword = `ssaprepu`;  //crypto(userPassword) - можно сделать так. Ввел строкой чтобы можно было проверить(если ввести что либо другое)

function check(cryptoPasswordCheck, userPasswordCheck) {

    if (cryptoPasswordCheck.length != userPasswordCheck.length) {
        return false;
    }

    return crypto(cryptoPasswordCheck) === userPassword;

}

console.log(`Match? ${check(cryptoPassword, userPassword)}`);

