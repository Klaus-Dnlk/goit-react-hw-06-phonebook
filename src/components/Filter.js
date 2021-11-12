import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contacts-actions';
import { v4 as uuidv4 } from 'uuid';
import s from './Styles.module.scss';

const filterId = uuidv4();

function Filter({ value, onChange }) {
  return (
    <div className={s.filterBox}>
      <label htmlFor={filterId} className={s.filterLabel}>
        <input
          type="text"
          className={s.filterInput}
          id={filterId}
          placeholder="Find contacts by name"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
