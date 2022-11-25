import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import './ContactForm.css'
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
function ContactForm() {

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const onSubmit=async ({name,email,subject,message})=>{
        try {
            const submit= await axios.post(
                "/api/admin/send-email",
                {name,email,subject,message}
              );
        } catch (error) {
            console.log(error);
        }
        
      }
  return (
    <div className='contactForm'>
        <section class="mb-4">

<h2 class="h1-responsive font-weight-bold text-center my-4 contactUs">Contact us</h2>

<div class="row">

    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={handleSubmit(onSubmit)}>

            <div class="row">

                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control" {...register('name', { required: true })} />
                        <label for="name" class="">Your name</label>
                       <small className="text-danger">{errors.name?.type === "required" && "Name is required"}</small>
                    </div>
                </div>
               
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}/>
                        <label for="email" class="">Your email</label>
                        <small className="text-danger">
                            {errors.email?.type === "required" && "Email is required"}
                          {errors.email?.type === "pattern" &&
                        "Entered email is in wrong format"}</small>
                    </div>
                </div>

            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" {...register('subject', { required: true },{message:'This field is required'})}/>
                        <label for="subject" class="">Subject</label>
                         <small className="text-danger">{errors.subject?.type === "required" && "Subject is required"}</small>
                    </div>
                </div>
            </div>
            
            <div class="row">

                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" {...register('message', { required: true },{message:'This field is required'})}></textarea>
                        <label for="message">Your message</label>
                        <small className="text-danger">{errors.message?.type === "required" && "Message is required"}</small>
                    </div>

                </div>
            </div>
            <div class="text-center text-md-left">
            <input type="submit"  className="btn btn-primary formBtn"/>
        </div>

        </form>

        
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