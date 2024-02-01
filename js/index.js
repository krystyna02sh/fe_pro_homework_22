const strings = [
    '   123456  ',
    ' -0123456  ',
    '     -12345  ',
    '   -023456',
    ' -000016   ',
    ' -000000123456  ',
    ' - 000000123456  ',
    ' +000123456  '
];


const regex = /^\s*([-+][0]*[1-9]{1}[0-9]{5}|[1-9]{6})\s*$/;

strings.forEach(str => {
    if (regex.test(str)) {
        console.log(`${str} -> так`);
    } else {
        console.log(`${str} -> ні`);
    }
});
strings.forEach(str =>
    console.log(regex.test(str)))