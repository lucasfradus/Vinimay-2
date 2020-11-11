<?php
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['firstName']) && empty($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    ); 
    exit();
}

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'Nuevo contacto en Web Vinimay: ' . $_POST['firstName'];
    $from = $_POST['email'];

    $email_message = "Detalles del contacto.\n\n";
    $email_message .= "Fecha: " . date("F j, Y, g:i a") . "\n";
    $email_message .= "Nombre: " . $_POST['firstName'] . "\n";
    $email_message .= "Apellido: " . $_POST['lastName'] . "\n";
    $email_message .= "Email: " . $_POST['email'] . "\n";
    $email_message .= "Mensaje: " . $_POST['msg'] . "\n";


  
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject, $email_message);
    $sendEmail->send();
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}