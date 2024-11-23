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
   <?php
// Verifica se o formulário foi enviado via método POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Captura os valores enviados do formulário
    $email = $_POST['email'];
    $numero = $_POST['numero'];
    $pagamento = $_POST['pagamento'];
    $regiao = $_POST['regiao'];

    // Exibe os valores na tela (substitua por lógica de banco de dados ou envio de e-mail)
    echo "<h1>Dados recebidos</h1>";
    echo "<p><strong>E-mail:</strong> $email</p>";
    echo "<p><strong>Número:</strong> $numero</p>";
    echo "<p><strong>Forma de Pagamento:</strong> $pagamento</p>";
    echo "<p><strong>Região de São Paulo:</strong> $regiao</p>";
} else {
    // Exibe mensagem caso o acesso não seja via POST
    echo "Formulário não foi enviado corretamente.";
}
?>

   </main>
  
</body>
</html>