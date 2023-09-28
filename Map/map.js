let el = document.getElementsByTagName("div")
el=[...el]
console.log(el)
el.map((e,i)=>{
    e.innerHTML="Samuel"
})

const dobrarArrays = (e)=>e*2
let num=['2','3','4','5'].map(dobrarArrays)
console.log(num)