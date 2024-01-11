<?php
	include("includes/header.php");
	function warning_manager($errno, $errstr){
		echo "<div class='alert alert-da nger alert-dismissible fade show' role='alert'>
		<strong>Warning!</strong> $errstr
		</div>";
	}
	
	function error_manager($errstr){
		echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
		<strong>Error!</strong> $errstr
		</div>";
	}
?>
		<section class="container all">
			<div class="row">
				<div class="col-6">
					<h1>My Tasks</h1>
				</div>
				<div class="func_buttoms col-6">
					<a href="add_task.php" class="btn btn-success m-3"><i class="fas fa-plus"></i></a>
				</div>
			</div>
			<div class="row m-3">
				<div class="card card-body">
					<?php
						try {
							set_error_handler("warning_manager", E_WARNING);
							$status = include_once("./conexion/conexion.php");
							if ($status)
								include_once("./crud_code/list.php");
						}
						catch (mysqli_sql_exception $th) {
							error_manager ($th->getMessage());
						}
					?>
					
				</div>
			</div>
		</section>

<?php include("includes/footer.php"); ?>