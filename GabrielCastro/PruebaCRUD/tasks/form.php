
<form action="./crud_code<?php echo (($is_editting) ? "/edit.php?id=$id" : "/save_task.php"); ?>" method="POST" class="form">
	<div class="form-group">
		<input type="text" name="title" class="form-control text-input" required
		autofocus <?php echo (($is_editting) ? "value='$title'" : "placeholder='Task Title'");?>>
	</div>
	<div class="form-group">
		<textarea name="description" rows="3" <?php if (!$is_editting) {echo "placeholder='Task Description'";}?>
		class="form-control text-input" required><?php if ($is_editting) {echo $description;}?></textarea>
	</div>
	<div class="m-2">
		<div class="d-flex">
			<input type="submit" class="btn btn-success btn-block" name="<?php echo (($is_editting) ? "edit_task" : "save_task");?>"
			value="<?php echo (($is_editting) ? "Edit Task" : "Save Task");?>">
		</div>
	</div>
</form>
