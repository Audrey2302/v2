<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Sécurisation des données
  $name = htmlspecialchars(trim($_POST["name"]));
  $email = htmlspecialchars(trim($_POST["email"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  // Vérification rapide des champs
  if (empty($name) || empty($email) || empty($message)) {
    echo "<p style='text-align:center;color:red;font-family:sans-serif;'>Tous les champs sont obligatoires 😅</p>";
    exit;
  }

  // Adresse email de destination
  $to = "curbera.audrey@gmail.com";
  $subject = "💌 Nouveau message depuis ton site AC Web";
  $body = "Nom : $name\nEmail : $email\n\nMessage :\n$message";
  $headers = "From: $email\r\nReply-To: $email\r\n";

  // Envoi du mail
  if (mail($to, $subject, $body, $headers)) {
    header("Location: merci.html");
    exit;
  } else {
    echo "<p style='text-align:center;color:red;font-family:sans-serif;'>Erreur lors de l’envoi du message 😢</p>";
  }
}
?>