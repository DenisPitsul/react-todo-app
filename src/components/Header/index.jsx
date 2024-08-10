import { connect } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import styles from "./Header.module.sass";
import { getUserThunk } from "../../store/slices/userSlice";
import UserCard from "../UserCard";
import Loader from "../Loader";

function Header({ randomUser, isFetching, error, getUser }) {
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (error) {
      const notify = () => {
        toast.error(error.message);
      };
      notify();
    }
  }, [error]);

  return (
    <header className={styles.header}>
      {isFetching && <Loader />}
      {!isFetching && <UserCard user={randomUser} />}
    </header>
  );
}

const mapStateToProps = ({ user }) => {
  return user;
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
