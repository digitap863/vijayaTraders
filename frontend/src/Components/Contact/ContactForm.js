import React from 'react'
import './ContactForm.css'
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
function ContactForm() {
  return (
    <div className='contactForm'>
        <section class="mb-4">

<h2 class="h1-responsive font-weight-bold text-center my-4 contactUs">Contact us</h2>

<div class="row">

    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div class="row">

                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control"/>
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
               
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control"/>
                        <label for="email" class="">Your email</label>
                    </div>
                </div>

            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>
            
            <div class="row">

                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary formBtn">Send</a>
        </div>
        <div class="status"></div>
    </div>
    <div class="col-md-3 text-center formData" >
        <ul class="list-unstyled mb-0">
            <li><HomeIcon/>
                <p className='addressData'>San Francisco, CA 94126, USA</p>
            </li>

            <li><PhoneAndroidIcon/>
                <p className='addressData'>+ 01 234 567 89</p>
            </li>

            <li><EmailIcon/>
                <p className='addressData'>contact@mdbootstrap.com</p>
            </li>
        </ul>
    </div>

</div>

</section>
    </div>
  )
}

export default ContactForm