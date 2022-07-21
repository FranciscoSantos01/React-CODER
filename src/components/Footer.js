import React from 'react'

const Footer = () => {
  return (
    <footer >
        <div className="side-footer">
        <div className="side-1">
            <h4>About the company</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias voluptatum perspiciatis quibusdam soluta deleniti, deserunt impedit nemo in voluptatem, porro repudiandae accusamus ab aperiam vitae praesentium doloremque consequatur dolore.</p>
        </div>
        <div className="side-2">
            <p><i className="fa-solid fa-location-dot"></i> 21 street Yerba Buena, Argentine</p>
            <p><i className="fa-solid fa-square-phone"></i> +549345671</p>
            <p><i className="fa-solid fa-envelope"></i>support@something.com</p>
        </div>
        <div className="side-3">
            <p><a href="###" target="_blank"><i className="fa-brands fa-facebook-square"></i></a></p>
            <p><a href="###" target="_blank"><i className="fa-brands fa-instagram-square"></i></a></p>
            <p><a href="###" target="_blank"><i className="fa-brands fa-twitter-square"></i></a></p>
        </div>
    </div>
    <div className="footer">
         <h2>Made By Francisco Designs</h2>
    </div>
    </footer>
  )
}

export default Footer