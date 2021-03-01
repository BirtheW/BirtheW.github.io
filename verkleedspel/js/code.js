
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    i : 0,
    j:0,
    k:0
};

function nexttshirt()
{
    console.log("inside function nexttshirt");
    console.log(state.i);
    var tshirt=document.getElementById("tshirt");
    if(state.i===0){
    tshirt.setAttribute("class","tshirt1");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    tshirt.setAttribute("class","tshirt2");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    tshirt.setAttribute("class","tshirt3");
         state.i=0;
    }
    
}

function nextbroek()
{
    console.log("inside function nextbroek");
    console.log(state.j);
    var broek=document.getElementById("broek");
    if(state.j===0){
    broek.setAttribute("class","broek1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    broek.setAttribute("class","broek2");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    broek.setAttribute("class","broek3");
         state.j=0;
    }
    
}

function nexthoofd()
{
    console.log("inside function nexthoofd");
    
    console.log(state.k);
    var hoofd=document.getElementById("hoofd");
    if(state.k===0){
    hoofd.setAttribute("class","hoofd1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    hoofd.setAttribute("class","hoofd2");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===2){
    hoofd.setAttribute("class","hoofd3");
         state.k=0;
    }
    
}