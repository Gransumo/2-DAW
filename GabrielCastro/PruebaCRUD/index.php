<?php include("conexion.php");

$is_editting = false;
$editting_id;

if (isset($_GET['id'])) {
	$is_editting = true;
	$editting_id = $_GET['id'];
	$query = "SELECT * FROM tareas WHERE id = $editting_id";
	$result = mysqli_query($conn, $query);
	while($row = mysqli_fetch_array($result)) {
		$title = $row['nombre'];
		$description = $row['descripcion'];
	}
}


?>
<?php include("includes/header.php");?>
<div class="container p-4">
	<div class="row">
		<div class="col-md-4">
			<?php if (isset($_SESSION['message'])) { ?>
				<div class="alert alert-<?= $_SESSION['message_type']?> alert-dismissible fade show" role="alert">
					<?= $_SESSION['message'] ?>
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
			<?php session_unset(); } ?>
			<div class="card card-body">
				<form action="<?php echo (($is_editting) ? "./edit.php?id=$editting_id" : "./save_task.php");?>" method="POST">
					<div class="form-group">
						<input type="text" name="title" class="form-control"
						placeholder="Task Title" autofocus <?php echo (($is_editting) ? "value=$title" : "required"); ?>>
					</div>
					<div class="form-group">
						<textarea name="description" rows="2" class="form-control"
						placeholder="Task Description" <?php echo ((!$is_editting) ? "required" : ""); ?>><?php echo (($is_editting) ? "$description" : ""); ?></textarea>
					</div>
					<input type="submit" class="btn btn-success btn-block"
					name="save_task" value="<?php echo (($is_editting) ? "Edit" : "Save Task");?>">
				</form>
			</div>
		</div>
		<div class="col-md-8">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nombre</th>
						<th>Descripcion</th>
						<th>Fecha</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					<?php
						
						$query = "SELECT * FROM tareas";
						$result = mysqli_query($conn, $query);

						while($row = mysqli_fetch_array($result)) {?>
							<tr>
								<td><?php echo $row['id'] ?></td>
								<td><?php echo $row['nombre'] ?></td>
								<td><?php echo $row['descripcion'] ?></td>
								<td><?php echo $row['fecha'] ?></td>
								<td>
									<a href="index.php<?php echo (($is_editting && $editting_id == $row['id']) ? "" : "?id=".$row['id']);?>" class="btn btn-secondary">
										<?php echo (($is_editting && $editting_id == $row['id']) ? "STOP EDIT" : "EDIT"); ?>
										<i class="bi bi-pencil-square"></i>
									</a>
									<a href="delete_task.php?id=<?php echo $row['id']?>" class="btn btn-danger">
										DELETE
										<i class="far fa-trash-alt"></i>
									</a>
								</td>
							</tr>
						<?php } ?> 
					<!-- <script src="./load_data.js"></script> -->
				</tbody>
			</table>
		</div>
	</div>
</div>
<?php include("includes/footer.php"); ?>