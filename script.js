

// document.getElementById("input-btn").addEventListener("click",function(){
//     document.getElementById("fruitlist").style.color="red"

// let newfruit=document.getElementById("input").value
// let listelement=document.createElement("li")
//  listelement.innerHTML=newfruit
//  document.getElementById("fruitlist").appendChild(listelement)
// })

document.getElementById("input-btn"),addEventListener("click",function(){
document.getElementById("skilllist").style.color="green"

let newskills=document.getElementById("input").value
let listelement=document.createElement("skilllist")
listelement.innerHTML=newskills
document.getElementById("skilllist").appendChild(listelement)
document.getElementById("input").value="";
})
// second q

document.getElementById("input-btn2"),addEventListener("click",function(){
    document.getElementById("skilllist2").style.color="green"
    
    let newskills=document.getElementById("second-input").value
    let listelement=document.createElement("skilllist2")
    listelement.innerHTML=newskills
    document.getElementById("skilllist2").appendChild(listelement)
    document.getElementById("second-input").value="";
    })
// third q
    document.getElementById("input-btn3"),addEventListener("click",function(){
        document.getElementById("skilllist3").style.color="green"
        
        let newskills=document.getElementById("third-input").value
        let listelement=document.createElement("skilllist3")
        listelement.innerHTML=newskills
        document.getElementById("skilllist3").appendChild(listelement)
        document.getElementById("third-input").value="";
        })
        // fourth q
        document.getElementById("input-btn4"),addEventListener("click",function(){
            document.getElementById("skilllist4").style.color="green"
            
            let newskills=document.getElementById("fourth-input").value
            let listelement=document.createElement("skilllist4")
            listelement.innerHTML=newskills
            document.getElementById("skilllist4").appendChild(listelement)
            document.getElementById("fourth-input").value="";
            })
            // fifth q
            document.getElementById("input-btn5"),addEventListener("click",function(){
                document.getElementById("skilllist5").style.color="green"
                
                let newskills=document.getElementById("fifth-input").value
                let listelement=document.createElement("skilllist5")
                listelement.innerHTML=newskills
                document.getElementById("skilllist5").appendChild(listelement)
                document.getElementById("fifth-input").value="";
                })
