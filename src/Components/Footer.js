import React from 'react'
import './categories.css'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import {  Divider } from '@material-ui/core';
import '../CSS/Components/Footer.css'

var company = [
    {
        company: {
            name: "About Us",
            url: ""
        },
        learners: {
            name: "Code Of Conduct",
            url: ""
        },
        teachers: {
            name: "Add Class",
            url: ""
        },
        you: {
            name: "Privacy",
            url: ""
        }
    },
    {
        company: {
            name: "Careers",
            url: ""
        },
        learners: {
            name: "Community",
            url: ""
        },
        teachers: {
            name: "Services Provided",
            url: ""
        },
        you: {
            name: "Terms",
            url: ""
        }
    },
    {
        company: {
            name: "Contact",
            url: ""
        },
        learners: {
            name: "Mobile App",
            url: ""
        },
        teachers: {
            name: "Custom Website",
            url: ""
        },
        you: {
            name: "Security",
            url: ""
        }
    },
]

export default class Footer extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "#282c35", color: "white" }} >
                <div className="desktop wrap" style={{ marginTop: "100px" }} >
                    <div style={{ width: "80%" }} >
                        <div className="footer-heading" >
                            Pidgin
                        </div>
                        <table className="footer-table" >
                            <tr style={{ fontSize: "14px", width: "100%" }} >
                                <td>
                                    COMPANY
                                </td>
                                <td>
                                    FOR LEARNERS
                                </td>
                                <td>
                                    FOR TEACHERS
                                </td>
                                <td>
                                    FOR YOU
                                </td>
                            </tr>
                            {
                                company.map(item => {
                                    return (
                                        <tr style={{ color: "grey", fontSize: "14px" }} >
                                            <td>
                                                <a href={item.company.url} >{item.company.name}</a>
                                            </td>
                                            <td>
                                                <a href={item.learners.url} >{item.learners.name}</a>
                                            </td>
                                            <td>
                                                <a href={item.teachers.url} >{item.teachers.name}</a>
                                            </td>
                                            <td>
                                                <a href={item.you.url} >{item.you.name}</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        <div className="footer-heading" style={{ fontSize: "20px", margin: "10px 0px" }} >
                            Social Media
                        </div>
                        <div style={{ width: '80%', margin: "30px 0px" }} >
                            <FaWhatsapp color="#FFFFF" size="30px" />
                            <FaFacebook color="#FFFFF" size="30px" style={{ margin: "0px 5px" }} />
                            <FaInstagram color="#FFFFF" size="30px" style={{ margin: "0px 5px" }} />
                        </div>
                        <Divider></Divider>
                        <div style={{ fontSize: "10px", color: "grey", fontWeight: "100", margin: "5px" }} >
                            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2020 Pidgin Pvt Ltd. All rights reserved.
                        </div>
                    </div>
                </div>

                <div className="mobile" style={{ padding: "10px" }} >
                    <div className="footer-heading" >
                        Pidgin
                        </div>
                    <table className="footer-table" >
                        <tr style={{ fontSize: "14px", width: "100%" }} >
                            <td>
                                COMPANY
                                </td>
                            <td>
                                FOR LEARNERS
                                </td>
                        </tr>
                        {
                            company.map(item => {
                                return (
                                    <tr style={{ color: "grey", fontSize: "14px" }} >
                                        <td>
                                            <a href={item.company.url} >{item.company.name}</a>
                                        </td>
                                        <td>
                                            <a href={item.learners.url} >{item.learners.name}</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    <table className="footer-table" >
                        <tr style={{ fontSize: "14px", width: "100%" }} >
                            <td>
                                FOR TEACHERS
                                </td>
                            <td>
                                FOR YOU
                                </td>
                        </tr>
                        {
                            company.map(item => {
                                return (
                                    <tr style={{ color: "grey", fontSize: "14px" }} >
                                        <td>
                                            <a href={item.teachers.url} >{item.teachers.name}</a>
                                        </td>
                                        <td>
                                            <a href={item.you.url} >{item.you.name}</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    <div className="footer-heading" style={{ fontSize: "20px", margin: "10px 0px" }} >
                        Social Media
                        </div>
                    <div style={{ width: '80%', margin: "30px 0px" }} >
                        <FaWhatsapp color="#FFFFF" size="30px" />
                        <FaFacebook color="#FFFFF" size="30px" style={{ margin: "0px 5px" }} />
                        <FaInstagram color="#FFFFF" size="30px" style={{ margin: "0px 5px" }} />
                    </div>
                    <Divider></Divider>
                    <div style={{ fontSize: "10px", color: "grey", fontWeight: "100", margin: "0px 5px" }} >
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2020 Pidgin Pvt Ltd. All rights reserved.
                        </div>
                </div>
            </div>
        );
    }
}