var rmail=prompt("enter your mail for registration:").toLowerCase()
var rpass=prompt("enter your password for registration:")
var mail_pass=[]
mail_pass.push(rmail)
mail_pass.push(rpass)
var i=true
 while(i==true){
    let lmail=prompt("enter your login mail").toLowerCase()
    let lpass=prompt("enter your login password")
    if(lmail==mail_pass[0] && lpass==mail_pass[1]){
        alert("You have been logged in succesfully")
        i=false;
    }
    else{
        alert("Please enter correct mail and password")
    }
 }