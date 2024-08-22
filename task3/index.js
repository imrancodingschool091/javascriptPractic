let hrs=document.getElementById("hours")
let min=document.getElementById("min")
let sec=document.getElementById("sec")


let d=new Date()

hrs.innerText=`${d.getHours()}`

min.innerText=`:${d.getMinutes()}`

sec.innerText=`:${d.getSeconds()}`