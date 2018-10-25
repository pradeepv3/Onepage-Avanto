<div class="container sec-contact wow flipInX ">
	<div class="row">
		<div class="col-12 col-lg-8 offset-lg-2">
			<h2 class="section-title  br-line">
				Contact
			</h2>
			<p class="text-center">English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family.</p>
		</div>
		<div class="col-12 mt-5 text-center">
			<p class="phone-number font-weight-bold ">+91 (123) 4567890</p>
			<ul class="list-inline social mt-4 mb-4">
				<li class="list-inline-item text-center">
					<a href="#">
						<span class="fa fa-facebook facebook"></span>
					</a>
				</li>
				<li class="list-inline-item text-center">
					<a href="#">
						<span class="fa fa-twitter twitter"></span>
					</a>
				</li>
				<li class="list-inline-item text-center">
					<a href="#">
						<span class="fa fa-google google-plus"></span>
					</a>
				</li>
				<li class="list-inline-item text-center">
					<a href="#">
						<span class="fa fa-linkedin linkedin"></span>
					</a>
				</li>
				<li class="list-inline-item text-center">
					<a href="#">
						<span class="fa fa-pinterest pinterest"></span>
					</a>
				</li>
			</ul>
			<div id="error-msg"></div>
			<button data-toggle="modal" data-target="#contactForm" class="btn btn-custom">Get In Touch</button>
		</div>
	</div>
</div>

<!-- Modal -->
<div class="modal fade" id="contactForm" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="contactModalLabel">Contact</h5>
				<a class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</a>
			</div>
			<div class="modal-body">
				<form id="contact-form" novalidate="">
					<div class="form-group">
						<label>Name</label>
						<input id="nameField" name="name" type="text" class="form-control" required/>
        				<div class="invalid-feedback">Please enter name.</div>
					</div>
					<div class="form-group">
						<label>Email</label>
						<input id="emailField" name="email" type="email" class="form-control" required />
						<div class="invalid-feedback">Please enter valid Email.</div>
					</div>
					<div class="form-group">
						<label>Phone</label>
						<input id="phoneField"  name="phone" type="number" class="form-control" required />
						<div class="invalid-feedback">Please enter Phone Number.</div>
					</div>
					<div class="form-group">
						<label>Message</label>
						<textarea id="messageField" name="message" class="form-control" ></textarea>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn" data-dismiss="modal">Close</button>
				<button type="button" class="btn" id="contactSubmit">Submit</button>
			</div>
		</div>
	</div>
</div>
