import './Contact.css';
export default function Contact(){
    return<>
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a Message</h3>
            <p>"Do you have any questions or need further assistance? Our team is here to help! Please don't hesitate to reach out with any queries you may have. We value your feedback and are committed to providing the best support possible. Your satisfaction is our top priority."</p>
            <ul>
                <li>Contact98@gmail.com</li>
                <li>+12 678 898 898</li>
                <li>77 Washington,Cambridge<br/>MA 02139,United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your Name" required/>
                <label>Phone number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placholder="Enter your message here" required></textarea>
                <button type="submit" className="btn dark-btn">Submit now</button>
            </form>
        </div>
    </div>
    </>
}