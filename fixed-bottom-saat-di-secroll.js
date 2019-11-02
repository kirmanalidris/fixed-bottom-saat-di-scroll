var nav = document.getElementById('kirman-scrool-fixed-bottom');

       window.onscroll = function () {

         if(window.pageYOffset > 400){

          nav.style.position = "fixed";
          nav.style.bottom = 0;
          nav.style.right = 0;
          nav.style.left = 0;

          }else{
            // nav.style.position = "absolute";
            nav.style.position = 'relative'; //fixed
            nav.style.top = 100;
          }
       };
