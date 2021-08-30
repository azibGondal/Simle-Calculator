let screen = document.getElementById("scren");
let btns =  document.getElementsByClassName("number");
let computedValue = "";



for(let elm of btns){
    elm.addEventListener("click",(e)=>{
        let buttonValue = e.target.innerText;
        // console.log(buttonValue);

        if(buttonValue == '='){
            computedValue =  screen.value;
            
            // screen.value = 
            computedValue = eval(computedValue);
            screen.value = computedValue;
        }
        
        else if(buttonValue == 'C'){
            
            screen.value = " ";
        }

        
        
        else{

        

        screen.value += buttonValue;
    }
        
       


        
    })
}


