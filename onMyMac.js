let macbook = ['macbookpro', 'macbookair', 'macbook'];

let mac = [...macbook, 'macmini'];

console.log(mac);


function concatString (str1, str2) {
    console.log( str1 + str2)
}

concatString('fiqrie ', 'rahman')
concatString(1, 4)

expect(concatString('abc', 'def')).toBe('abcdef') //it must use JEST to run