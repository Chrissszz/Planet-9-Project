<?php
echo "this page is working";
require 'includes\dbh.inc.php';
session_start();
$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

// Prepare the SQL query
//$stmt = $conn->prepare("SELECT password, cart, FROM accounts WHERE email = :email");
//$stmt->bindParam(':email', $username);

// Execute the statement

$stmt = $conn->prepare("SELECT password, cart FROM accounts WHERE email = :email");
$stmt->bindParam(':email', $username);
$stmt->execute();

if ($user = $stmt->fetch()) {
    if (password_verify($password, $user['password'])) {
        // If the password is correct, start the session
        $_SESSION["loggedin"] = true;
        $_SESSION["username"] = $username;

        // Get the cart items from the database and decode the JSON into an array
        $_SESSION['cart'] = json_decode($user['cart'], true);

        // Redirect the user to the index page
        header("Location:index.php");
        exit();
    } else {
        echo "Invalid login";
    }
} else {
    echo "Could not find the username";
}