/*
* comentários
*/

function validar(campo, alerta, label) {

    var n = parseFloat(campo.value);

    if(campo.value.length == 0 || isNaN(n)){
        //Erro
        document.getElementById("alerta").style.display ="block";

        document.getElementById("label").classList.add("text-danger");

        campo.classList.add("is-invalid");

        campo.value = "";
        campo.focus();

        return false;
    }

    //tudo correto
    document.getElementById("alerta").style.display = "none";
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    document.getElementById("label").classList.remove("text-danger");
    document.getElementById("label").classList.add("text-success");

    return true;
}

function calcular() {

    var v1 = document.dados.valor1;
    var v2 = document.dados.valor2;

    if(validar(v1,"alerta1","labelv1") && validar(v2,"alerta2","labelv2")){

    var n1 = parseFloat(v1.value);
    var n2 = parseFloat(v2.value);

    var res = n1 + n2;

    document.dados.resultado.value = res;
}


}


function calcular1() {

    var v1 = document.dados.valor1;
    var v2 = document.dados.valor2;

    var n1 = parseInt(v1.value);
    var n2 = parseInt(v2.value);

    if( v1.value.length == 0 || isNaN(n1) ){
        //window.alert("Preencha o valor corretamente!");
        //document.getElementById("alerta1").innerHTML = "Preencha o primeiro valor corretamente";
        document.getElementById("alerta1").style.display ="block";

        document.getElementById("labelv1").classList.add("text-danger");

        v1.classList.add("is-invalid");

        v1.value = "";
        v1.focus();

        return;
    }

    document.getElementById("alerta1").style.display = "none";
    v1.classList.remove("is-invalid");
    v1.classList.add("is-valid");
    document.getElementById("labelv1").classList.remove("text-danger");
    document.getElementById("labelv1").classList.add("text-success");


    if( v2.value.length == 0 || isNaN(n2) ){
        //window.alert("Preencha o valor corretamente!");
        //document.getElementById("alerta1").innerHTML = "Preencha o primeiro valor corretamente";
        document.getElementById("alerta2").style.display ="block";

        document.getElementById("labelv2").classList.add("text-danger");

        v2.classList.add("is-invalid");

        v2.value = "";
        v2.focus();

        return;
    }

    document.getElementById("alerta2").style.display = "none";
    v2.classList.remove("is-invalid");
    v2.classList.add("is-valid");
    document.getElementById("labelv2").classList.remove("text-danger");
    document.getElementById("labelv2").classList.add("text-success");



    var res = n1 + n2;

    document.dados.resultado.value = res;

}
