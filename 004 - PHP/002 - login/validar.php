<?php

//$user = $_GET['usuario'];
$user = $_POST['usuario'];
//$password = $_GET['senha'];
$password = $_POST['senha'];

//metodo para debugar durante desenvolvimento
//echo "GET";
//var_dump($_GET);
//echo "POST";
//var_dump($_POST);

//conexao ou recuperação da conexão com BD
//SUBMETER OS DADOS AO MODEL

//controller

if($user == "admin" && $password == "123456"){
    echo "<h1>Seja bem-vindo(a) $user!</h1>";
    echo "<h1>Senha: $password!</h1>";
}else{
    echo "<h1>Usuário e/ou senha inválidos!</h1>";
}
echo "<a href=\"index.php\">Voltar</a>";
