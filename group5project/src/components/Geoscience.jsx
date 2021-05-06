import React from "react";

function About() {
  return (
    <div className="about">
      <body>
        <section className="main">
          <div className="container">

            <section className="description">
              <h1>What is Geoscience?</h1>
              <p>Geoscience is the study of the Earth - its oceans, atmosphere, rivers and lakes, ice sheets and glaciers, soils, its complex surface, rocky interior, and metallic core. This includes many aspects of how living things, including humans, interact with the Earth. Geoscience has many tools and practices of its own but is intimately linked with the biological, chemical, and physical sciences.
              </p>

              <img className="geoscience" src="https://i.imgur.com/rdrC4Y2.png" alt="Yellowstone Super Volcano"/>
              <h6>Yellowstone Super Volcano</h6>

              <p>
              Geoscience investigates the past, measures the present, and models the future behavior of our planet. But it also involves the study of other planets, asteroids, and solar systems, both to better understand the Earth and to expand our knowledge of the universe. 
              </p>

              <br/>
              <br/>

              <h1>What is Geosemantics?</h1>  
              <p>
              Geosemantics is the application of linguistic techniques to geoscience. Geoscientists often have access to more reports than they can reasonably read so they are commonly challenged in filtering through reports to find relevant information. Traditional Natural Language Processing (NLP) techniques such as Named Entity Recognition (NER) must be trained to identify geologically relevant terms.
              </p>

              <br/>
              <br/>

              <h1>Our Project</h1>
              <p>Our main objective for this project is to create a solution to filter reports and datasets by extracting useful information for Geoscientists using natural language processing with Artificial Intelligence and Machine Learning techniques. To do this, we used pre-trained Machine Learning models to assist “fuzzy match” of specific identifiers and extend compatibility for PDF files.              
              </p>

              <p>We also used services provided by AWS, as each of them has its own development tools and functionality that can help with each other to create solutions for filtering texts. These services will help extend capability for application to data reports that are usually stored in a PDF format.
              </p>

            </section>

          </div>
        </section>
      </body>
    </div>
  );
}

export default About;