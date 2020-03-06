export default function resultOne(){

let array = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];
let array2 = array.map(e => e * 4);
return array2.filter(e => e > 8)
}