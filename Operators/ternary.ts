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

[Playground Link](https://www.typescriptlang.org/play?#code/MYewdgzgLgBGCuBbAjDAXHJAjApgJxgF4ZkAGAbgChRJYFEAmdTRXA4gVipuhYGZm9NkRgB2KtXC9QAGxDsWqAHwsmAfhgByABYBLAFYBDeJuYAKfjAA8imBs1ZdeE802J8h7ZoCUVAPR+MIYA1oZgMO5ghogADroyoeF6RvAwoXg4UWngACa6ELowUPgxmfB6MHkw0IZQkbCleFDRhjBmZDAqHN4AdJKQIDI4PXIA5may8t6U-bw1UPAQyGhhAJ4iCDIys7DziwwrYOvEpDvVzQsQfIfHJDM8uxcie0tEJ3ZaycamGGYvTABCd72DI5H5aLAyeA4HyUAJBRIRTLAHDNYIwRzONKGDJZeb1GCNZqIVpQXQ5EJFEplCoWF7IMybGTeN4wUgskJhJEyML6eBQRHBHDnWoEoUwJh-C77MzsmBAtkiABmhhkEBw0x4g2GYyltW8QA)
