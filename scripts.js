function valinp(e){
    inp.value+=e.target.textContent
    
}


function result(){
    inp.value=eval(inp.value)
}

function allClear(){
    inp.value=""
}

function backSpace(){
    exp=inp.value
    inp.value=exp.slice(0,-1)
}
    