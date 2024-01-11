
<table class="table">
	<thead>
		<tr>
			<th>Title</th>
			<th>Description</th>
			<th>Created At</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		<?php
			$query = "SELECT * FROM tareas";
			$result = mysqli_query($conn, $query);
			while($row = mysqli_fetch_array($result)) { ?>
		<tr>
			<td><?php echo $row['nombre'] ?></td>
			<td><?php echo $row['descripcion'] ?></td>
			<td><?php echo $row['fecha'] ?></td>
			<td>
				<a href="edit_task.php?id=<?php echo $row['id']?>" class="btn btn-secondary">
					<i class="fas fa-marker"></i>
				</a>
				<a href="./crud_code/delete_task.php?id=<?php echo $row['id']?>" class="btn btn-delete">
					<i class="fa-regular fa-trash-can"></i>
				</a>
			</td>
		</tr>
		<?php }
?>
</tbody>		
</table>
				