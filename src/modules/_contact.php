<div class="container sec-contact">
    <div class="row">

        <div class="col-12 col-lg-8 offset-lg-2">
            <h2 class="sec-title  br-line">
                Contact
            </h2>
            <p class="text-center">PradeepUI templates are created with the latest version of Bootstap. 100% responsive design and is beautifully displayed on all devices. All the files are clearly organized and it’s easy to use and edit them for your needs.</p>
        </div>
    </div>
    <div class="row mt-5 sec-contact__info text-center mb-5">
        <div class="col-12 col-md-4 mb-4">
            <span class="fa fa-phone"></span>
            <span class="d-block">
                +91 (123) 4567890
            </span>
        </div>
        <div class="col-12 col-md-4 mb-4">
            <span class="fa fa-envelope"></span>
            <span class="d-block">
                <a href="mailto:inkowly@gmail.com">inkowly(@)gmail.com</a>
            </span>
        </div>
        <div class="col-12 col-md-4 mb-4">
            <span class="fa fa-map-marker"></span>
            <span class="d-block">
                Bangalore, Karnataka
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col-12  text-center">
            <ul class="list-inline social mb-5">
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
            <!-- Contact form Response Container-->
            <div id="error-msg"></div>
            <button data-toggle="modal" data-target="#contactForm" class="btn btn-custom">Get In Touch</button>
        </div>
    </div>
</div>

<!-- Bootstrap Modal Contact form-->
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
