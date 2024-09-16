function rolldice() {
    const values=[]
    const images=[]

    const div1=document.getElementById('dice1')
    const div2=document.getElementById('dice1')
    const numDice = document.getElementById('numDice').value
    
    for(i=0;i<numDice;i++) {
        let dice1 = Math.floor(Math.random()*6)+1
        values.push(dice1)
    }
    
    div1.textContent=values.join(',')
    div2.innerHTML=images.join('')
}