<?php
	include("includes/header.php");

	$conn_err_code = "No se puede establecer una conexión ya que el equipo de destino denegó expresamente dicha conexión";
	function warning_manager($errno, $errstr){
		echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
		<strong>Warning!</strong> $errstr
		</div>";
	}

	function conn_error($errstr){
		echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
		<strong>Error!</strong> $errstr
		</div>";
		$conn_err_code = null;
	}
	
?>
	<section class="container all">
		<div class="row">
			<div class="col-6">
				<h1>Create a New Task</h1>
			</div>
			<div class="func_buttoms col-6">
				<a href="./index.php" class="btn btn-danger m-3"><i class="fa-solid fa-xmark"></i></a>
			</div>
		</div>
		<div class="row m-3">
			<div class="card card-body">
				<?php
					$is_editting = false;
					set_error_handler("warning_manager", E_WARNING);
					include_once("./form.php");
					if (isset($_GET['error']))
						conn_error($conn_err_code);
				?>
			</div>
		</div>
	</section>
<?php include ("./includes/footer.php"); ?>
