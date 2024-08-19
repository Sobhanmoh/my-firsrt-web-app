const div3 = document.getElementById("div3")
const div4 = document.getElementById("div4")
const div5 = document.getElementById("div5")




const btn1=document.getElementById('btn1')


btn1.onclick=function () {

    const a1 = Math.floor(Math.random()*6) + 1
    const a2 = Math.floor(Math.random()*6) + 1
    const a3 = Math.floor(Math.random()*6) + 1

   div3.textContent = a1
   div4.textContent = a2
   div5.textContent = a3
}


 
 