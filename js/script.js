const btnScrollTo = document.querySelector('#btn--scroll-to');
const scrollTop = document.querySelector('#scroll-top');

btnScrollTo.addEventListener('click', function(e) {
    const hcoords = scrollTop.getBoundingClientRect();
    console.log(hcoords);
    console.log(e.target.getBoundingClientRect());
    scrollTop.scrollIntoView({ behavior: 'smooth' });
});
(function() {

    $(document).ready(function() {

        var options = {
            ovalWidth: 390,
            ovalHeight: 120,
            offsetX: 100,
            offsetY: 325,
            angle: 0,
            activeItem: 0,
            duration: 350,
            className: 'item'
        }

        var carousel = $('.carousel').CircularCarousel(options);

        carousel.on('itemBeforeActive', function(e, item) {
            $(item).css('box-shadow', '0 0 20px blue');
        });

        carousel.on('itemActive', function(e, item) {
            $(item).css('box-shadow', '0 0 20px green');
        });

        carousel.on('itemBeforeDeactivate', function(e, item) {
            $(item).css('box-shadow', '0 0 20px yellow');
        })

        carousel.on('itemAfterDeactivate', function(e, item) {
            $(item).css('box-shadow', '');
        })


        $('.controls .previous').click(function(e) {
            carousel.cycleActive('previous');
            e.preventDefault();
        });

        $('.controls .next').click(function(e) {
            carousel.cycleActive('next');
            e.preventDefault();
        });

        $('.carousel .item').click(function(e) {
            var index = $(this).index('li');
            carousel.cycleActiveTo(index);
            e.preventDefault();
        });

    });

})();