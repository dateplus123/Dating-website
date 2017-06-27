<?php 
session_start();

include ('server.php'); 
require_once('app/init.php') ?>

<!DOCTYPE html>
<html>
<head>

  <meta charset="UTF-8">
  

	<title>Registeration, login and logout user in php mysql</title>
	<link rel="stylesheet" type = "text/css" href="style1.css">

</head>
<body>


	<?php if(!isset($_SESSION['facebook'])): ?>
	<a href = "<?php echo $facebook->getLoginUrl(); ?>"><button type = "Sign up with Facebook" class = 'btn1'>Sign up with Facebook</button></a></div>
	<?php  else: ?>
	<p>You are signed in, <?php echo $user['name']; ?> <a href = "signout.php">Signout</a></p>
	<?php endif ?>

	



	<div class="header">
		<h2>Create an account</h2>
	</div>

<form  method="post" action="register.php" autocomplete="=off">

<?php if(isset($_GET['err'])) { ?>
	<div class = "error"><?php echo $_GET['err']; ?></div>

<?php } ?>


<?php include 'errors.php'; ?>

	<div class="input-group">
		<label>Username</label>
		<input type = "text" name ="username"   value="<?php echo $username; ?>" >
	</div>

	<div class="input-group">

		<label>Email</label>
		<input type = "text" name ="email"  value="<?php echo $email; ?>" >
	</div>

	<div class="input-group">
		<label>Password</label>
		<input type = "password" name ="password">
	</div>

	<div class="input-group">
		<label>Re-enter password</label>
		<input type = "password" name ="password2">
	</div>
	<br>


	<div class="input-group">
		<button type ="submit" name = "register" class="btn" >Register</button>
	
	</div>
    
	<br>
	
	
	
	
	<p>
		Already a member? <a href="log.php">Sign in</a>
	</p>
	

</form>
</body>
</html> 

