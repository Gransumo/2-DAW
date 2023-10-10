const imagenes = {
	JAVA: "../../img/java.jpg",
	JAVASCRIPT: "../../img/JavaScript.jpg",
	HTML: "../../img/html.jpg",
	CSS: "../../img/css.jpg",
	PHP: "../../img/php.jpg",
	GITHUB: "../../img/github.jpg",
	WORKBENCH: "../../img/workbench.jpg",
	MONGODB: "../../img/mongodb.jpg",
	C: "../../img/c.jpg",
	CCC: "../../img/ccc.jpg",
	CARD: "../../img/C#.jpg",
	PHYTON: "../../img/phyton.jpg",
	DOCKER: "../../img/docker.jpg",
	ANGULAR: "../../img/angular.jpg",
	REACT: "../../img/react.jpg",
	SWIFT: "../../img/swift.jpg",
	AWS: "../../img/aws.jpg",
	NODE: "../../img/node.jpg",
};

function get_imgArray(len) {
	var random_keys = [];
	var IMGS_KEYS = Object.keys(imagenes);
	for (let i = 0; i < len / 2; i++) {
		let img_key;
		do {
			img_key = IMGS_KEYS[Math.floor(Math.random() * 18)];
		} while (is_repeat(random_keys, img_key));
		random_keys.push(img_key);
	}
	return (random_keys);
}

function get_gameTiles(len) {
	var gameNodes = [];
	var imgs = get_imgArray(len);
	for (let i = 0; i < imgs.length; i++)
	gameNodes.push(new tile(imgs[i], imagenes[imgs[i]]));
	gameNodes = fisher_yates(gameNodes.concat(gameNodes.slice()));
	return (gameNodes);
}
