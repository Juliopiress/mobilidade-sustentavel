<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <header>
     <h1>Resultado do processamento</h1>
   </header>
   <main>
   <?php //Tag para colocar os codigos em php

    // Captura os valores enviados do formulário
    $nome = $_GET['nome'];
    $email = $_GET['email'];
    $numero = $_GET['numero'];
    $pagamento = $_GET['pagamento'];
    $regiao = $_GET['regiao'];

    //------------------------- Exibe os valores na tela usando as tags do html ---------------------------
    echo "<h1>Dados recebidos</h1>";
    echo "<p>Nome: $nome </p>";
    echo "<p>E-mail: $email</p>";
    echo "<p>Número: $numero</p>";
    echo "<p>Sua forma de pagamento foi: $pagamento</p>";
    echo "<p>Região de São Paulo: $regiao</p>";

//  Agradecimentos 
echo "É um prazer te conhecer, $nome: esse é o meu site que fiz junto com Edy, Leandro, Bruno, matheus e Daniela obrigado a todos!";
 ?> 

<p><a href="javascript:history.go(-1)">Voltar para página anterior</a></p>

   </main>
  
</body>
</html>