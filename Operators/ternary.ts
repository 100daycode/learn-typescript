const num1 : number = 10;
const num2 : number = 5;
const num3 : number = 7;

const color = num1 > num2 ? 'hijau' : ( num3 < num1 ? 'biru' : 'merah');
// akan menampilkan hijau karena kondisi terpenuhi di statment pertama (10 > 5).
console.log(color)

const status1:any = null
const status2:any = 0
const status3:any = 1

const stat = status1 == 0 ? 'hijau' : (status2 != 0 ? 'red' : 'blue')
// akan mencetak biru karena statment pertama tidak terpenuhi ( status1(null) == 0) akan melanjutkan ke statment ke 2 (status2(0) != 0 = false)
console.log(stat)
