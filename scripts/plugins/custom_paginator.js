$(function () {
   'use strict';
    var $mainImage = $(".b-abcd1-ololo-photos__img");

    $(document).on('click', ".small-images-tray__img_img", function(){
        var $this = $(this);
        //$mainImage.attr('src', $this.attr('data-img-big'));
        //console.log($mainImage.selector);
        $this.parents(".b-abcd1-ololo-photos").find($mainImage.selector).attr('src', $this.attr('data-img-big'));
        $this.parents(".b-abcd1-ololo-photos").find('.main-img-href').attr('href', $this.attr('data-img-big'));
    });
});