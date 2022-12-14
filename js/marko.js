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
       console.log(booktip);


    
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
                console.log(countertip);

               //-------------------------------------------------COLECTOR---------------------------------------//

            var nizColector=["./images/social-twitter.png","./images/social-pinterest.png","./images/social-youtube.png","./images/social-twitter.png"];
                    var colectortip="";
                    colectortip+="<h5>Follow</h5>"
                    for(let i=0; i<nizColector.length; i++){
                        colectortip+=`
                            <div class="social-icons">
                                 <a href="#" target="_blank"><img src="${nizColector[i]}" alt="social icon"></a>
                              </div>
                        
                        `;}
                        colectortip+="<h5>Shere</h5>"
            document.querySelector(".social").innerHTML=colectortip;
            console.log(colectortip);


                                         //-------------------------------FORMA--------------------------------//
   









                    
            