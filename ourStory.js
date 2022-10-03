new Vue({
    el: '#app',
    data: {
      currentPage: 'home',
    },
    methods: {
      switchTo: function(page) {
        this.currentPage = page;
      },

    },
    components: {
      home: {
        template: `<div>
        <dt><span style="font-style: italic; line-height: 5px; text-decoration: underline; font-weight:bold">Origin of Webiste</span></dt>
                   <div class="subtext"> 
                    <dd>{{ sentence1 }}</dd>
                    <dd>{{ sentence2 }}</dd>
                    <dd>{{ sentence3 }}</dd>
                    <dd>{{ sentence4 }}</dd>
                    <dd>{{ sentence5 }}</dd>
                    <dd>{{ sentence6 }}</dd>
                   </div>

                   </div>`,
        data: function() {
          return {
            sentence1: "This webiste was designed as a project part of a unit Introduction to Responsive Web Applications at Deakin University.",    
            sentence2: 'The idea behind the website was to create a football shop of which cateres to footballers specifically looking to enahnce their football fitness.',
            sentence3: 's an experienced footballer, football fitness is the most vital element of the game and there is a big misconception among the modern times',
            sentence4: "where normal fitness is often connected to football fitness. This, however, couldn't be further from the truth. This website aims to allow",
            sentence5: 'individuals purchase a specific program which will clear up the misconceptions and fulfill their needs, ultimately making their football',
            sentence6: 'conditing elite!'
        }
        }
      },
      about: {
        template: `<div>
        <dt><span style="font-style: italic; line-height: 5px; text-decoration: underline; font-weight:bold">About the Author</span></dt>
                   <div class="subtext"> 
                   <dd>{{ name }}</dd>
                   <dd>{{ dob }}</dd>
                   <dd>{{ degree }}</dd>
                   <dd>{{ career }}</dd>
                   </div>
                   </div>`,
        data: function() {
          return {
            name: 'Name: Robert Tkatchenko',
            dob: 'DOB: 30/06/2002',
            degree: 'Degree: Information Technology, Specialising in Cyber Security',
            career: 'Football Career: Since 2007'
          }
        }
      },
      playingCareer: {
        template: `<div>
        <dt><span style="font-style: italic; line-height: 5px; text-decoration: underline; font-weight:bold">Playing Career</span></dt>
                   <ol> 
                   <li><dt><span style="font-style: italic; line-height: 5px; text-decoration: underline;">{{yr2022}}</span></dt></li>
                   <div class="subtext">
                   <dd>{{ subtext1 }}</dd>
                   <dd>{{ subtext2 }}</dd>
                   </div>
                   <li><dt><span style="font-style: italic; line-height: 5px; text-decoration: underline;">{{yr2021}}</span></dt></li>
                   <div class="subtext">
                   <dd>{{ subtext3 }}</dd>
                   <dd>{{ subtext4 }}</dd>
                   </div>
                   <li><dt><span style="font-style: italic; line-height: 5px; text-decoration: underline;">{{yr2020}}</span></dt></li>
                   <div class="subtext">
                   <dd>{{ subtext5 }}</dd>
                   <dd>{{ subtext6 }}</dd>
                   </div>
                   <li><dt><span style="font-style: italic; line-height: 5px; text-decoration: underline;">{{yr2019}}</span></dt></li>
                   <div class="subtext">
                   <dd>{{ subtext7 }}</dd>
                   <dd>{{ subtext8 }}</dd>
                   <dd>{{ subtext9 }}</dd>

                   </div>
                   <li><dt><span style="font-style: italic; line-height: 5px; text-decoration: underline;">{{yr2018}}</span></dt></li>
                   <div class="subtext">
                   <dd>{{ subtext10 }}</dd>
                   <dd>{{ subtext11 }}</dd>
                   <dd>{{ subtext12 }}</dd>
                   <dd>{{ subtext13 }}</dd>
                   <dd>{{ subtext14 }}</dd>
                   </div>
                   </ol>
                   </div>`,
        data: function() {
          return {
            yr2022: '2022',
            subtext1: '- Lorem ipsum dolor sit amet, consectetur adipiscing elite',
            subtext2: '- sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            yr2021: '2021',
            subtext3: '- Lacus sed viverra tellus in. Id velit ut tortor pretium viverra. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae',
            subtext4: '- Facilisi morbi tempus iaculis urna id volutpat',
            yr2020: '2020',
            subtext5: '- Aliquam purus sit amet luctus',
            subtext6: '- Ut eu sem integer vitae justo eget. Auctor urna nunc id cursus. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.',
            yr2019: '2019',
            subtext7: '- Metus dictum at tempor commodo ullamcorper a lacus. Blandit volutpat maecenas volutpat blandit aliquam etiam erat',
            subtext8: '- Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet',
            subtext9: '- Dis parturient montes nascetur ridiculus mus mauris',
            yr2018: '2018',
            subtext10: '- Dignissim enim sit amet venenatis urna cursus. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. ',
            subtext11: '- Donec ultrices tincidunt arcu non sodales.',
            subtext12: '- Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis',
            subtext13: '- Eu sem integer vitae justo eget. Tellus id interdum velit laoreet id',
            subtext14: '- Sed faucibus turpis in eu mi bibendum. Consequat nisl vel pretium lectus quam id leo in vitae',
            
          }
        }
      },
      contact: {
        template: `<div>
        <dt><span style="font-style: italic; line-height: 5px; text-decoration: underline; font-weight:bold">Tell Us Your Story!</span></dt>
        <br>       
        <form method="POST" @submit.prevent>
               <label>Your Name:</label>
               <input type="text" v-model="contactData.name" >
               <label>Your Age:</label>
               <input type="number" v-model="contactData.age" step="5" >
               <label>About You!!!: </label>
               <textarea v-model="contactData.message"></textarea>
               <label>Your Fitness Goals:</label>
               <input type="text" v-model="contactData.goals" >
               <button type="submit">Send</button>
               </form>
               </div>`,
        data: function() {
          return {
            contactData: {
              name: '',
              age: 0,
              message: '',
              goals: '',
            }
          }
        }
      }
    }
  })
  