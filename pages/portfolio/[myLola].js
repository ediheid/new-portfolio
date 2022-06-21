// Custom Next hook will allow me to dynamically route
import { useRouter } from "next/router";

import styles from "../portfolio/my-lola.module.scss";

const MyLola = () => {
  const router = useRouter();
  // creates complete url path of dynamic route
  router.query.myLola;

  return (
    <div className={styles["page-container"]}>
      <h1>This will be the My Lola dynamic route from Portfolio route</h1>
    </div>
  );
};

export default MyLola;
