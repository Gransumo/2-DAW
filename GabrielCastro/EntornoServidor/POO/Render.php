<?php
require "Slug.php";

class Render {
	
	function sanitize() {
		$slug = new Slug();
		return ($slug);
	}

}

?>