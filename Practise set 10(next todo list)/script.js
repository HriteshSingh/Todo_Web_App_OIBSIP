let a=document.getElementById("btn1")
let b=document.getElementById("txt")
let c=document.getElementById("ip")
let chances=0;
let ls_data=JSON.parse(localStorage.getItem("todo"))||[]

a.onclick=()=>{
    chances++;
    let con=document.createElement("div")
    con.setAttribute('id', 'txt1');
    con.style.display="flex"
    con.style.marginTop="20px"
    con.style.justifyContent="space-between"
    con.style.background="#b6edb6"
    con.style.height="70px"
    con.style.alignItems="center"
    con.style.padding="0px 20px 0px 20px"
    con.style.borderRadius="10px"
    con.style.border="2px solid limegreen"
    
    let obj={
      key: c.value
    }

    ls_data.push(obj)

    console.log(ls_data)
    localStorage.setItem("todo",JSON.stringify(ls_data))
    
    let ipval=document.createElement("p")
    ipval.innerHTML=ip.value
    ipval.style.fontSize="20px"

    let con1=document.createElement("div")


    let btn=document.createElement("button")
    btn.innerHTML="Delete"
    btn.style.width="80px"
    btn.style.height="35px"
    btn.style.borderRadius="4px"
    btn.style.background="red"
    btn.style.color="white"
    btn.style.border="none"

    let btn1=document.createElement("button")
    btn1.innerHTML="Edit"
    btn1.style.width="80px"
    btn1.style.height="35px"
    btn1.style.borderRadius="4px"
    btn1.style.background="green"
    btn1.style.color="white"
    btn1.style.border="none"
    btn.style.marginLeft="10px"
    
    let e=document.getElementById("p2")
    e.innerHTML="Text Added Successfully!!"
    e.style.color="green"
    const func=()=>{
        setTimeout(()=>{
            e.innerHTML=""
        },1000)
    }
    func();

    const removal=()=>{
        con.remove(con)
    localStorage.setItem("todo"+chances,ip.value)
    }

    btn.onclick=()=>{
       removal();
       e.innerHTML="Text Deleted Successfully!!"
       e.style.color="red" 

       func();
    }

    const func1=()=>{
        ip.value=ipval.innerHTML
    }
    btn1.onclick=()=>{
        func1();
        removal();
        e.innerHTML="EDIT TEXT !!"
        e.style.color="blue"
        func(); 
    }

    con1.append(btn1,btn)
    con.append(ipval,con1)
    b.append(con)

}
let d=document.getElementById("btn2")
d.onclick=()=>{
    c.value=""
}
