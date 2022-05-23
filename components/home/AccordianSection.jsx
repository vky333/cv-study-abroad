import React from "react";
import Image from "next/dist/client/image";
import CustomAccordian from "../global/acordian/CustomAccordian";
import styles from "../home/Home.module.css";

export const AccordianSection = () => {
  const contents = [
    {
      header: "Why us?",
      body: "We are CollegeVidya (Study Abroad). And through our Interactive Platform, we provide you with a portal to compare universities of your choice and courses of your interest on an international scale. Moreover, we let you analyze and compare the best return on investment for the time, money, and efforts you are willing to put into your dream of studying abroad. Likewise, our experts are here to help and guide you with all of your doubts, just like a good friend would.",
    },
    {
      header:"Why Study Abroad?",
      body: "Your study abroad journey enables you to get a great deal of exposure as well as experience which also stimulates you to bloom in your career, now with your reasonable/better perception of the world. Furthermore, you can acquire new languages, admire other cultures, withstand the challenges of residency in another country and acquire a vast insight into the world. In today’s world, almost all contemporary businesses look for these aspects when hiring, and such qualities are only going to become more significant in the future.",
    },
    {
      header: "How much money does it take to study abroad?",
      body: "The cost of studying abroad primarily involves discipline of study, tuition fees component, accommodation cost, health support, and other living expenses such as grocery, utilities, social activities, and communication expenses. This varies from country to country, region to region, and university to university.",
    },
    {
      header: "What documents are required to study abroad?",
      body: "You have to be prepared with some important documents to fulfil your dream of studying abroad. And to make it easier for you we have prepared a list of all the documents required for the same, have a look. ",
    },
    {
      header: "How does studying abroad help your career?",
      body: "Studying abroad proposes an enormous exhibition of new alternatives by pushing you out of your comfort zone. It also improves your communication skills which is an important aspect in today's world and will help you in building other elements of your communication skills, incorporating public speaking and presenting, reconciling academic writing, and non-verbal communication. Plus, you can also demonstrate to future and current employers that you have the open mind, resourcefulness, and momentum required to adapt to a distinct setting.",
    }
  ];
  return (
    <>
      <section className={`${styles.accordianSection} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.headingCont}`}>
                <h1>FAQs</h1>
                <div>We do love to answer!</div>
              </div>
              <div className={`${styles.accInnerBox}`}>
                <div className={`${styles.lftBox}`}>
                  <CustomAccordian contents={contents} />
                </div>
                <div className={`${styles.rghtBox}`}>
                  <Image
                    width={550}
                    height={550}
                    src="/victor/accordinaImg.png"
                    alt="HelpImg"
                  />
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
