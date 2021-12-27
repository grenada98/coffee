$(document).ready(function(){

    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
        
    testWebP(function (support) {
        
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
    });

    //to top
        let toTOP = document.querySelector('.to-top')
        function to_TOP() {
            if (window.pageYOffset > 100) {
              toTOP.style.opacity = '1'
            } else { toTOP.style.opacity = '0' }
          }
        window.onscroll = to_TOP
        // появление/затухание кнопки #back-top
        $(function (){
    
            // при клике на ссылку плавно поднимаемся вверх
            $(".to-top").click(function (){
                $("body,html").animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
        $(document).click((e) => {
            const {target} = e;
            if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
              e.preventDefault();
            }
          });

          $(".coffee-shop-list-products").slick({
              arrows: true,
              slidesToShow: 3,
              infinite: false,
              responsive:[
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,

                    }
                },
            ]
          })
        const inputSearch = document.querySelector(".header-input-search");
        const linkInputSearch = document.querySelector(".link-search");
        const buttonAdd = Array.from(document.getElementsByClassName("button-coffee-product-order"));
        const basketCount =document.querySelector(".basket-count");
        const addField = Array.from(document.getElementsByClassName("count-increment"));
        const disField = Array.from(document.getElementsByClassName("count-dicrement"));
        addField.forEach(function(el) {el.addEventListener('click', function (){
            const data = this.dataset.name;
            document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value = +document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value + 1;
        })})
        disField.forEach(function(el) {el.addEventListener('click', function (){
            const data = this.dataset.name;
            document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value = +document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value - 1;
            if(document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value < 0){
                document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value = 0;
            }
        })})
        buttonAdd.forEach(function (el){el.addEventListener('click', function(){
            const data = this.dataset.name;
            console.log(basketCount.textContent);
            basketCount.textContent = +basketCount.textContent + +document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value;
            document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value = 0;
        })})

        basketCount.addEventListener("DOMNodeInserted", function(){
            console.log("OK");
            if(basketCount.textContent == '0'){
                basketCount.classList.remove('active');
                console.log("OK");
            }
            else{
                basketCount.classList.add('active');
                console.log("NO");
            }
        })
        inputSearch.addEventListener('keydown', function(e){
            if(e.keyCode===13){
                inputSearch.blur();
            }
        })
        inputSearch.addEventListener('mouseleave', function(){
            inputSearch.blur();
        })
        linkInputSearch.addEventListener("click", function(){
            inputSearch.blur();
        })
})