<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Title</title>
</head>
<body>

<!--<form method="get" action="validar.php">-->
<form method="post" action="validar.php?acao=1">

    <label for="user">Usuário</label>
    <input type="text" name="usuario" value="" id="user">

    <label for="password">Senha</label>
    <input type="password" name="senha" value="" id="password">

    <input type="submit" name="btnAcessar" value="Acessar">
    <input type="reset" name="btnLimpar" value="Limpar">


</form>

</body>
</html>