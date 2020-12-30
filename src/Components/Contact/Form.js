import React, {useState}  from 'react';
import Mock2 from '../../images/archivos-15.png';
import NetlifyForm from 'react-netlify-form';
import LoadingSpinner from './LoadingSpinner';
import "./styles.css";


export default function Form(props) {

    const [formData, setFormData] = useState({});

    const handleChange = (e, field) => {
        let value = e.target.value;
        setFormData({
          ...formData,
          [field]: value,
        });
      };
    
      const { successMessage, errorMessage, fieldsConfig, loadingMessage } = props.config;


    return (
        <div className="contact-form">
        <div className="contact-form__container">
                <NetlifyForm name='contact-v1'>
            {({ loading, error, success }) => (
                <div>
                    {loading &&
                        <div className="alert info">
                            {loadingMessage}
                        </div>
                    }
                    {error &&
                        <div className="alert danger">
                            {errorMessage}            
                        </div>
                    }
                    {success &&
                        <div className="alert success">
                            {successMessage}
                        </div>
                    }
                <div>

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
                        <button type="submit"  className='btn'>{props.translate('Contact-form.buttons.send')}  </button>
                        }

                        </div>
                </div>
                
                </div>
                )}
                </NetlifyForm>
            </div>
            <div className='imageP'>
                 <img src={Mock2} alt='com' className='Img2'/>
            </div>
            </div>
    )
}
