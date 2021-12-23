import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log( props);
  const inpute1 = useRef("");

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    // console.log(inpute1.current.value);
    props.searchKeyword(inpute1.current.value);
  };

  return (
    <div class="main">
      <br></br>
      <br></br>
      <h2>Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <br></br>
      <br></br>

      <div className="ui search">
        <div className="ui icon input">
          <input ref={inpute1} type="text" placeholder="Search Contacts" className="prompt" value ={props.term} onChange={getSearchTerm} />
          <i className="search icon"></i>

        </div>

      </div>
      <br></br>

      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contacts available in the local storage"}</div>
    </div>
  );
};

export default ContactList;
