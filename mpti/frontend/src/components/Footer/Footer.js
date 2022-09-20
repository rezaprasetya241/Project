import React from 'react'
import './Footer.style.css'
import Logo from '../../images/Logo.png'
import { Col, Row } from 'react-bootstrap'
import {FaFacebook, FaInstagram, FaLocationArrow, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const center = { lat: -7.805294, lng: 109.997684 }
export default function Footer() {
  return (
    <footer id='footer'>
        <div className='container'>
            <div className='footer__list'>
                <div className='footer_details'>
                    <div className='footer_desc'>
                        <div className='footer_logo'>
                            <img src={Logo} alt='logo parfume'/>
                            <p style={{color: '#34364A'}}>All the fragrance in your hand</p>
                        </div>
                        <div>
                          <h6>Main Office :</h6> 
                          <p>Jl. Panembahan Senopati, kec. Purwodadi, Kab. Purworejo.<br/> Jawa Tengah,Indonesia</p> 
                        </div>
                        <div>
                          <h6>Contact Us :</h6>
                          <p>0822 - 2238 - 2188 <br/>support@neeparfume.id</p>
                        </div>
                    </div>
                    <div className='footer_maps'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7019477111!2d109.99472310129833!3d-7.821338596546002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae7d538ebc7a7%3A0xde6b607e792774b2!2sJl.%20Panembahan%20Senopati%2C%20Kec.%20Purwodadi%2C%20Kabupaten%20Purworejo%2C%20Jawa%20Tengah%2054173!5e0!3m2!1sid!2sid!4v1658503917845!5m2!1sid!2sid"></iframe>
                        <div className='footer_subs'>
                            <div className='footer_subs_subcribe'>
                                <h6>Subscribe</h6>
                                <form>
                                    <input type='text' name='subscribe' placeholder='Your email address' className='footer__input' required/>
                                    <button type='submit' className='footer__btnSubmit'><FaLocationArrow/></button>
                                </form>
                            </div>
                            <div className='footer_subs_media'>
                                <a to='/'>
                                    <FaFacebook className='footer__media__facebook'/>
                                </a>
                                <a to='/'>
                                    <FaInstagram className='footer__media__instagram'/>
                                </a>
                                <a to='/'>
                                    <FaYoutube className='footer__media__youtube'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright 2022 • All Rights Reserved Nee Parfume x Common Team</p>
        </div>
    </footer>
  )
}

