$(".start").click(function() {
    $(".start").hide();
    $(".out2").show();
    $(".firstq").show();
    $(".firstopt").show();
    $(".firstanswer").show();
    $(".firstanswer").css("font-size", "20px");
    $(".firstsubmit").css("font-size", "20px");
    $(".firstsubmit").show();
    $(".first").css("text-align", "center");

});

$(".firstsubmit").click(function() {
    $(".firstq").hide();
    $(".firstopt").hide();
    $(".firstanswer").hide();
    $(".firstsubmit").hide();
    $(".transition").show();
    $(".transition").css("font-size", "20px");
    $(".trans").css("text-align", "center");
});

$(".transition").click(function() {
    $(".transition").hide();
    $(".secondq").show();
    $(".secondanswer").show();
    $(".secondsubmit").show();
    $(".secondopt").show();
    $(".second").css("text-align", "center");
    $(".result").show();
    $(".secondanswer").css("font-size", "20px");
    $(".secondsubmit").css("font-size", "20px");
    $(".result").css("font-size", "20px");
});

$(".result").click(function() {
    let firstInput = $(".firstanswer").val();
    let secondInput = $(".secondanswer").val();
    if (firstInput === "Intelligent" && secondInput >= 6) {
        $(".phin").hide();
        $(".drdoof").hide();
        $(".can").hide();
        $(".secondq").hide();
        $(".secondsubmit").hide();
        $(".secondanswer").hide();
        $(".result").hide();
        $(".resultname").text("You got Ferb!");
        $(".secondopt").text("A quiet and stoic boy who is incredibly savvy in mechanics, you often help your best friend Phineas create whatever genius contraption you both need in order to continue your latest scheme. You are courageous, and will stay calm no matter the circumstances.");
        $(".secondopt").css("color", "#3d1185");
        $(".secondopt").css("font-size", "35px");

    } else if (firstInput === "Intelligent" && secondInput <= 5) {
        $(".feb").hide();
        $(".drdoof").hide();
        $(".can").hide();
        $(".secondq").hide();
        $(".secondsubmit").hide();
        $(".secondanswer").hide();
        $(".result").hide();
        $(".resultname").text("You got Phineas!");
        $(".secondopt").text("A selfless, cheerful and creative boy who often creates unconventional activities as a means to beat boredom. You have a pathological need to invent and won’t let anything stop you from completing your scheme with Ferb.");
        $(".secondopt").css("color", "#852411");
        $(".secondopt").css("font-size", "35px");

    } else if (firstInput === "Creative" && secondInput <= 5) {
        $(".feb").hide();
        $(".drdoof").hide();
        $(".can").hide();
        $(".secondq").hide();
        $(".secondsubmit").hide();
        $(".secondanswer").hide();
        $(".result").hide();
        $(".resultname").text("You got Phineas!");
        $(".secondopt").text("A selfless, cheerful and creative boy who often creates unconventional activities as a means to beat boredom. You have a pathological need to invent and won’t let anything stop you from completing your scheme with Ferb.");
        $(".secondopt").css("color", "#852411");
        $(".secondopt").css("font-size", "35px");

    } else if (firstInput === "Creative" && secondInput >= 6) {
        $(".phin").hide();
        $(".drdoof").hide();
        $(".can").hide();
        $(".secondq").hide();
        $(".secondsubmit").hide();
        $(".secondanswer").hide();
        $(".result").hide();
        $(".resultname").text("You got Ferb!");
        $(".secondopt").text("A quiet and stoic boy who is incredibly savvy in mechanics, you often help your best friend Phineas create whatever genius contraption you both need in order to continue your latest scheme. You are courageous, and will stay calm no matter the circumstances.");
        $(".secondopt").css("color", "#3d1185");
        $(".secondopt").css("font-size", "35px");

    } else if (firstInput === "Ambitious" && secondInput >= 6) {
        $(".can").hide();
        $(".phin").hide();
        $(".feb").hide();
        $(".secondq").hide();
        $(".secondsubmit").hide();
        $(".secondanswer").hide();
        $(".result").hide();
        $(".resultname").text("You got Dr. Doofenshmirtz!");
        $(".resultname").css("color", "#11853a");
        $(".resultname").css("font-size", "35px");
        $(".secondopt").text("An evil scientist who seeks to rule the Tri-state Area. You often build elaborate inventions to wreak low-level havoc. Your abusive and traumatic past is the motivation behind many of your evil schemes. ");
        $(".secondopt").css("color", "#11853a");
        $(".secondopt").css("font-size", "35px");

    } else if (firstInput === "Ambitious" && secondInput <= 5) {
        $(".phin").hide();
        $(".feb").hide();
        $(".drdoof").hide();
        $(".secondq").hide();
        $(".secondsubmit").hide();
        $(".secondanswer").hide();
        $(".result").hide();
        $(".resultname").text("You got Candace!");
        $(".secondopt").text("Obsessed with teenage boys, clothes and talking on the phone, you are also obsessed with trying to bust Phineas and Ferb for their outlandish schemes. You are prone to overreact to things, big or small and have a need to be in charge whenever mom and dad are away.");
        $(".secondopt").css("color", "#c44372");
        $(".secondopt").css("font-size", "35px");
    } else if (firstInput === "Persistent" && secondInput <= 5) {
        $(".phin").hide();
        $(".feb").hide();
        $(".drdoof").hide();
        $(".secondq").hide();
        $(".secondsubmit").hide();
        $(".secondanswer").hide();
        $(".result").hide();
        $(".resultname").text("You got Candace");
        $(".secondopt").text("Obsessed with teenage boys, clothes and talking on the phone, you are also obsessed with trying to bust Phineas and Ferb for their outlandish schemes. You are prone to overreact to things, big or small and have a need to be in charge whenever mom and dad are away.");
        $(".secondopt").css("color", "#c44372");
        $(".secondopt").css("font-size", "35px");
    } else if (firstInput === "Persistent" && secondInput >= 6) {
        $(".can").hide();
        $(".phin").hide();
        $(".feb").hide();
        $(".secondq").hide();
        $(".secondsubmit").hide();
        $(".secondanswer").hide();
        $(".result").hide();
        $(".resultname").text("You got Dr. Doofenshmirtz!");
        $(".secondopt").text("An evil scientist who seeks to rule the Tri-state Area. You often build elaborate inventions to wreak low-level havoc. Your abusive and traumatic past is the motivation behind many of your evil schemes. ");
        $(".secondopt").css("color", "#11853a");
        $(".secondopt").css("font-size", "35px");
    } else {
        $(".second").hide();
    }
});