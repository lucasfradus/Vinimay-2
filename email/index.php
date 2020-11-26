<?php 
$sendTo = 'lucas.fradusco@gmail.com';
$subject = "test";
$from = 'From: Lucas - Contacto<lucas.fradusco@gmail.com>';


 // Para enviar un correo HTML, debe establecerse la cabecera Content-type
 $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
 $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

 // Cabeceras adicionales
 $cabeceras .= 'To:' . $sendTo ."\r\n";
 $cabeceras .=  $from . "\r\n";

$emailText = file_get_contents('welcome.html');





if(mail($sendTo, $subject, $emailText, $cabeceras)){
    echo "se envio";
}else{
    echo "error al enviar";
}
