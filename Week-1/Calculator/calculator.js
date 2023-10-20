function c1(){
    let num1=document.querySelector("#n1").value;
    let oper=document.getElementById("op").value;
    let num2=document.getElementById("n2").value;
    let res;
    if(oper=="+"){
        res=parseFloat(num1)+parseFloat(num2);
        document.getElementById("output").innerHTML="Your Answer is"+"  "+res+"😂";
    }
    if(oper=="-"){
        res=parseFloat(num1)-parseFloat(num2);
        document.getElementById("output").innerHTML="Your Answer is"+"  "+res+"😂";
    }
    if(oper=="*"){
        res=parseFloat(num1)*parseFloat(num2);
        document.getElementById("output").innerHTML="Your Answer is"+"  "+res+"😂";
    }
    if(oper=="/"){
        res=parseFloat(num1)/parseFloat(num2);
        document.getElementById("output").innerHTML="Your Answer is"+"  "+res+"😂";
    }

}