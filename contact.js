let app = Vue.createApp({
})
app.component('login-form', {
    template: `
        <form @submit.prevent="handleSubmit">
            <label class="label" for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name..">
        
            <label class="label" for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    
            <label class="label" for="email">Your Email (Required) </label>
            <input type="text" id="email" name="email" placeholder="Your email..">

            <label class="label" for="country">Country</label>
            <select id="country" name="country">
              <option value="Select Country"> Select Country </option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label class="label"> Your Program</label>
            <select id="program" name="program">
              <option value="Select Program"> Select Program </option>
              <option value="GameFit">GameFit</option>
              <option value="Speed">Speed</option>
              <option value="Ball Control">Ball Control</option>
              <option value="Off-Season">Off-Season</option>
              <option value="In-Season">In-Season</option>
              <option value="Physique Specific">Physique Specific</option>
            </select>

            <label class="label" for="subject">Your Message</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

            <input type="submit" value="Submit">
        </form>
    `
})
app.mount('#app')