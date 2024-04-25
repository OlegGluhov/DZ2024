const password = `password`;


function shifrPs(ps) {
    const shifr = ps.split(``);

    const rez = shifr.splice(2, 3);

    const rezSp = rez.join(``);

    shifr.unshift(rezSp);
    return shifr.join('');
}

console.log(shifrPs(password));


const shifrPassword = `sswpaord`;

function unShifrPs(ups) {
    const unshifr = ups.split(``);

    const unrez = unshifr.splice(0, 3);

    const unrezSp = unrez.join(``);

    unshifr.splice(2, 0, unrezSp);

    const deshifr = unshifr.join('')

    if (deshifr === password) {

        console.log(true);
    } else { console.log(false) }

}
unShifrPs(shifrPassword);