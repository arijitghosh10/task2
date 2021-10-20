import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';
import useInput from './hooks/useInput';
const Footer = () => {
    const { value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputhasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName } =
        useInput(value => value.trim() !== '')
    const { value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputhasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail } =
        useInput(value => value.includes('@') && value.trim().length > 5)
    const { value: enteredPhone,
        isValid: enteredPhoneIsValid,
        hasError: phoneInputhasError,
        valueChangeHandler: phoneChangedHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone } =
        useInput(value => value.trim().length === 10)
    const { value: enteredCollege,
        isValid: enteredCollegeIsValid,
        hasError: collegeInputhasError,
        valueChangeHandler: collegeChangedHandler,
        inputBlurHandler: collegeBlurHandler,
        reset: resetCollege } =
        useInput(value => value.trim() !== '')

    const submitBtnHandler = (event) => {
        event.preventDefault()
        if (!enteredNameIsValid && !enteredEmailIsValid && !enteredPhoneIsValid) {
            return;
        }
        console.log(enteredName)
        resetName()
        resetEmail()
        resetPhone()
    }
    return (
        <footer>
            <div className={styles.info}>
                <div className={styles.socialLinks}>
                    <a href="https://www.facebook.com/profile.php?id=100063983912464"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com/We_Are_TEN?s=08"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/theentrepreneurshipnetwork/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className={styles.formDiv}>
                    <h2>Subscribe to our newsletter</h2>
                    <form className={styles.form}>
                        <div className={styles.inputs}>
                            <input type="text"
                                className={nameInputhasError && styles.errorClass}
                                placeholder="Full Name"
                                value={enteredName}
                                onChange={nameChangedHandler}
                                onBlur={nameBlurHandler}
                            />
                            <input type="text"
                                placeholder="College Name"
                                className={collegeInputhasError && styles.errorClass}
                                value={enteredCollege}
                                onChange={collegeChangedHandler}
                                onBlur={collegeBlurHandler}
                            />
                            <input type="number"
                                className={phoneInputhasError && styles.errorClass}
                                placeholder="Mobile No."
                                value={enteredPhone}
                                onChange={phoneChangedHandler}
                                onBlur={phoneBlurHandler}
                            />
                            <input type="email"
                                className={emailInputhasError && styles.errorClass}
                                placeholder="Email"
                                value={enteredEmail}
                                onBlur={emailBlurHandler}
                                onChange={emailChangedHandler} />
                        </div>
                        <div className={styles.buttonDiv}>
                            <button type="submit" className={styles.button} onClick={submitBtnHandler}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className={styles.extras}>
                    <a href="https://www.entrepreneurshipnetwork.net/about">About Us</a>
                    <a href="https://www.entrepreneurshipnetwork.net/contact">FAQs</a>
                    <a href="https://www.entrepreneurshipnetwork.net/contact">Contact us</a>
                </div>
            </div>
            <div className={styles.copyryt}>
                © 2020 Limitless Technologies - The Entrepreneurship Network
            </div>
        </footer>
    )
}
export default Footer;