<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "enkr99@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    if(mail($mailTo, "From My Website", $message, $headers)) {
        echo "<h1>Sent successfully!</h1>";
    } else {
        echo "Something went wrong...";
    }

    // header("Localtion: index.html");

}


?>