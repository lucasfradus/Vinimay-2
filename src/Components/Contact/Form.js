import React, {useState} from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Mock2 from '../../images/archivos-15.png'
import LoadingSpinner from './LoadingSpinner';
import NetlifyForm from 'react-netlify-form'	



const Form = (props) => {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});


  const [loading , setIsOpen] = useState(false);


  /*
  
      e.preventDefault();
                document.getElementById("contact-form").reset();

*/
/*
  const handleFormSubmit = e => {
    e.preventDefault();
    setIsOpen(true);
    axios({
      method: "GET",
      url: props.config.api,
      headers: { "content-type": "application/json" },
      data: formData
    })
      .then(result => {
        setIsOpen(false);
        if (result.data.sent) {
          document.getElementById("contact-form").reset();
          setmailSent(result.data.sent)
          setError(false)
        } else {
          setError(true)
        }
      })
      .catch(error => setError( error.message ));
  };

*/
  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('contact-form');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }

   const handleChange = (e, field) => {
    let value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };



    const { successMessage, errorMessage, fieldsConfig } = props.config;


    return (
      <div className="contact-form">
        <div className="contact-form__container">
                <div>
                    {mailSent &&
                    <div className="alert success">
                        {successMessage}
                    </div>
                    }
                    {error && 
                    <div className="alert danger">
                        {errorMessage}
                    </div>
                    }
                </div>
                    
 
              <form id="contact-form" name="contact-v1" method="POST" data-netlify="true">
               <input type="hidden" name="contact-v1" value="contact" />
                {fieldsConfig &&
                fieldsConfig.map(field => {
                    return (
                    <React.Fragment key={field.id}>
                        {field.type !== "textarea" ? (
                        <React.Fragment>
                            <div className='inputCar'>
                            <p className='hold'>{field.label} </p>
                            <input
                            type={field.type}
                            className={field.klassName}
                            placeholder={field.placeholder}
                            value={field.name}
                            onChange={e => handleChange(e, field.fieldName)}
                            />
                            </div>
                        </React.Fragment>
                        ) : (
                        <React.Fragment>
                            <div className='inputCar'>
                                <p className='hold'>{field.label} </p>
                                <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => handleChange(e, field.fieldName)} value={field.name} />
                            </div>
                        </React.Fragment>
                        )}
                    </React.Fragment>
                    );
                })}
                <div>
                {loading ? 
                  <LoadingSpinner translate={props.translate} /> :
                  <button type="submit" onClick={handleSubmit} className='btn'>{props.translate('Contact-form.buttons.send')}  </button>  
                }

                    
                </div>

                
            </form>
           
        </div>
        <div className='imageP'>
                <img src={Mock2} alt='com' className='Img2'/>
        </div>
      </div>

    );
}

export default Form;
//propTypes for the component
Form.propTypes = {
  config: PropTypes.object.isRequired
};
