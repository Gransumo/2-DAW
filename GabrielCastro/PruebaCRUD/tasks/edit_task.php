<?php
	include("includes/header.php");
	function warning_manager($errno, $errstr){
		echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
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
				<h1>Edit Task</h1>
			</div>
			<div class="func_buttoms col-6">
				<a href="./index.php" class="btn btn-danger m-3"><i class="fa-solid fa-xmark"></i></a>
			</div>
		</div>
		<div class="row m-3">
			<div class="card card-body">
				<?php
					set_error_handler ("warning_manager", E_WARNING);
					$is_editting = false;
					if (isset($_GET['id'])) {
						try {
							$status = include_once("./conexion/conexion.php");
							if ($status) {
								$is_editting = true;
								$id = $_GET['id'];
								$query = "SELECT * FROM tareas WHERE id = $id";
								$result = mysqli_query($conn, $query);
								if (mysqli_num_rows($result) == 1) {
									$row = mysqli_fetch_array($result);
									$title = $row['nombre'];
									$description = $row['descripcion'];
								}
								include_once("./form.php");
							}
						} catch (mysqli_sql_exception $th) {
							error_manager($th->getMessage());
						} catch (mysqli_query $th) {
							error_manager($th->getMessage());
						}
					}
				?>
			</div>
		</div>
	</section>
<?php include ("./includes/footer.php"); ?>
