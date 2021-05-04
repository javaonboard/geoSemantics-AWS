import React from "react";

function About() {
  return (
    <div className="about">
      <body>
        <section className="main">
          <div className="container">

            <section className="description">
              <h1>What is Geosemantics?</h1>
              <p>Geoscience is the study of the Earth - its oceans, atmosphere, rivers and lakes, ice sheets and glaciers, soils, its complex surface, rocky interior, and metallic core. This includes many aspects of how living things, including humans, interact with the Earth. Geoscience has many tools and practices of its own but is intimately linked with the biological, chemical, and physical sciences.

              </p>

              <p>
              Geoscience investigates the past, measures the present, and models the future behavior of our planet. But it also involves the study of other planets, asteroids, and solar systems, both to better understand the Earth and to expand our knowledge of the universe. 
              </p>

              <p>
              Geosemantics is the application of linguistic techniques to geoscience. Geoscientists often have access to more reports than they can reasonably read so they are commonly challenged in filtering through reports to find relevant information. Traditional Natural Language Processing (NLP) techniques such as Named Entity Recognition (NER) must be trained to identify geologically relevant terms.
              </p>

              <br/>

              <h1>Our Project</h1>
              <p>Our main objective for this project is to create a solution to filter reports and datasets by extracting useful information for Geoscientists using natural language processing with Artificial Intelligence and Machine Learning techniques. To do this, we used pre-trained Machine Learning models to assist “fuzzy match” of specific identifiers and extend compatibility for PDF files.              
              </p>

              <p>We also used services provided by AWS, as each of them has its own development tools and functionality that can help with each other to create solutions for filtering texts. These services will help extend capability for application to data reports that are usually stored in a PDF format.
              </p>

              <br/>
              <h1>About Us</h1>
            </section>

            <article className="sponsor">
              <h2>Sponsor</h2>
              <img src="https://cdn.discordapp.com/attachments/809157200622387225/838641420008947712/analytics2021speaker_kyleJones.jpg" alt="Kyle Jones img"/>
              <p>Kyle Jones | Principal Solutions Architect</p>
              <p>Kyle Jones is a Principal Solutions Architect at Amazon Web Services where he helps Energy companies build and operate cloud-based solutions. Kyle loves working at the nexus of geoscience and machine learning.</p>
              <p>Please visit his <a href="https://aws.amazon.com/blogs/industries/how-to-find-key-geoscience-terms-in-text-without-mastering-nlp-using-amazon-comprehend/">blog</a> to learn more about geosemantics.</p>
            </article>

            <br/>
            <div class="clr"></div>

            <article className="team">
              <h2>Team</h2>
              <img src="https://media-exp1.licdn.com/dms/image/C5603AQGWM55FzThM4A/profile-displayphoto-shrink_200_200/0/1554756643583?e=1625702400&v=beta&t=65N8PhJkLQhs_Cj5JlquvIqJH1lSGh6cFzLyMG6zNkA" alt="Mohsen Shoraki img"/>
              <p>Mohsen Shoraki | Software Engineer at T-Mobile and Student at The University of Texas at Dallas</p>

              <div class="clr"></div>

              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG634pxJRlvWA/profile-displayphoto-shrink_200_200/0/1578500988165?e=1625702400&v=beta&t=I3zaVpoAGw1UDhGmuMK4-ZAPWrCSIKyyemS0cBaV4G4" alt="Alisher Komilov img"/>
              <p>Alisher Komilov | Student at The University of Texas at Dallas</p>

              <div class="clr"></div>  

              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHUPpFrFM0Aig/profile-displayphoto-shrink_200_200/0/1585855412961?e=1625702400&v=beta&t=a3PQvZFwKw_d12G36P0dZE8eBmlKR035ss163WWF-H8" alt="Bao Phan img"/>
              <p>Bao Phan | Student at UTD - Erik Jonsson School of Engineering and Computer Science</p>

              <div class="clr"></div>  

              <img src="https://media-exp1.licdn.com/dms/image/C5603AQF6Lh1ll3bgZA/profile-displayphoto-shrink_200_200/0/1609288422464?e=1625702400&v=beta&t=duNwV24k5F2eJwiP8GELqhIWcsyxDmjtAEASLdRvzes" alt="Jeffrey Martinez img"/>
              <p>Jeffrey Martinez | Software Engineering Student at The University of Texas at Dallas</p>

              <div class="clr"></div>    

              <img src="https://i.imgur.com/YabfgWF.jpg" alt="Cody Lu img"/>
              <p>Cody Lu | Software Engineering Student at The University of Texas at Dallas</p>
            </article> 
          </div>
        </section>
      </body>
    </div>
  );
}

export default About;