import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import profile from '../img/img.jpg';
import Skills from './skills';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faCss3Alt, faNode, faPython, faReact, faHtml5, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

class Resume extends Component {
     render() {
         return (
             <div>
                 <Grid>
                     <Cell col={4}>
                     <img src={profile} alt="avatar" className="avatar-image" />
                         <h2 style={{paddingTop: "1em"}}>Goce Ilievski</h2>
                         <h4 style={{color: "grey"}}>JavaScript Web Developer</h4>
                         <hr style={{borderTop: "3px solid #33dff", width: "50%"}} />
                         <p>A self-driven person, passionate about learning web development, now looking for a career change and transition into the IT industry. Started with programming and JavaScript back in 2016. Currently trying to land the very first job as a web developer.</p>
                         <hr style={{borderTop: "3px solid #33dff", width: "50%"}} />
                         <h5>Address</h5>
                         <p>Skopje, North Macedonia</p>
                         <h5>Phone</h5>
                         <p>(+389)70770189</p>
                         <h5>Email</h5>
                         <p>goce.ilievski@live.com</p>
                         <p>gotze.ilievski@gmail.com</p>
                         <h5>Website</h5>
                         <p>https://goceilievski.online</p>
                     </Cell>
                     <Cell col={8} className="resume-right">
                         <h2>Education</h2>
                         <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="Udemy.com"
                            schoolDescription="An in-depth tutorial on React, React-Redux, Router, 0Auth and React Hooks"
                            link="https://www.udemy.com/certificate/UC-7b729f0f-f3d5-4d0d-a28e-c3c4857f9a1a/"
                            imgSource="https://udemy-certificate.s3.amazonaws.com/image/UC-7b729f0f-f3d5-4d0d-a28e-c3c4857f9a1a.jpg"
                         />
                         <Education 
                            startYear={2019}
                            endYear={2019}
                            schoolName="Udemy.com"
                            schoolDescription="A short tutorial course in ES6 syntax: Essentials in JavaScript ES6 - a Fun and Clear Introduction."
                            link="https://www.udemy.com/certificate/UC-TEIJYE5T/"
                            imgSource="https://udemy-certificate.s3.amazonaws.com/image/UC-TEIJYE5T.jpg"
                         />
                         <Education 
                            startYear={2018}
                            endYear={2019}
                            schoolName="Udemy.com"
                            schoolDescription="Finished The Web Developer Bootcamp online course by Colt Steele in a time span of 5 months. Covered topics: HTML, CSS, Vanilla JS, Node, Express, MongoDB, Mongoose, jQuery, RESTfull routing, Git and Github, deploying through Heroku CLI."
                            link="https://www.udemy.com/certificate/UC-FX9JUIXT/"
                            imgSource="https://udemy-certificate.s3.amazonaws.com/image/UC-FX9JUIXT.jpg"
                         />
                         <Education
                            startYear={2002}
                            endYear={2007}
                            schoolName="University St. Cyril and Methodius - Faculty of Law Skopje"
                            schoolDescription="Finished the first module of studies on the faculty of law and currently hold a Bachelor's degree with civil law as a major."
                         />
                         <hr style={{borderTop: '3px solid #F3F3F3'}} />
                         <h2>Experience</h2>
                         <Experience 
                            from={`12/02/2020`}
                            to={` / `}
                            jobName={`Document Control Specialist / Agile Pro Solutions Macedonia`}
                            jobDescription={`Verifying documents for consistency and compliance to requirements. Resolving issues together with QA team. Complete document turnover of test reports ran on equipment installed in Facebook data centres in the U.S. through the e-Builder platform.`}
                         />
                         <Experience
                            from={`09/02/2019`}
                            to={`04/02/2020`}
                            jobName={`Data Analyst / Salience Consulting`}
                            jobDescription={`Creating reports and dashboards on a daily and weekly basis, developing data visualizations, data cleaning and data mining, maintaining and updating a large database of the project related data.`}
                         />
                         <Experience
                            from={`03/04/2019`}
                            to={`08/30/2019`}
                            jobName={`Quality assurance / CoverWallet Commercial Insurance`}
                            jobDescription={`Cross-checking all insurance policies and additional documentation with the requirements, keeping client records in Salesforce up to-date, updating and maintaining large spreadsheets of policy related data, endorsing policy changes to advisors and account owners.`}
                         />
                         <Experience
                            from={`04/06/2018`}
                            to={`07/05/2018`}
                            jobName={`Data Team Member / H4`}
                            jobDescription={`First level customer support, Text formatting and proof reading of MNPI documents, Updating a big library of documents, updating sensitive data in excel spreadsheets, testing for bugs and executing complete dry runs on the proprietary platform.`}
                         />
                         <Experience
                            from={`01/01/2018`}
                            to={`03/28/2018`}
                            jobName={`Back office Assistant / SETEC Skopje`}
                            jobDescription={`Sorting the daily correspondence between warehouse and the stores, Implementing and optimizing daily procedures, Monetary exchange, preparing reports of transactions, issuing receipts and statements of warranty, assisting in organizing the distribution of merchandise from and to the warehouse departmentg.`}
                         />
                         <Experience
                            from={`3/21/2008`}
                            to={`5/21/2008`}
                            jobName={`Intern in Legal department / Stopanska banka Skopje`}
                            jobDescription={`Administration correspondence, typing legal documents and maintaining archive.`}
                         />
                         <Experience
                            from={`January 2002`}
                            to={`Februay 2009`}
                            jobName={`Attorney's Office Intern`}
                            jobDescription={`Attending at court ruling, writing legal appeals and other legal documents, maintaining archive, obtaining documentation from the state firm registry, providing legal consulting.`}
                         />
                        <hr style={{borderTop: '3px solid #F3F3F3'}} />
                        <h2 style={{textAlign: 'center'}}>Skills</h2>
                        <div style={{fontSize: '3rem', display: 'inline-block', width: '90%', textAlign: 'center'}}> 
                            <FontAwesomeIcon icon={faHtml5} transform="right-2" fixedWidth/>
                            <FontAwesomeIcon icon={faCss3Alt} transform="right-2" fixedWidth/>
                            <FontAwesomeIcon icon={faJs} transform="right-4" fixedWidth/>
                            <FontAwesomeIcon icon={faNode} transform="right-8" fixedWidth/>
                            <FontAwesomeIcon icon={faReact} transform="right-12" fixedWidth/>
                            <FontAwesomeIcon icon={faNpm} transform="right-16" fixedWidth/>
                            <FontAwesomeIcon icon={faPython} transform="right-22" fixedWidth/>
                            <FontAwesomeIcon icon={faDatabase} transform="right-24" fixedWidth/>
                        </div>
                         <Skills 
                            skill="Javascript" 
                            progress={93}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={97}
                        />
                        <Skills 
                            skill="Python"
                            progress={70}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={65}
                        />
                        <Skills 
                            skill="React"
                            progress={72}
                        />
                        <Skills 
                            skill="Redux"
                            progress={55}
                        />
                        <Skills 
                            skill="MySQL"
                            progress={84}
                        />
                        <Skills 
                            skill="PostgreSQL"
                            progress={25}
                        />
                        <Skills 
                            skill="ExpressJS"
                            progress={80}
                        />
                        <Skills 
                            skill="MongoDB"
                            progress={88}
                        />
                     </Cell>
                 </Grid>
             </div>
         )
     }
}

export default Resume;