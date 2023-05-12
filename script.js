let btn = document.querySelectorAll("button")
let inp = document.getElementById("inp")
let vide = document.getElementById("vide")
let egal = document.getElementById("egal")
let l // totla de nbr character
let c , p
let operator = ["-","+","*","/"]
btn.forEach((ele) => {
     ele.addEventListener('click' , function() {
           inp.value += ele.value
            l = inp.value.length
            c = ele.value
            prec()
     })
})
vide.onclick = ()=> {
    inp.value = ""
}
egal.onclick = ()=> {
    if(inp.value != ""){
        inp.value = eval(inp.value) 
    }
    else {
        inp.value = ""
    }
}

function prec(){
    p = inp.value.substring(l-2,l-1)
    //console.log(`prev : ${p} current : ${c}`)
    check()
}

function check(){
    if(operator.includes(c) && l == 1){
        remove()
    }
    if(operator.includes(p) && operator.includes(c)){
        if(p == c){
           remove()
        }
        else{
           overide()
        }
    }
}

function overide(){
    inp.value = inp.value.slice(0,l-2)+inp.value.slice(l-1)
}

function remove(){
    inp.value = inp.value.substring(0,l-1)
}

