export default function Card({ props }) {
  function getZeroes() {
    let zeroes = 16 - props.cardNumber.toString().length;
    let zeroString = "";
    for (let i = 0; i < zeroes; i++) {
      zeroString = zeroString + "0";
    }
    let finalString = props.cardNumber + zeroString;
    let finalfinalString;
    let result;
    for (let i = 0; i < finalString.length; i++) {
      if (i % 4 === 0) {
        finalfinalString = finalfinalString + " ";
      }
      finalfinalString = finalfinalString + finalString.charAt(i);
    }
    if (finalfinalString.includes("undefined")) {
      result = finalfinalString.substring(finalfinalString.indexOf(" ") + 1);
    }
    return result;
  }
  function getYear() {
    if (props.year) {
      return props.year.toString().length < 2 ? "0" + props.year : props.year;
    } else {
      return "00";
    }
  }
  function getMonth() {
    if (props.month) {
      return props.month.toString().length < 2
        ? "0" + props.month
        : props.month;
    } else {
      return "00";
    }
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <div className="card-image"></div>
          <p className="numbers">{getZeroes()}</p>
          <div className="card-wrapper">
            <div className="name-container">
              <p>
                {props.cardHolderName
                  ? props.cardHolderName.toUpperCase()
                  : "JANE APPLESEED"}
              </p>
            </div>
            <div className="date-container">
              <span>
                {getMonth()} / {getYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-back"></div>
      </div>
    </div>
  );
}
