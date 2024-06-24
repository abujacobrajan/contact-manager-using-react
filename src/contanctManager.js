
import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import ContactManagerCSS from "./contactManager.module.css";
import defaultContactImage from './contact-img.png'

const ContactManager = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contacts, setContacts] = useState([]);

    const addName = (e) => {
        setName(e.target.value);
    };

    const addEmail = (e) => {
        setEmail(e.target.value);
    };

    const submitContact = (e) => {
      e.preventDefault();
      if (!name || !email) {
          alert("All the fields are mandatory.");
          return;
      }
      const newContact = { name: name, email: email, image: defaultContactImage }; 
      setContacts([...contacts, newContact]);
      setName('');
      setEmail('');
  };

    const deleteContact = (index) => {
        const newContacts = contacts.filter((_, i) => i !== index);
        setContacts(newContacts);
    };

    return (
        <div className={ContactManagerCSS.contentBody}>
            <div className={ContactManagerCSS.header}>
                <h2>Contact Manager</h2>
            </div>
            <div className={ContactManagerCSS.formContainer}>
                <h2>Add Contact</h2>
                <label>
                    Name <input type="text" placeholder="Name" value={name} onChange={addName} />
                </label><br/>
                <label>
                    Email <input type="email" placeholder="Email" value={email} onChange={addEmail} />
                </label>
                <button className={ContactManagerCSS.addButton} onClick={submitContact}>Add</button>
                <ul className={ContactManagerCSS.contactList}>
                    {contacts.map((contact, index) => (
                        <li className={ContactManagerCSS.contactListLi} key={index}>
                          <img src={defaultContactImage} alt="contact" className={ContactManagerCSS.contactImage}/>
                            {contact.name}<br/>
                            {contact.email}
                            <button className={ContactManagerCSS.deleteButton} onClick={() => deleteContact(index)}>
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactManager;
