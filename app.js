
const ham = document.getElementById('ham');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const hero = document.querySelector('.hero-container')
const slider = document.querySelector('.slider')
const headline = document.querySelector('.headline')


if (ham) {
    ham.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



const tl = new TimelineMax();

tl.fromTo(hero,
    1,
    {height: "0%"},
    {height: "80%", ease: Power2.easeInOut }
    ).fromTo(
    hero,
    1.2, 
    {width: "100%" },
    {width: "90%", ease: Power2.easeInOut }
    );

tl.fromTo(headline,
   0.5,
   {opacity: 0, x: 30},
   {opacity: 1, x: 0}
);

$(function getProducts(){
    $.ajax({
        url: 'https://fakestoreapi.com/products?limit=8',
        type: 'GET',
        dataType: 'json',
        success: function(response){
            $(response).each(function (index){
                $('#showcase-men').append(
                    `
                    <div class="display-container">
                    <div>
                        <img src="${response[index].image}" alt="">
                    </div> 
                    <div class="sm-container2">
                        <h5>${response[index].title}</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        <h4>$ ${response[index].price}</h4>
                        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                    </div>
                </div>`
                )
            })
        },

    

        error: function(response){
            alert('Error loading in data for clothing of men');
        }
    })
})


$(function getProducts(){
    $.ajax({
        url: 'https://fakestoreapi.com/products?sort=desc',
        type: 'GET',
        dataType: 'json',
        success: function(response){
            $(response).each(function (index){
                $('#showcase-women').append(
                    `
                    <div class="display-container">
                    <div>
                        <img src="${response[index].image}" alt="">
                    </div> 
                    <div class="sm-container2">
                        <h5>${response[index].title}</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        <h4>$ ${response[index].price}</h4>
                        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                    </div>
                </div>`
                )
            })
        },

    

        error: function(response){
            alert('Error loading in clothing for women');
        }
    })
})


