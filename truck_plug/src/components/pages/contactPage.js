import React from 'react';

function Contactpage() {

    function callToGoogle(){ 
                 
        const scriptURL = 'https://script.google.com/macros/s/AKfycbz-EigNVxQGuYe2HlaMKnvFiarfgNuQ6wWDrkJIAdco8cTMNqX0/exec'
        const form = document.forms['submit-to-google-sheet']
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })       
    }

  return (
    

      <html>
      <head>
          <title>Contact Page</title>
      </head>

      <body>
        <div class="owner-title">
            <h1>Get in touch with us!</h1>
            <br/>
            <h2>If you have any questions or want to give us any suggestions
                about our service, fill out our form below</h2>
        </div> 

            <div class="owner-container">
            <form class="gform" method="POST" data-email="example@email.net" 
            action="https://script.google.com/macros/s/AKfycbz-EigNVxQGuYe2HlaMKnvFiarfgNuQ6wWDrkJIAdco8cTMNqX0/exec">
                <ul class="flex-outer">
                    <li>
                        <label class="required">Full Name</label>
                        <input name="fullName" type="text" className="form-control" placeholder="Full Name" required/>
                    </li>
                    <li>
                        <label class="required">Email Address</label>
                        <input name="email" type="email" className="form-control" placeholder="Email Address" required/>
                    </li>
                    <li>
                        <label class="required">Message</label>
                        <textarea name="message" className="form-control" placeholder="Enter your message here" rows="6" maxlength="250"
                        spellCheck="true"></textarea>
                    </li>
                    <li>
                        <button type="submit">Submit</button>
                    </li>
                </ul>

                {/* <input name="fullName" type="text" className="form-control" placeholder="Your Name" required/>
                    <input name="email" type="email" className="form-control" placeholder="Your Email" required/>
                        <textarea name="message" className="form-control" placeholder="Message" rows="4" maxlength="250"
                        spellCheck="true"></textarea>
                            <input type="submit" class="form-control submit" value="Send Message"/> */}
            </form>
         </div>
      </body>

</html>



  ); //return


} // Contactpage()


export default Contactpage;
