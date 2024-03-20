const res = prompt(`Введите первые 2 буквы языка`);


switch (true) {
    case res === 'ru':
    case res === 'Ru':
    case res === 'RU':
        console.log('Привет!');
        break;
    case res === 'de':
    case res === 'De':
    case res === 'DE':
        console.log('Gutten Tag!');
        break;
    case res === 'en':
    case res === 'En':
    case res === 'EN':
        console.log('Hello!');
        break;
    case res === 'ch':
    case res === 'Ch':
    case res === 'CH':
        console.log('你好!');
        break;
    case res === 'fr':
    case res === 'Fr':
    case res === 'FR':
        console.log('Bonjour!');
        break;
    case res === 'es':
    case res === 'Es':
    case res === 'ES':
        console.log('Buenos días!');
        break;
    default:
        console.log('Я не знаю этот язык');
}
