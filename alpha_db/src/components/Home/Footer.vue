<template>
	<section id="footer">
		<div class="container">
			<div
				class="row text-center text-xs-center text-sm-left text-md-left"
			></div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item">
							<a href="https://www.facebook.com/NETRONiX"
								><i class="fa fa-facebook"></i
							></a>
						</li>
						<li class="list-inline-item">
							<a href="https://www.fiverr.com/share/qb8D02"
								><i class="fa fa-twitter"></i
							></a>
						</li>
						<li class="list-inline-item">
							<a href="https://www.instagram.com/ahabbabid/"
								><i class="fa fa-instagram"></i
							></a>
						</li>
						<li class="list-inline-item">
							<a href="https://www.bing.com/"
								><i class="fa fa-google-plus"></i
							></a>
						</li>
					</ul>
				</div>
				<hr />
			</div>
			<div class="row">
				<div
					class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"
				>
					<p>Made with ❤ by Ahabb, Ali and Maaz.</p>
				</div>
				<hr />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Footer",
	components: {},
};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
section {
	padding: 60px 0;
}

section .section-title {
	text-align: center;
	color: #007b5e;
	margin-bottom: 50px;
	text-transform: uppercase;
}
#footer {
	background: #007b5e !important;
}
#footer h5 {
	padding-left: 10px;
	border-left: 3px solid #eeeeee;
	padding-bottom: 6px;
	margin-bottom: 20px;
	color: #ffffff;
}
#footer a {
	color: #ffffff;
	text-decoration: none !important;
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
}
#footer ul.social li {
	padding: 3px 0;
}
#footer ul.social li a i {
	margin-right: 5px;
	font-size: 25px;
	-webkit-transition: 0.5s all ease;
	-moz-transition: 0.5s all ease;
	transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
	font-size: 30px;
	margin-top: -10px;
}
#footer ul.social li a,
#footer ul.quick-links li a {
	color: #ffffff;
}
#footer ul.social li a:hover {
	color: #eeeeee;
}
#footer ul.quick-links li {
	padding: 3px 0;
	-webkit-transition: 0.5s all ease;
	-moz-transition: 0.5s all ease;
	transition: 0.5s all ease;
}
#footer ul.quick-links li:hover {
	padding: 3px 0;
	margin-left: 5px;
	font-weight: 700;
}
#footer ul.quick-links li a i {
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
	font-weight: 700;
}

@media (max-width: 767px) {
	#footer h5 {
		padding-left: 0;
		border-left: transparent;
		padding-bottom: 0px;
		margin-bottom: 10px;
	}
}
</style>
