import React from "react"
import "./Header.scss"


const Header = () => {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="column col-5 ">
                        <img src="/src/assets/logo.png" className="top-nav__logo float-start "/>
                    </div>
                    <div className="column col-7 d-flex flex-row ">
                       <div className="column col-6 d-flex justify-content-start ">
                            <ul className="top-nav__menu d-flex flex-row gap-5 align-items-center ">
                                <a>
                                    Home
                                </a>
                                <div className="dropdown ">
                                    <button type="button" className="btn dropdown-toggle"
                                            data-bs-toggle="dropdown">
                                        Our Programs
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">STEAM Discovery</a></li>
                                        <li><a className="dropdown-item" href="#">Tech Discovery</a></li>
                                        <li><a className="dropdown-item" href="#">GDevelop Game Design World</a></li>
                                        <li><a className="dropdown-item" href="#">Roblox Game Desgin World</a></li>
                                        <li><a className="dropdown-item" href="#">3D Design Adventure</a></li>
                                        <li><a className="dropdown-item" href="#">AI & Game Adventure</a></li>
                                    </ul>
                                </div>
                                <a>
                                    About us
                                </a>
                            </ul>
                        </div>

                        <div className="column col-6 d-flex justify-content-end align-items-center">
                            <img src="/src/assets/contact.png " className="top-nav__contact-logo "/>
                            <a className="top-nav__contact ">Call us</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Header;
