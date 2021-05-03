import React from "react";

function About() {
  return (
    <div className="about">
      <body>
        <section className="main">
          <div className="container">

              <h1>What is Geosemantics?</h1>
              <h1>Our Project</h1>
              <br/>
              <h1>About Us</h1>

            <article className="sponsor">
              <h2>Sponsor</h2>
              <img src="https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2020/10/07/Kyle-Jones.jpg" alt="Kyle Jones img"/>
              <div className="description">
                <p>Kyle Jones | Principal Solutions Architect</p>
                <p>Kyle Jones is a Principal Solutions Architect at Amazon Web Services where he helps Energy companies build and operate cloud-based solutions. Kyle loves working at the nexus of geoscience and machine learning.</p>
                <p>Please visit his <a href="https://aws.amazon.com/blogs/industries/how-to-find-key-geoscience-terms-in-text-without-mastering-nlp-using-amazon-comprehend/">blog</a> to learn more about geosemantics.</p>
              </div>
            </article>

            <article className="team">
              <h2>Team</h2>
              <img src="https://media-exp1.licdn.com/dms/image/C5603AQGWM55FzThM4A/profile-displayphoto-shrink_200_200/0/1554756643583?e=1625702400&v=beta&t=65N8PhJkLQhs_Cj5JlquvIqJH1lSGh6cFzLyMG6zNkA" alt="Mohsen Shoraki img"/>
              <p>Mohsen Shoraki | Software Engineer at T-Mobile</p>
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG634pxJRlvWA/profile-displayphoto-shrink_200_200/0/1578500988165?e=1625702400&v=beta&t=I3zaVpoAGw1UDhGmuMK4-ZAPWrCSIKyyemS0cBaV4G4" alt="Alisher Komilov img"/>
              <p>Alisher Komilov | Student at The University of Texas at Dallas</p>
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHUPpFrFM0Aig/profile-displayphoto-shrink_200_200/0/1585855412961?e=1625702400&v=beta&t=a3PQvZFwKw_d12G36P0dZE8eBmlKR035ss163WWF-H8" alt="Bao Phan img"/>
              <p>Bao Phan | Student at UTD - Erik Jonsson School of Engineering and Computer Science</p>
              <img src="https://media-exp1.licdn.com/dms/image/C5603AQF6Lh1ll3bgZA/profile-displayphoto-shrink_200_200/0/1609288422464?e=1625702400&v=beta&t=duNwV24k5F2eJwiP8GELqhIWcsyxDmjtAEASLdRvzes" alt="Jeffrey Martinez img"/>
              <p>Jeffrey Martinez | Software Engineering Student at The University of Texas at Dallas</p>
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