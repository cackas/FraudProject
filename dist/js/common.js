//Кнопка адаптивного меню
$(document).ready(function(){
	//Mail
    $("#form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            th.trigger("reset");
            $(".form-success").fadeIn(300);
            setInterval(function(){
                $(".form-success").fadeOut(300);
            }, 3000)
        });
        return false;
      });

    $(".close").click(function() {
        $(".form-success").fadeOut(300);
    });

    ResponsiveMode();
    
    $(".cmn-toggle-switch").click(function() {
        $(".menu--ad").fadeToggle(300);
    });

    function ResponsiveMode() {

        "use strict";
    
        var toggles = document.querySelectorAll(".cmn-toggle-switch");
    
        for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
        };
    
        function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
        }
    
    }

});