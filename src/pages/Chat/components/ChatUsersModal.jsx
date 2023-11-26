import PropTypes from 'prop-types';
import ChatUserComponent from './ChatUserComponent';

const ChatUsersModal = ({ isShow, users }) => {
  if (!isShow) {
    return null;
  }

  return (
    <>
      <div
        className="modal"
        id="chatModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="chatModalLabel"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="chatModalLabel">
                New Chat
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="chatModal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {users.map((user, index) => {
                return (
                  <div className="row mb-2" style={{ gap: '8px' }}>
                    <ChatUserComponent key={index} user={user} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChatUsersModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};

ChatUsersModal.defaultProps = {
  isShow: false,
  users: [],
};

export default ChatUsersModal;
