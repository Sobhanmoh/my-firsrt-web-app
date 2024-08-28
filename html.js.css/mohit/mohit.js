const btn1 = document.getElementById('btn1')
let mohitdayere = 0
let masahatdayere = 0
const Pi =3.14

btn1.onclick = function () {
let input1 = document.getElementById('input1').value
input1 = Number(input1)




mohitdayere = 2*input1*Pi
masahatdayere = Pi*input1**2

let mohit = document.getElementById("mohit")
let masahat = document.getElementById("masahat")

masahat.textContent = 'مساحت = ' + masahatdayere
mohit.textContent = 'محیط = ' + mohitdayere
}