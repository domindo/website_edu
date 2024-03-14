import React, {useState} from 'react'
import './AboutUs.scss'

import Teams from "./Teams.jsx";
import {listTeams} from "../index.jsx"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const AboutUs = () => {
    const [valuePhone, setvaluePhone] = useState()
    return (
        <div className="">
            <div className="header_aboutus">
                <div className="banner_aboutus">
                    <div className="banner_group">
                        <h1 className="title_group">About us</h1>
                        <p className="header_text_group">
                            At TechTrain, we know that tech literacy is essential for the
                            21st century learner; it trains the mind to think, and equips us
                            <strong> the challenges of Industry 4.0.</strong>
                            <br/>
                            <br/>
                            Our international team of education and tech specialists design and deliver
                            learning paths and solutions to captivate students.
                            <br/>
                            <br/>
                            <strong>Tomorrow’s leaders learn with TechTrain!</strong>

                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="founder_container ">
                    <div className="founder_group">
                        <h1 className="title_founder">Words from our founder</h1>
                        <div className="text_founder">
                            <e>
                                " My generation has witnessed digital technologies steadily appear in every aspect of
                                our
                                lives,
                                impacting the way we work, travel, shop, learn and even play.
                                <br/>
                                <br/>
                                I founded TechTrain with the firm belief that technology should not dominate the lives
                                of
                                our children!
                                They must become more than simple technology consumers by engaging with it in healthy
                                and
                                useful ways.
                                They must learn to harness it, to shape it, and to create it,
                                in order to meet the major challenges in their lives, in professional and social
                                contexts,
                                and at local and global scales.
                                <br/>
                                <br/>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Education is being disrupted worldwide, and a rethink of how we teach and learn is
                                underway.
                                TechTrain's vision is to adapt the 'toolkit' that a school provides to its students,
                                allowing
                                them to become the effective problem-solvers and leaders of the future. This toolkit
                                integrates
                                tech literacy and global awareness with a mix of essential skills:
                                critical-collaborative-computational thinking abilities, based in, and through, English
                                language
                                acquisition. "
                                <br/>
                                <br/>
                            </e>
                            <strong>Christo Hughes, Founder & CEO</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team_section">
                <div className="team_container">
                    <h1 className="title_team">Meet the team</h1>
                    <div>
                        {listTeams.map((teams, index) => {
                            return <Teams key={index}
                                          imagesUrl={teams?.imagesUrl}
                                          name={teams?.name}
                                          role={teams?.role}
                                          location={teams?.location}
                                          detail={teams?.detail}
                            />
                        })}
                    </div>
                </div>
            </div>
            <div className="booking_trial">
                <div className="booking_container container">
                    <div className="left_booking">
                        <div className="detail_booking">
                            <div className="title_booking">Spark your child's creativity...</div>
                            <div className="step_booking">Fill in this booking form, and you will receive from us:</div>
                            <ol className="list_step">
                                <li>A TechTrain Programs Brochure</li>
                                <li>A free trial for your child based on his/her interests</li>
                                <li>An personalized proposal to best suit your child's needs</li>
                            </ol>
                            <div className="quote_booking">
                                <div className="quote_text">"Our son started with TechTrain 2 years ago and has been
                                    learning, and more importantly has been learning while having fun, being
                                    self-motivated to attend every class."
                                </div>
                                <div style={{textAlign: "left"}}><strong>- Nick, TechTrain parent community</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_booking">
                        <div className="form_container_program ">
                            <div className="form_title">
                                See the TechTrain difference
                                <br/>
                            </div>
                            <div className="form_subtile">
                                Enter your details and we will schedule a FREE trial at your convenience
                            </div>
                            <div className="booking_form_block d-flex flex-column align-items-center ">
                                <form className="booking_form_items">
                                    <input className="booking_fields startfill fieldinputs"
                                           placeholder="Parent name"/>
                                    <input className="booking_fields field-input" placeholder="Email"/>
                                    <div className="booking_fields d-flex align-items-center">
                                        <PhoneInput onChange={setvaluePhone} value={valuePhone} defaultCountry={"VN"}
                                                    placeholder="Phone Number"/>
                                    </div>
                                    <input className="booking_fields field-input" placeholder="Child's name"/>
                                    <input className="booking_fields field-input" placeholder="Child's ages"/>
                                    <button className="button-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_aboutus">
                <div className="footer_container">
                    <div className="footer_group">
                        <div className="footer_left">
                            <div className="contacts_title">CONTACT</div>
                            <div className="contacts_phone">
                                Tel/WA: +84 (0) 899 327 527
                                <br/>
                                <strong>&zwj;</strong>
                                <strong>Email:</strong>
                                &nbsp;
                                <a style={{
                                    color: "rgba(255,255,255,.8)",
                                    fontSize: "14px",
                                    textDecoration: "none"
                                }}>hello@techtrainasia.com</a>
                                <br/>
                                <strong>Learning hours:</strong>
                                <br/>
                                Mon - Thu: 8am - 8pm
                                <br/>
                                Fri - Sun: 8am - 6pm
                                <br/>
                            </div>

                        </div>
                        <div className="footer_right">
                            <div className="connects_title">CONNECT</div>
                            <div className="connect_group_logo">
                                <a className="link_connect" target="_blank" href="https://facebook.com">
                                    <img className="logo_connect" src="/src/assets/images/Facebook.svg"/>
                                </a>
                                <a className="link_connect" target="_blank" href="https://zalo.me">
                                    <img className="logo_connect" src="/src/assets/images/xalo.png"/>
                                </a>
                                <a className="link_connect" target="_blank" href="https://linkedin.com">
                                    <img className="logo_connect" src="/src/assets/images/linkedin.png"/>
                                </a>
                                <a className="link_connect" target="_blank" href="https://youtube.com">
                                    <img className="logo_connect" src="/src/assets/images/Youtube.svg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrights">
                    <div className="text_copyright">
                        © Copyright 2024 TechTrain Asia. All Rights Reserved.
                        <br/>
                        Terms & Conditions |
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs
