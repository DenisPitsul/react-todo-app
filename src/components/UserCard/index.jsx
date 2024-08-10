import styles from "./UserCard.module.sass";

function UserCard({ user: { firstName, lastName, image, age } }) {
  return (
    <article className={styles.userCard}>
      <img
        className={styles.img}
        src={image}
        alt={`${firstName} ${lastName}`}
      />
      <div className={styles.infoWrapper}>
        <h2 className={styles.name}>
          {firstName} {lastName}
        </h2>
        <p className={styles.age}>Age: {age}</p>
      </div>
    </article>
  );
}

export default UserCard;
