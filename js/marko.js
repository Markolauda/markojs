                                    //-----------------------------MENI---------------------//
var tipHref=["#Homepage","#Page1","#Page2","#Page3","Page4"];
var tipName=["Homepage","Page1","Page2","Page3","Page4"];
    var menitip="";
    menitip+="<ul class='main-navigation__ul'>"
        for(let i=0; i<tipHref.length; i++){
            menitip+=` 
            <li>
                <a href="${tipHref[i]}">${tipName[i]}</a>
            </li>
            `;

        }
        menitip+="</ul>";
        document.querySelector(".main-navigation").innerHTML=menitip;



                                        //-------------------------------BOOKS----------------------------------//

nizHref=["#","#","#","#"];
nizH=["PHP","Java Script","Python","Node.js"];
nizSrc=["./images/PHP.png","./images/books-2.jpg","./images/zawebjs.jpg","./images/NOD.jpg"];
nizS=["$15.00","$22.00","$25.00","$30.00"];
        var booktip="";
        for(let i=0; i<nizHref.length; i++){
            booktip+=`
					<a href="${nizHref[i]}" class="single-book__img">
                  
                <div class="single-book">
                
						<img src="${nizSrc[i]}" alt="single book and cd"> <div class="single-book_download">
							<img src="./images/download.svg" alt="book image">

                            <h4 class="single-book__title">${nizH[i]}</h4>
                            <span class="single-book__price">${nizS[i]}</span>
						</div>
                        <div class="rating">
						<span>&#9734;</span>
						<span>&#9734;</span>
						<span>&#9734;</span>
						<span>&#9734;</span>
						<span>&#9734;</span>
					</div>
                </div>
					</a>
					
    
            </div>
                    `;
                 }
       document.querySelector(".books").innerHTML=booktip;
       


    
                      //------------------------------------COUNTER----------------------------------------//

var nizCounter=["50","600","2000","125"];
var nizCounterA=["./images/counter-1.png","./images/counter-2.png","./images/counter-2.png","./images/counter-4.png"];
var nizCouterB=["Books Red","Pages Coded","Happy Users","Project's Sold"];
        var countertip="";
                for(let i=0; i<nizCounter.length; i++){
                    countertip+=`
                    <div class="single-count">
                    <span class="count" data-count="${nizCounter[i]}">0</span>
                    <div class="single-count__text">
                        <img src="${nizCounterA[i]}" alt="counter icon">
                        <p>${nizCouterB[i]}</p>
                    </div>
                </div>
                `;}
                document.querySelector("#car").innerHTML=countertip;
                

                 //-------------------------------------------------COLECTOR---------------------------------------//

            var nizColector=["./images/social-twitter.png","./images/facebook.png","./images/social-youtube.png","./images/instagram.png"];
            var nizColector01=["https://twitter.com/?lang=sr","https://www.facebook.com/","https://www.youtube.com/","https://www.instagram.com/"];
                    var colectortip="<h5>Follow</h5>";
                    colectortip+="<div class='social-icons'>"
                    for(let i=0; i<nizColector.length; i++){
                        colectortip+=`
                        <a href="${nizColector01[i]}" target="_blank"><img src="${nizColector[i]}" alt="social icon"></a>
                        `;}
                        
                        colectortip+="</div><h5>Share</h5>"
                       
            document.querySelector(".social").innerHTML=colectortip;
            
                                
            
            
            
            
                                //---------------------------------FORMA--------------------------------//



                                var eroor = 0
                                window.onload = function(){
                                    let taster = document.querySelector("#abtn");
                                    taster.addEventListener("click", formValidation);
                                    
                                    var objFirstName, objLastName, objEmail,objAdress,objCity,objComment,nizRod;
                                    var aFirstName, aLastName, aEmail,aAdress,aCity,aCommnet;
                                    objFirstName = document.querySelector("#Name");
                                    objLastName = document.querySelector("#LastName");
                                    objEmail = document.querySelector("#inputEmail4");
                                    objAdress = document.querySelector("#inputAddress");
                                    objCity=document.querySelector("#inputCity");
                                    objComment = document.querySelector("#floatingTextarea2");
                                    nizRod=document.getElementsByName("#flexRadioDefault");
                                    aFirstName =/^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
                                    aLastName=/^[A-Z][a-z]{2,10}$/;
                                    aEmail=/^[a-z]+([\.]?[a-z]*[\d]*)*\@[a-z]+([\.]?[a-z]+)*(\.[a-z]{2,3})$/;
                                    aAdress=/^[A-Z][a-z]{2,15}$/;
                                    aCity=/^[A-Z][a-z]{2,14}$/;
                                    aCommnet=/^[A-Z][a-z]{2,10}$/;
                                    var msgName="Invalid Format try: Marko";
                                    var msgLastName="Invalid Format try: Markovic";
                                    var msgEmail="example: markomarkovic@hotmail.com";
                    
                                    document.querySelector("#Name").addEventListener("blur",function(){
                                        if(!aFirstName.test(objFirstName.value)){
                                            objFirstName.nextElementSibling.classList.remove("hide");
                                            objFirstName.nextElementSibling.innerHTML = msgName;
                                            objFirstName.classList.add("red-border")
                                           
                                        }
                                        else{
                                            objFirstName.nextElementSibling.classList.add("hide");
                                            objFirstName.nextElementSibling.innerHTML = "";
                                            objFirstName.classList.add("red-border");
                                            
                                        }
                                    });
                                    
                                    document.querySelector("#LastName").addEventListener("blur",function(){
                                        if(!aLastName.test(objLastName.value)){
                                            objLastName.nextElementSibling.classList.remove("hide");
                                            objLastName.nextElementSibling.innerHTML = msgLastName;
                                            objLastName.classList.add("red-border")
                                           
                                        }
                                        else{
                                            objLastName.nextElementSibling.classList.add("hide");
                                            objLastName.nextElementSibling.innerHTML = "";
                                            objLastName.classList.add("red-border");
                                }
                            });
                            document.querySelector("#inputEmail4").addEventListener("blur",function(){
                                if(!aEmail.test(objEmail.value)){
                                    objEmail.nextElementSibling.classList.remove("hide");
                                    objEmail.nextElementSibling.innerHTML = msgEmail;
                                    objEmail.classList.add("red-border")
                                   
                                }
                                else{
                                    objEmail.nextElementSibling.classList.add("hide");
                                    objEmail.nextElementSibling.innerHTML = "";
                                    objEmail.classList.add("red-border");
                                    
                                }
                            });
                            document.querySelector("#LastName").addEventListener("blur",function(){
                                if(!aLastName.test(objLastName.value)){
                                    objLastName.nextElementSibling.classList.remove("hide");
                                    objLastName.nextElementSibling.innerHTML = msgLastName;
                                    objLastName.classList.add("red-border")
                                   
                                }
                                else{
                                    objLastName.nextElementSibling.classList.add("hide");
                                    objLastName.nextElementSibling.innerHTML = msgEmail;
                                    objLastName.classList.add("red-border");
                        }
                    });
                    document.querySelector("#inputAddress").addEventListener("blur",function(){
                        if(!aAdress.test(objAdress.value)){
                            objAdress.nextElementSibling.classList.remove("hide");
                            objAdress.nextElementSibling.innerHTML = "Example: Pinkijeva 8";
                            objAdress.classList.add("red-border")
                           
                        }
                        else{
                            objAdress.nextElementSibling.classList.add("hide");
                            objAdress.nextElementSibling.innerHTML = "";
                            objAdress.classList.add("red-border");
                             }
                     });
                     document.querySelector("#inputCity").addEventListener("blur",function(){
                        if(!aCity.test(objCity.value)){
                            objCity.nextElementSibling.classList.remove("hide");
                            objCity.nextElementSibling.innerHTML = "Example: Belgrade";
                            objCity.classList.add("red-border")
                           
                        }
                        else{
                            objCity.nextElementSibling.classList.add("hide");
                            objCity.nextElementSibling.innerHTML = "";
                            objCity.classList.add("red-border");
                             }
                     });
                                }
                                function formValidation(){
                                    let objFirstName, objLastName, objEmail,objAdress,objCity,objComment,nizRod;
                                
                                    objFirstName = document.querySelector("#Name");
                                    objLastName = document.querySelector("#LastName");
                                    objEmail = document.querySelector("#inputEmail4");
                                    objAdress = document.querySelector("#inputAddress");
                                    objCity=document.querySelector("#inputCity");
                                    objComment = document.querySelector("#floatingTextarea2");
                                    nizRod=document.getElementsByName("flexRadioDefault");
                                    checkBox=document.getElementById("#gridCheck");
                                                                    
                                    
                                
                                    let aFirstName, aLastName, aEmail,aAdress,aCity,aCommnet;
                                
                                
                                    aFirstName =/^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
                                    aLastName=/^[A-Z][a-z]{2,10}$/;
                                    aEmail=/^[a-z]+([\.]?[a-z]*[\d]*)*\@[a-z]+([\.]?[a-z]+)*(\.[a-z]{2,3})$/;
                                    aAdress=/^[A-Z][a-z]{2,15}$/;
                                    aCity=/^[A-Z][a-z]{2,14}$/;
                                    aCommnet=/^[A-Z][a-z]{2,10}$/;
                                    
                                   
                                   
                        
                                    checkFormat(aFirstName, objFirstName, "First name invalid format. Example: Rogerson");
                                
                                    checkFormat(aLastName, objLastName, "Last name invalid format. Example: Rogerson");
                                
                                    checkFormat(aEmail, objEmail, "Email adress invalid format. Example: markorunac@gmail.com");

                                    checkFormat(aAdress,objAdress, "Example: Pinkijeva 8");

                                    checkFormat(aCity, objCity, "City invalid form. Example: Belgrade");

                                   
                                    
                            
                                    if(objComment.value.length < 10){
                                        objComment.nextElementSibling.classList.remove("hide");
                                        objComment.nextElementSibling.innerHTML = "Must conteint at least 10 carracters.";
                                        objComment.classList.add("red-border");
                                      
                                    }
                                    else{
                                        objComment.nextElementSibling.classList.add("hide");
                                        objComment.nextElementSibling.innerHTML = "";
                                        objComment.classList.remove("red-border");
                                       
                                    }
                                    let rt="";
                                    for(let i=0; i<nizRod.length; i++){
                                        if(nizRod[i].checked){
                                            rt=nizRod[i].value;
                                            break;
                                        }
                                    }
                                    let Terms="";
                                    if(checkBox.checked){
                                        Terms+=checkBox.value;
                                       
                                    }
                            
                                }
                                function checkFormat(a, object, msg){
                                    if(!a.test(object.value)){
                                        object.nextElementSibling.classList.remove("hide");
                                        object.nextElementSibling.innerHTML = msg;
                                        object.classList.add("red-border")
                                        eroor++;
                                    }
                                    else{
                                        object.nextElementSibling.classList.add("hide");
                                        object.nextElementSibling.innerHTML = "";
                                        object.classList.add("red-border");
                                        if(eroor>=1){
                                            eroor--;
                                        }
                                    }
                                    
                                }
                                //------------------------CredCards-----------------------//
var nizCredit=["/images/footer-mastercard.png","./images/footer-paypal.png","./images/footer-visa.png","./images/footer-fedex.png","./images/footer-dhl.png"];
                    var cardtip="";
                    for(i=0; i<nizCredit.length; i++){
                        cardtip+=`
                        <img src="${nizCredit[i]}" alt="footer image">
                        `;}
                        document.querySelector(".footer-bottom").innerHTML=cardtip;
                                 
                                 
                                 
                               
                                
