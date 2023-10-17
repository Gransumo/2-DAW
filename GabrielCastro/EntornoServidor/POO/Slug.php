
<?php

class Slug {

	private String $render;

	public function render($string) {
		$render = str_replace($string, '-');
	}

}

?>
