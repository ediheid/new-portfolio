import styles from "./title.module.scss";

const Title = () => {
  return (
    <section className={styles["title-section-container"]}>
      <h3 className={styles["sub-heading"]}>Web development.</h3>
      <h3 className={styles["sub-heading"]}>Web Design.</h3>

      <div>
        <h1 className={styles["name-heading"]}>Edith</h1>
        <h1 className={styles["name-heading"]}>Heidmann</h1>
      </div>

      <h3 className={styles["sub-heading"]}>
        {" "}
        · Sleek · Design · Creative · Programming ·
      </h3>

      <div>
        {/* // Todo: Hashlink will go here */}
        about me
      </div>
    </section>
  );
};

export default Title;
