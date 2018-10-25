<!DOCTYPE Html>
<html lang="en">

<head>
	<title>InkOwly</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php include 'modules/common/_head-scripts.php'?>
</head>

<body class="" data-spy="scroll" data-target=".navbar-nav">
	<div class="container-wrapper">
		<?php include 'modules/common/_header.php';?>
		<div class="content">

			<section class="section" id="home">
				<div class="section-content">
					<?php include 'modules/banners/banner-single.php'?>
				</div>
			</section>

			<section class="section" id="about">
				<div class="section-content">
					<?php include "modules/_about.php"?>
				</div>
			</section>

			<section class="section" id="education">
				<div class="section-content">
					<?php include "modules/_education.php"?>
				</div>
			</section>

			<section class="section" id="skils">
				<div class="section-content">
					<?php include "modules/_skils.php"?>
				</div>
			</section>

			<section class="section" id="work">
				<div class="section-content">
					<?php include "modules/_work.php"?>
				</div>
			</section>

			<section class="section" id="contact">
				<div class="section-content">
					<?php include "modules/_contact.php"?>
				</div>
			</section>
		</div>
		<?php include 'modules/common/_footer.php';?>
	</div>
	<?php include 'modules/common/_footer-js-scripts.php';?>
</body>

</html>