import "./Form.css";
import user from "./icons/user.png";
import phone from "./icons/phone.png";
import locationIcon from "./icons/location.png";
const Form = () => {
  return (
    <>
      <div className="template">
        <div className="form_wrapper">
          <form id="form" action="/">
            <h1>Shipping</h1>
            <div className="name">
              <label htmlFor="user">
                <img src={user} alt="user" />
                <input type="text" placeholder="Name" id="user" />
                <br />
              </label>
              <p
                id="error_name"
                className="errors"
                style={{ color: "red" }}
              ></p>
            </div>

            <div className="phone">
              <label htmlFor="phone_num">
                <img src={phone} alt="phone" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  id="phone_num"
                  minLength="10"
                  maxLength="11"
                />

                <select name="contact" id="contact">
                  <option value="1">Mobile</option>
                  <option value="2">Home</option>
                  <option value="3">Office</option>
                </select>
              </label>
              <p
                id="error_phone"
                className="errors"
                style={{ color: "red" }}
              ></p>
            </div>

            <div className="address">
              <label htmlFor="addr">
                <img src={locationIcon} alt="address" />
                <input type="text" placeholder="Address" id="addr" />
              </label>
              <p
                id="error_addr"
                className="errors"
                style={{ color: "red" }}
              ></p>
            </div>

            <div className="city">
              <input type="text" placeholder="City" />

              <select name="state_list" id="states">
                <option value="">State</option>
                <option value="1">FCT, Abuja</option>
                <option value="2">Lagos</option>
              </select>

              <input type="number" placeholder="Zip" id="zip" />
            </div>

            <div className="buttons">
              <button type="reset" id="back">
                RESET
              </button>
              <button type="submit" id="proceed">
                PROCEED
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
