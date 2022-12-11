import React from "react";
import Card from "./Card";

export default function Form() {
  const [formData, setFormData] = React.useState({
    cardHolderName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
    submit: false,
  });

  function handleChange(event) {
    if (isCorrect(event)) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value,
        };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        submit: true,
      };
    });
  }

  function isCorrect(e) {
    switch (e.target.name) {
      case "cardHolderName":
        return !hasNumbers(e.target.value);
      case "cardNumber":
        return !isNaN(e.target.value);
      case "month":
        return e.target.value <= 12;
      case "year":
        return e.target.value <= 99;
      case "cvc":
        return e.target.value <= 999;
      default:
        return;
    }
  }

  function hasNumbers(t) {
    var regex = /\d/g;
    return regex.test(t);
  }
  function reload() {
    window.location.reload();
  }

  return (
    <>
      <Card props={{ ...formData }} />
      <div className="form-container">
        {formData.submit && (
          <div className="to-show-on-submit">
            <div className="check-image"></div>
            <span className="thanks">T H A N K Y O U!</span>
            <span>We've added you card details</span>
            <button onClick={reload} className="btn">
              Continue
            </button>
          </div>
        )}
        {!formData.submit && (
          <div className="form-wrapper">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="name">CARDHOLDER NAME</label>
              <input
                type="text"
                name="cardHolderName"
                id="name"
                className="form-input"
                value={formData.cardHolderName}
                autoComplete="off"
                onChange={handleChange}
                maxLength="28"
                placeholder="e.g. Jane Appleseed"
                required
              />
              <label htmlFor="card-number">CARD NUMBER</label>
              <input
                type="text"
                name="cardNumber"
                id="number"
                className="form-input"
                onChange={handleChange}
                value={formData.cardNumber}
                maxLength="16"
                placeholder="e.g. 1234 5678 9123 0000"
                required
              />
              <div className="small-input">
                <div className="small-input-one">
                  <label htmlFor="month">Exp. Date (MM/YY)</label>
                  <input
                    className="form-input"
                    type="text"
                    name="month"
                    onChange={handleChange}
                    id="month"
                    value={formData.month}
                    maxLength="2"
                    autoComplete="off"
                    placeholder="MM"
                    required
                  />
                  <input
                    type="text"
                    className="form-input"
                    name="year"
                    id="year"
                    value={formData.year}
                    maxLength="2"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="YY"
                    required
                  />
                </div>
                <div className="small-input-two">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    className="form-input"
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    id="cvc"
                    maxLength="3"
                    autoComplete="off"
                    placeholder="e.g. 123"
                    required
                  />
                </div>
              </div>
              <button className="btn">Confirm</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}