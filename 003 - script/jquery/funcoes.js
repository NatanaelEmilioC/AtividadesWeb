//Sintaxe:
//$(seletor).acao();

$(document).ready( function(){
    console.log("documento carregado.");

    $("p").click(function () {
        $(this).hide();
    });

    //ocultar
    $("button[name='ocultar']").click(function () {
        //$("div[id='texto']").hide();
        $("#texto").hide();
        $("#links").hide();
    });

    //exibir
    $("button[name='exibir']").click(function () {
       $("#texto").show();
       $("#links").show();
    });

    $("button[name='alternar']").click(function () {
        $("#texto").toggle("slow");
        $("#links").toggle("slow");

        $("p").addClass("text-uppercase");
        $("p").removeClass("text-danger");


        $("#titulo").toggleClass("jumbotron");

        $("button").toggleClass("btn btn-primary");


        //$("#mudar").text("Mudar");
        if($("#mudar").text() == "Alternar"){
            $("#mudar").text("Aparecer");}
        else{
            $("#mudar").text("Alternar");
        };

    });
});
