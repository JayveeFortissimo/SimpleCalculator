const ChildButton = document.querySelectorAll(".Child button");
const FieldValue = document.querySelector("#inputs");

const ChildButton1 = document.querySelectorAll(".Child button");

ChildButton.forEach((inso,index) =>{
      
    inso.addEventListener('click',()=>{

        if(index === 0){
            FieldValue.value = ""
        }else if(index === 11){
            try{
                FieldValue.value = eval(FieldValue.value);
            }catch(error){
                FieldValue.value = "Error"
            }
        
        }else{
            FieldValue.value += inso.value;
        }
          

    })
})


ChildButton.forEach((inso,index) =>{

    if(index === 0 || index === 1 || index === 2 || index === 3 || index === 7 || index === 11){
        inso.style.backgroundColor = "transparent"
        inso.style.backdropFilter = "blur(8px)"
        
    }
})
