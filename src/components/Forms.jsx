
import { Link } from "react-router-dom";
import { LoanForm } from "./LoanForm";
import styles from "./Style/Forms.module.css"
export default function Forms() {


  return (
    <>
      <div className={styles.fills}>
        <Link to="/data">
          <button className={styles.viewBtn}>View All Application</button>
        </Link>
      </div>
      <div className={styles.main}>
        <h1>Loan Application Form </h1>
        <hr />
        <p>Contact Information :</p>

        <LoanForm/>
      </div>
    </>
  );
}

//  



