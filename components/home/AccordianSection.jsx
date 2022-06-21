import React from "react";
import Image from "next/dist/client/image";
import CustomAccordian from "../global/acordian/CustomAccordian";
import styles from "../home/Home.module.css";

export const AccordianSection = () => {
  const contents = [
    {
      header: "Why us?",
      body: `<p>We are CollegeVidya (Study Abroad). And through our Interactive Platform,
       we provide you with a portal to compare universities of your choice and courses of 
       your interest on an international scale. </p>
       <div>Moreover, we let you analyze and compare the best return on investment for 
       the time, money, and efforts you are willing to put into your dream of studying 
       abroad. Likewise, our experts are here to help and guide you with all of your 
       doubts, just like a good friend would.</div>`,
    },
    {
      header: "Why Study Abroad?",
      body: `<p>Your study abroad journey enables you to get a great deal of exposure as
       well as experience which also stimulates you to bloom in your career, now with
        your reasonable/better perception of the world.</p>
        <div>Furthermore, you can acquire new languages, admire other cultures, withstand
         the challenges of residency in another country and acquire a vast insight
          into the world. In today’s world, almost all contemporary businesses look 
          for these aspects when hiring, and such qualities are only going to become 
          more significant in the future.</div>`,
    },
    {
      header: "How much money does it take to study abroad?",
      body: `<p>The cost of studying abroad primarily involves discipline of study, 
      tuition fees component, accommodation cost, health support, and other living 
      expenses such as grocery, utilities, social activities, and communication expenses.
       This varies from country to country, region to region, and university to university.</p>
       <ul>
       <li>For a bachelors course the tuition fee cost is estimated at an average of INR 15 LPA, however, if the student aspires to enroll in top 10 universities, this will come up to INR 25 LPA.</li>
       <li>Whereas the cost of studying a master's course would be around 15 LPA. At the top 10 universities, this can go up to INR 27 LPA.</li>
       <li>The US being the silicon valley and highly sought-after study abroad destination has an indicative tuition fee component between INR 17 to 25 LPA and living cost of INR 15 to INR 20 LPA.</li>
      
       </ul>
       <div>Living cost, likewise, varies from INR 6 LPA to INR 17 LPA depending upon the country. For example</div>
       <ul>
       <li>UK: INR 9 LPA
       </li>
       <li>Australia: INR 12 LPA
       </li>
       <li>Canada and Ireland: INR 6 LPA</li>
       <li>Newzealand: INR 8 LPA</li>
       <li>Germany: INR 7.5 LPA</li>
       <li>USA: Around INR 17 LPA</li>
       </ul>
       
       `,
    },
    {
      header: "What documents are required to study abroad?",
      body: `
      <p>You have to be prepared with some important documents to fulfil your dream of studying abroad. And to make it easier for you we have prepared a list of all the documents required for the same, have a look.</p>
       <ul>
       <li><b>Application Form</b></li>
       <li><b>Statement of Purpose (SOP)</b></li>
       <li><b>Academic transcripts</b></li>
       <li><b>Letter of Recommendation (LOR)</b></li>
       <li><b>Curriculum Vitae (CV) or Resume</b></li>
       <li><b>Test Scores</b></li>
       <li><b>Essays</b></li>
     
       </ul>
       
      `,
    },
    {
      header: "How does studying abroad help your career?",
      body: `<p>Studying abroad proposes an enormous exhibition of new alternatives by pushing you out of your comfort zone. It also improves your communication skills which is an important aspect in today's world and will help you in building other elements of your communication skills, incorporating public speaking and presenting, and reconciling academic writing, and non-verbal communication. Plus, you can also demonstrate to future and current employers that you have the open mind, resourcefulness, and momentum required to adapt to a distinct setting.</p>`,
    },
  ];
  return (
    <>
      <section className={`${styles.accordianSection} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.headingCont}`}>
                <h1>FAQS</h1>
                
              </div>
            </div>

            <div className="col-md-3 d-flex align-items-center">
              <h1 className={`${styles.headingAccord}`}>We would love to answer!</h1>
            </div>

            <div className="col-md-9">
              <div className={`${styles.accInnerBox}`}>
                <div className={`${styles.lftBox}`}>
                  <CustomAccordian contents={contents} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccordianSection;
