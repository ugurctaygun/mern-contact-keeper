import React, {useContext} from 'react';
import ContactContext from '../../context/Contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup} from 'react-transition-group';


 const Contacts = () => {
     const contactContext = useContext(ContactContext);
     const {contacts,filtered} = contactContext;

     if(contacts.length === 0 ) {
         return <h4>Please add contact</h4>
     }

    return (
        <React.Fragment>
            <TransitionGroup>
            {filtered !== null ? 
            filtered.map(contact => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
                </CSSTransition>)
            ) :
            contacts.map(contact => (
                <CSSTransition key={contact.id} classNames="items" timeout={500}>
                <ContactItem contact={contact} />
                </CSSTransition>
            )
            )}
            </TransitionGroup>  
        </React.Fragment>
    )
}

export default Contacts;
