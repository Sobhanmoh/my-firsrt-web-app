function rolldice() {
    const values=[]
    const images=[]

    const div1=document.getElementById('dice1')
    const div2=document.getElementById('dice2')
    const numDice = document.getElementById('numDice').value
    
    for(i=0;i<numDice;i++) {
        let rand1 = Math.floor(Math.random()*6)+1
        images.push(`<img src="images/${rand1}.png" style={width:"500px",height:"500px"} alt="img1" >`)
        values.push(rand1)
    }
    
    console.log(images)
    div1.textContent=values.join(',')
    div2.innerHTML=images.join('')
}