/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let length=document.getElementById("len")
let volume=document.getElementById("vol")
let mass=document.getElementById("mas")

let button=document.getElementById("btn")
let Value

console.log(Value)

function renderlength(){
    let feet=Value*3.281
    let meter=Value*0.3048
    length.textContent=`${Value} meters = ${feet} feet | ${Value} feet = ${meter} meters`
}

function rendervolume(){
    let liter=Value*0.264
    let gallon=Value*3.7854
    volume.textContent=`${Value} liters = ${liter} gallons | ${Value} gallons = ${gallon} liters`
}

function rendermass(){
    let kilogram=Value*2.204
    let pounds=Value*0.4535924
    mas.textContent=`${Value} Kilos = ${kilogram} pounds | ${Value} pounds = ${pounds} kilos`

}

button.addEventListener("click",function(){
    Value=document.getElementById("txt").value
    renderlength()
    rendervolume()
    rendermass()
})