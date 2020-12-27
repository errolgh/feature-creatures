import React from 'react'

const Footer = () => (
    <>
        <span>
            © Powered by <a 
            href="https://www.errolwatson.io/" 
            target="_blank" 
            rel="noreferrer">Errol Watson</a> {new Date().getFullYear()}
        </span>
    </>
)

export default Footer