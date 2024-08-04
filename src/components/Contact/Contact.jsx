import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.item}>
    <p>
      <span role="img" aria-label="contact">
        👤
      </span>{" "}
      {name}:{" "}
      <span role="img" aria-label="phone">
        📞
      </span>{" "}
      {number}
    </p>
    <button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
