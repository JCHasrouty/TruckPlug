import React from 'react';

function Ownerpage() {

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
          <title>Add Truck Page</title>
      </head>

      <body>
        <div class="owner-title">
            <h1>Are you an owner? <br /> Is your truck not listed in our database?</h1>
            <h2>Fill out this form and well get you up and running!</h2>
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
                  <input name="email" type="email" className="form-control" placeholder="Email" required/>
                </li>
                <li>
                  <label class="required">Truck Name</label>
                  <input name="truckName" type="text" className="form-control" placeholder="Truck Name" required/>
                </li>
                <li>
                  <label class="required">Truck Address</label>
                  <input name="truckAddress" type="text" className="form-control" placeholder="Truck Address" required/>
                </li>
                <li>
                  <label>Website (If Applicable)</label>
                  <input name="website" type="text" className="form-control" placeholder="Website URL"/>
                </li>
                <li>
                  <button type="submit">Submit</button>
                </li>
              </ul>
            </form>
        </div>
        
      </body>

</html>
  ); //return
}

export default Ownerpage;
