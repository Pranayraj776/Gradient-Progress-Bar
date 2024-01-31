    let number = document.getElementById("number");
    let counter = 0;
    setInterval(() => {
        if(counter == 85){
            clearInterval();
        }else{
            counter += 1;
            number.innerHTML = counter + "%";
        }
        
    } , 23);  
         //this will make your circular bar running from 0 to 85%//

     
         