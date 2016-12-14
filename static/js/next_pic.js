   var carousel = document.querySelector('.carousel');
        var container = carousel.querySelector('.carousel-container');
        var pagination = carousel.querySelector('.carousel-pagination');
        var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
        var totalItems = container.querySelectorAll('.carousel-item').length;
        var percent = (100 / totalItems);
        var currentIndex = 0;
		var index = currentIndex;
        function next() {
            slideTo(currentIndex + 1);
        }
        
               function autonext() {
               if(currentIndex-1==4){
               
               
               
               currentIndex = 0;
               slideTo(currentIndex);
               }
               
               else{
               
            slideTo(currentIndex + 1);
            }
        }

        function prev() {
            slideTo(currentIndex - 1);
        }

        function slideTo(index) {
            index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
            container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
            bullets[currentIndex].classList.remove('active-bullet');
            bullets[index].classList.add('active-bullet');
            currentIndex = index;
        }

        bullets[currentIndex].classList.add('active-bullet');
        carousel.querySelector('.carousel-prev').addEventListener('click', prev, false);
        carousel.querySelector('.carousel-next').addEventListener('click', next, false);

        pagination.addEventListener('click', function(e) {
            var index = bullets.indexOf(e.target);
            if (index !== -1) {
                slideTo(index);
            }
        }, false);
        
     
        
        
 

setInterval(autonext,7500);

 
  