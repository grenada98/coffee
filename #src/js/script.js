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
        const basket =document.querySelector(".icon-cart");
        const htmlTag = document.querySelector("html");
        let basketCountValue = 0;
        const basketSubmenuWrapper = document.querySelector(".basket-submenu-wrapper");
        const basketSubmenu = document.querySelector(".basket-submenu");
        const inputSearch = document.querySelector(".header-input-search");
        const linkInputSearch = document.querySelector(".link-search");
        const buttonAdd = Array.from(document.getElementsByClassName("button-coffee-product-order"));
        const basketCount =document.querySelector(".basket-count");
        const addField = Array.from(document.getElementsByClassName("count-increment"));
        const disField = Array.from(document.getElementsByClassName("count-dicrement"));
        const inputCount = Array.from(document.getElementsByClassName("input-count-coffee-product"));
        const burger = document.querySelector(".burger");
        const mobileMenuPopup = document.querySelector(".popup-burger");
        const mobileMenu = document.querySelector(".burger-submenu-wrapper");
        const galleryPhotoes = Array.from(document.getElementsByClassName("coffee-gallery-columns"));
        const loadMore = document.querySelector(".load-gallery");
        let countLoadPhotoes = 1;
        for(let i = 1; i<galleryPhotoes.length; i++){
            galleryPhotoes[i].classList.add("disabled");
        }
        loadMore.addEventListener('click', function(){
            countLoadPhotoes +=1;
            if(galleryPhotoes.length>=countLoadPhotoes){
                for(let i=0; i<countLoadPhotoes; i++){
                    galleryPhotoes[i].classList.remove("disabled");
                }
                if(galleryPhotoes.length==countLoadPhotoes){
                    loadMore.classList.add("disabled");
                }
            }
        })
        burger.addEventListener('click', function(){
            if(burger.classList.contains("active")){
                burger.classList.remove("active");
                mobileMenuPopup.classList.remove("active");
                mobileMenu.classList.remove("active");
                htmlTag.classList.remove("disabled");
                console.log(1);
            }
            else{
                burger.classList.add("active");
                mobileMenuPopup.classList.add("active");
                mobileMenu.classList.add("active");
                htmlTag.classList.add("disabled");
                console.log(2);
            }
        })
        mobileMenuPopup.addEventListener('click', function(){
            if(mobileMenuPopup.classList.contains("active")){
                burger.classList.remove("active");
                mobileMenuPopup.classList.remove("active");
                mobileMenu.classList.remove("active");
                htmlTag.classList.remove("disabled");
                console.log(3);
            }
        })
        mobileMenu.addEventListener('click', function(event){
            event.stopPropagation();
        })
        addField.forEach(function(el) {el.addEventListener('click', function (){
            const data = this.dataset.name;
            document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value = +document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value + 1;
            console.log(4);
        })})
        disField.forEach(function(el) {el.addEventListener('click', function (){
            const data = this.dataset.name;
            document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value = +document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value - 1;
            if(document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value < 0){
                document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value = 0;
            }
            console.log(5);
        })})
        buttonAdd.forEach(function (el){el.addEventListener('click', function(){
            const data = this.dataset.name;
            console.log(basketCount.textContent);
            basketCountValue = basketCountValue + +document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value;
            if(document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value>0){
                basketCount.textContent = basketCountValue;
            }
            document.querySelector(`.input-count-coffee-product[data-name="${data}"]`).value = 0;
            if(basketCountValue>0){
                basketSubmenu.textContent = `В корзине ${basketCountValue} мешков с какао-бобами`;
                
            }
            else{
                basketSubmenu.textContent = `В корзине пусто!`;
            }
            console.log(6);
        })})
        inputCount.forEach(function (el){el.addEventListener('keydown', function(e){
            if(e.keyCode===13){
                basketCountValue = basketCountValue + +this.value;
                this.value = 0;
                this.blur();
                basketCount.textContent = basketCountValue;
                if(basketCountValue>0){
                    basketSubmenu.textContent = `В корзине ${basketCountValue} мешков с какао-бобами`;
                    
                }
                else{
                    basketSubmenu.textContent = `В корзине пусто!`;
                }
            }
            else{

            }
            console.log(7);
        })})
        inputCount.forEach(function (el){el.addEventListener('click', function(){
            if(this.value == 0){
                this.value = "";
            }
            console.log(8);
        })})
        basket.addEventListener("click", function(){
            if(basketSubmenuWrapper.classList.contains("active")){
                basketSubmenuWrapper.classList.remove("active");
            }
            else{
                basketSubmenuWrapper.classList.add("active");
            }
            console.log(9);
        })
        basketCount.addEventListener("DOMNodeInserted", function(){
            if(basketCount.textContent == '0'){
                basketCount.classList.remove('active');
                console.log("OK");
            }
            else{
                basketCount.classList.add('active');
                console.log("NO");
            }
            console.log(10);
        })
        inputSearch.addEventListener('keydown', function(e){
            if(e.keyCode===13){
                inputSearch.blur();
            }
            console.log(11);
        })
        inputSearch.addEventListener('mouseleave', function(){
            inputSearch.blur();
            console.log(12);
        })
        linkInputSearch.addEventListener("click", function(){
            inputSearch.blur();
            console.log(13);
        })
})