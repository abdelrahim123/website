var fname=document.getElementById('FullName'),
    Email=document.getElementById('Email'),
    phone=document.getElementById('phone'),
    card=document.getElementById('card'),
    p=document.getElementById('p'),
    p1=document.getElementById('p1'),
    butt=document.getElementById('butt'),
    butt1=document.getElementById('butt1'),
    span1=document.getElementById('span1'),
    span2=document.getElementById('span2'),
    span3=document.getElementById('span3'),
    span4=document.getElementById('span4'),
    span5=document.getElementById('span5'),
    par1=document.getElementById('par1'),
    goUPButton=document.getElementById('goUPButton'),
    navBar=document.getElementById('navBar');
window.onscroll=function(){
    if(window.pageYOffset>=300){
        navBar.style.position='fixed' ;
        navBar.style.backgroundColor='#000';
        navBar.style.opacity=".9";
        navBar.style.color='#000';
        goUPButton.style.display='block' ;
    }else
        {
        navBar.style.position='relative' ;
        navBar.style.backgroundColor="#222";
        navBar.style.opacity=".4";
        goUPButton.style.display='none';
        }

};
function goUP(){
    window.scrollTo(0,0); 
};
butt.onclick=function(){
    if(this.textContent==='Show')
        {
            p.setAttribute('type','text');
            this.textContent="hide";
        }
    else
        {
            p.setAttribute('type','password');
            this.textContent="Show";
        }
}
butt1.onclick=function(){
    if(this.textContent==='Show')
        {
            p1.setAttribute('type','text');
            this.textContent="hide";
        }
    else
        {
            p1.setAttribute('type','password');
            this.textContent="Show";
        }
}

//validation of full name
function checkFullName(){
    var firstName=document.getElementById("FullName").value;
    var check=/^[a-zA-Z\s\'\-]{2,15}$/;
    if(check.test(firstName)){
        document.getElementById("message1").style.color="green";
         document.getElementById("message1").innerHTML="<strong>valid</strong>";
        return true;
    }
    else{
        
         document.getElementById("message1").style.color="red";
         document.getElementById("message1").innerHTML="<strong>Enter 2-15 character</strong>";
        return false;
                

    }
}
//end

//validation of email
function checkEmail(){
    var em=document.getElementById("Email").value;
    var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(em)){
         document.getElementById("message2").style.color="green";
      document.getElementById("message2").innerHTML="<strong>valid</strong>"
        return true;
    }
    else{
            document.getElementById("message2").style.color="red";
            document.getElementById("message2").innerHTML="<strong>Invalid Email Addresss</strong>";
        return false;
        
    }
}
//end

//validation of phone number
function checkPhone(){
    var phone=document.getElementById("phone").value;
    var checknumber=/^\d{4}-\d{4}-\d{3}$/;
    if(checknumber.test(phone)){
        document.getElementById("message3").style.color="green";
        document.getElementById("message3").innerHTML="<strong>valid</strong>"
        return true;
    }
    else{
        document.getElementById("message3").style.color="red";
         document.getElementById("message3").innerHTML="<strong>Use xxxx-xxxx-xxx</strong>";
        return false;
    }
}
//end

//validation of national number
function checkNationalNum(){
    var num=document.getElementById("card").value;
    var checknational=/^[0-9]{14}$/;
    if(checknational.test(num)){
        document.getElementById("message4").style.color="green";
         document.getElementById("message4").innerHTML="<strong>valid</strong>"
         return true;
    }
    else{
        document.getElementById("message4").style.color="red";
        document.getElementById("message4").innerHTML="<strong>Enter exactly 14 numbers</strong>";
        return false;
    }
}
//end

//validation of password
function checkPass(){
    var pass1=document.getElementById("p").value;
    var ch= /^[a-zA-Z0-9-]{4,14}$/;
    if(ch.test(pass1)){
        document.getElementById("message5").style.color="green";
        document.getElementById("message5").innerHTML="<strong>valid</strong>"
        return true;
    }
    else{
         document.getElementById("message5").style.color="red";
        document.getElementById("message5").innerHTML="<strong> Invalid password</strong>";
        return false
    }
}
//end
//validation of confirm password
function confirmForm(){
	var password1=document.getElementById("p").value;
	var password2=document.getElementById("p1").value;
	
	if(password1 == password2 && password1 != "") {
        document.getElementById("message6").style.color="green";
         document.getElementById("message6").innerHTML="<strong>password match</strong>"
        return true;
	}
	else if((password1 || password2 == "") || (password1 != password2)){
        document.getElementById("message6").style.color="red";
         document.getElementById("message6").innerHTML="<strong> enter password correctly</strong>";
	
		return false;
	}
	

}
//end


//Display form information 

function displayForm(){
    var str='';

    var elem=document.getElementById("information").elements;
    for(var i=0;i<elem.length;i++){
        	str+="<b>value: </b>"+elem[i].value+ " ";
        //str+=elem[i].value + " ";
            str+="<br>";
    }
    document.getElementById("mainDiv").innerHTML=str;
}

//end






function focusName(){
    fname.setAttribute('newPlaceholder',fname.getAttribute('placeholder'))
   
      fname.setAttribute('placeholder'," ");
}
function blurName(){
     fname.setAttribute('placeholder',fname.getAttribute('newPlaceholder'));
     fname.setAttribute('newPlaceholder'," ");
}

function focusEmail(){
    Email.setAttribute('newPlaceholder',Email.getAttribute('placeholder'));
    Email.setAttribute('placeholder'," ");
}

function blurEmail(){
    Email.setAttribute('placeholder',Email.getAttribute('newPlaceholder'));
    Email.setAttribute('newPlaceholder'," ");
}

function focusPhone(){
     phone.setAttribute('newPlaceholder',phone.getAttribute('placeholder'));
     phone.setAttribute('placeholder'," ");
}

function blurPhone(){
    phone.setAttribute('placeholder',phone.getAttribute('newPlaceholder'));
    phone.setAttribute('newPlaceholder'," ");
}
function focusCard(){
    card.setAttribute('newPlaceholder',card.getAttribute('placeholder'));
     card.setAttribute('placeholder'," ");
}
function blurcard(){
    card.setAttribute('placeholder',card.getAttribute('newPlaceholder'));
    card.setAttribute('newPlaceholder'," ");
}
function focusPassword(){
      p.setAttribute('newPlaceholder',p.getAttribute('placeholder'));
    p.setAttribute('placeholder'," ");
}

function focusPassCon(){
    p1.setAttribute('newPlaceholder',p1.getAttribute('placeholder'));
    p1.setAttribute('placeholder'," ");
}

function blurPassCon(){
    p1.setAttribute('placeholder',p1.getAttribute('newPlaceholder'));
     p1.setAttribute('newPlaceholder'," ");
}

function blurPass(){
    p.setAttribute('placeholder',p.getAttribute('newPlaceholder'));
     p.setAttribute('newPlaceholder'," ");
}

/**




p1.onfocus=function(){
    this.setAttribute('newPlaceholder',this.getAttribute('placeholder'));
    this.setAttribute('placeholder'," ");
}
p1.onblur=function(){
    this.setAttribute('placeholder',this.getAttribute('newPlaceholder'));
    this.setAttribute('newPlaceholder'," ");
}


showpass.onchange=function(){
    if(this.textContent==='show')
        {
            p.setAttribute('type','text');
            this.textContent="hide";
        }
    else
        {
            p.setAttribute('type','password');
            this.textContent="Show";
        }
}
butt1.onclick=function(){
    if(this.textContent==='Show')
        {
            p1.setAttribute('type','text');
            this.textContent="hide";
        }
    else
        {
            p1.setAttribute('type','password');
            this.textContent="Show";
        }
}
fname.onkeyup=function(){
    if(this.value.length===5)
        {
            par1.innerHTML="*min is 14";
        }
        
}

span1.innerHTML=fname.value;
span2.innerHTML=Email.value;
span3.innerHTML=phone.value;
span4.innerHTML=card.value;
span5.innerHTML=p.value;

**/






