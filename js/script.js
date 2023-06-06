$(document).ready(function(){
    async function getCountry(){
        const url = await fetch("https://restcountries.com/v3.1/all");
        const res = await url.json();
        console.log(res);
        let myData = "";

        res.forEach(element => {
            myData +=`
                    <div class="col-lg-3 mb-4">
                        <div class="card h-100 ${element.name.common}">
                            <img src="${element.flags.png}">
                            <div class="card-body">
                                <h3 clas="card-title">${element.name.common}</h3>
                                <p class="card-text pb-0 mb-0"><span class="fw-bold">Population:</span>${element.population}</p>
                                <p class="card-text pb-0 mb-0 region"><span class="fw-bold">Region: </span><span> ${element.region}<span></p>
                                <p class="card-text"><span class="fw-bold">Capital:</span> ${element.capital}</p>
                            </div>
                        </div>
                    </div>`;
        });
        document.querySelector("#output").innerHTML = myData;


    }
    getCountry();


        $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        //console.log(value);

        let cards = document.querySelectorAll(".card");
       //console.log(cards);
       Array.from(cards).forEach(function(card){
        let country = card.firstElementChild.nextElementSibling.firstElementChild.textContent.toLowerCase();
        if(country.indexOf(value) != -1){
          card.parentElement.style.display = "block";
        }else{
            card.parentElement.style.display = "none";
        }
       })
    });

    var btn = document.querySelector(".light");
    btn.addEventListener("click", function(){

        if($(".light").hasClass("light")){
            btn.classList.remove("light");
            btn.classList.add("dark");
            document.body.classList.add("dark-theme");
        }else{
            btn.classList.add("light");
            btn.classList.remove("dark");
            document.body.classList.remove("dark-theme");
        }
    })


    let select = document.querySelector("select");
    select.addEventListener("change", function(e){
        let region = e.target.value;

        let cards = document.querySelectorAll(".card");
        Array.from(cards).forEach(function(card){
            let country = card.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.textContent.toLowerCase();
            console.log(country);
            if(country.indexOf(region) != -1){
                card.parentElement.style.display = "block";
            }else{
                card.parentElement.style.display = "none";
            }
        });
    })


});