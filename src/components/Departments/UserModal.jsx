import Modal from "../Modal";
import avatar from "../../assets/images/avatar.png";

const UserModal = ({ user, onClose }) => {
  if (!user) return null;
  console.log(user);

  return (
    <Modal closeModal={onClose}>
      <div className="user-modal">
        <img src={avatar} alt="" className="user-avatar" />
        <h2 className="user-name">{user.name}</h2>
        <div className="user-additional">{user.position}</div>
        <div className="user-additional">{user.email}</div>
      </div>
    </Modal>
  );
};

export default UserModal;
