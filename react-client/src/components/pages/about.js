import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allina from './allina.jpg';
import claudia from './claudia.jpg';

class About extends Component {
    render() {
        return(
            <div className="container avant-garde grey-back">
            <div className="row tc shadow-2 dim ma5 pa5">
                <div className="f-headline ma3">
                    <p>- Our Mission -</p> 
                </div>

                <div className="billCol">
                    <p>
                    Septec is a machine learning algorithm that predicts impending sepsis by analysing vital signs.
                    </p>
                    <br />
                    <p>
                        <b className="grey f2 lh-copy">What is Sepsis: </b> <br />
                        Sepsis is life threatening condition involving organ dysfunction caused by a dysregulated host response to infection. Onset of sepsis heralds septic shock and subsequently death. The World Health Organisation reports an estimated 6 million deaths per year from sepsis. According to Centre for Disease Control, it is a contributing diagnosis in one-third of all hospital deaths. Early detection and initiation of antibiotics are critical for improving sepsis outcomes. Each hour of delayed treatment is associated with a 4-8% mortality.
                    </p>
                    <br />

                    <p>
                    A 2016 task force from the Society of Critical Care Medicine and European Society of Intensive Care Medicine (SCCM/ESICM) defined sepsis as an increase of two or more points in the sequential (sepsis-related) organ failure assessment (SOFA) score. The management strategy focuses on early recognition and prompt initiation of antibiotics. Time to antibiotics is a crucial factor in determining outcomes. 
                    </p>
                    <br />
                </div>
            </div>  
            <div className="row tc shadow-2 dim ma5 pa5">
                <div className="f-headline lh">
                    <p>Team</p> 
                </div> 
                <p className="billCol">
                    If you come across any problems, feel free to shoot us a message in our contact page! <br />
                </p>

                <div className="flex flex-wrap justify-around tc pa3 pa5-ns">
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">
                        <img className="center db mt3 mw-30 br-100 ba dib" src={claudia} alt="" height="130" width="130" /> <hr />
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Saloni</p>
                            Doctor</p>
                            <hr />
                            <a className="" target="_blank" href="https://www.linkedin.com/in/saloni-kapoor-0271a5aa/">Connect on Linkedin</a>
                        </div>
                    </div>  
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">
                        <img className="center db mt3 mw-30 br-100 ba dib" src={allina} alt="" height="130" width="130" /> <hr />
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Allina</p>
                            Incoming software engineer intern at Visa Inc</p>
                            <hr />
                            <a className="" target="_blank" href="https://www.linkedin.com/in/allina-k/">Connect on Linkedin</a>
                        </div>
                    </div>
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">
                        <img className="center db mt3 mw-30 br-100 ba dib" src={claudia} alt="" height="130" width="130" /> <hr />
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Shaina </p>
                            SW engineer</p>
                            <hr />
                            <a className="" target="_blank" href="https://www.linkedin.com/in/saloni-kapoor-0271a5aa/">Connect on Linkedin</a>
                        </div>
                    </div>  
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">
                        <img className="center db mt3 mw-30 br-100 ba dib" src={claudia} alt="" height="130" width="130" /> <hr />
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Jackson</p>
                            Biomedical Engineering</p>
                            <hr />
                            <a className="" target="_blank" href="https://www.linkedin.com/in/saloni-kapoor-0271a5aa/">Connect on Linkedin</a>
                        </div>
                    </div>  
                </div>
            </div>  
            {/* <div className="row tc shadow-2 dim ma5 pa5">
                <div className="f-headline lh">
                    <p>Previous Contributors</p> 
                </div> 
                <div className="flex flex-wrap justify-around tc pa3 pa5-ns">
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">                        
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Estefenia Barron</p><br />
                            Big thanks for her idea that got this app up and running!
                            She is a computer science and journalism student at Brooklyn college. 
                            She's made great contributions to her community!</p>
                        </div>
                    </div> 
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">                        
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Nouraiz Imran</p><br />
                            Goes to college of Staten Island and worked on getting your representatives to you.</p>
                        </div>
                    </div> 
                </div>
            </div>            */}
        </div>
        )
    }
}

export default About;