// Custom Next hook will allow me to dynamically route
import { useRouter } from "next/router";

const MyLola = () => {
  const router = useRouter();
  // creates complete url path of dynamic route
  router.query.myLola;

  return <h1>This will be the My Lola dynamic route from Portfolio route</h1>;
};

export default MyLola;
