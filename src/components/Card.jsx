import { useState } from "react";
import CardContent from "./CardContent";
import IconStar from "../../images/icon-star.svg";
import IllustrationThankYou from "../../images/illustration-thank-you.svg";
import styles from "./Card.module.css";

const Card = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {submitted ? (
        <div className={`${styles["card"]} ${styles["thank-you-card"]}`}>
          <div className={styles["rating-container"]}>
            <img src={IllustrationThankYou} alt="" />
            <div className={styles["rating"]}>
              <p>You selected {rating} out of 5</p>
            </div>
          </div>
          <CardContent
            heading="Thank you!"
            text="We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!"
            center={true}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles["card"]}>
          <img src={IconStar} alt="" className={styles["star-img"]} />
          <CardContent
            heading="How did we do?"
            text="Please let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!"
          />
          <div className={styles["buttons"]}>
            <button type="button" onClick={() => setRating(1)}>
              1
            </button>
            <button type="button" onClick={() => setRating(2)}>
              2
            </button>
            <button type="button" onClick={() => setRating(3)}>
              3
            </button>
            <button type="button" onClick={() => setRating(4)}>
              4
            </button>
            <button type="button" onClick={() => setRating(5)}>
              5
            </button>
          </div>
          <button disabled={!rating} className={styles["submit-btn"]}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Card;
