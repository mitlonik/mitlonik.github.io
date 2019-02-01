$(function(){
    var $menu_item1 = $('#menu-item-1'),
        $menu_item2 = $('#menu-item-2'),
        $menu_item3 = $('#menu-item-3'),
        $content = $('#dynamic');
 
    $menu_item1.click(function(){
        $content.text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error optio eligendi itaque dolorem asperiores iure in assumenda nostrum earum. Odio, ab, maxime. Nisi et sequi, hic doloremque consectetur quam modi.");
    });
 
    $menu_item2.click(function(){
        $content.text("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    });
 
    $menu_item3.click(function(){
        $content.text("Hello world");
    });
});
