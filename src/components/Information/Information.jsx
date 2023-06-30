import React from 'react';
import SimplifiedDiv from '../SimplifiedDiv/SimplifiedDiv';

const styles = {
  list: {
    listStyleType: 'none',
  },
  container: {
    padding: '0% 10% 10% 10%',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'space between',
  },
  leftBox: {
    border: '1px solid black',
    width: '40%',
  },
  rightBox: {
    border: '1px solid black',
    width: '40%',
  },
  dropMenu: {
    display: 'flex',
  },
};

const Information = () => {
  return (
    <SimplifiedDiv style={styles.container}>
      <h3>What would you like to do next?</h3>
      <p>
        Choose if you have a discount code or reward points you want to use or
        would you like to estimate your delivery cost
      </p>
      <SimplifiedDiv style={styles.subContainer}>
        <SimplifiedDiv style={styles.leftBox}>
          <ul style={styles.list}>
            <li>
              <input type='checkbox' />
              Use Coupon Code
            </li>
            <li>
              <input type='checkbox' />
              Use Gift Code
            </li>
            <li>
              <input type='checkbox' />
              Estimate Shipping & Taxes
            </li>
          </ul>

          <label for='conutry'>Country:</label>

          <label for='Region'>Region/Sate:</label>
          <label for='zip'>Zip Code:</label>
          <br />
          <select>
            <option value='Bosnia'>Bosnia</option>
            <option value='Turkiye'>Turkiye</option>
            <option value='Sandzak'>Sandzak</option>
          </select>
          <select>
            <option value='Bosnia'>...............</option>
            <option value='Turkiye'>....</option>
            <option value='Sandzak'>...</option>
          </select>
          <input></input>
          <button>Get Quotes</button>
          <button>Continue</button>
        </SimplifiedDiv>
        <SimplifiedDiv style={styles.rightBox}>
          <button>Update</button>
          <button>Check Out</button>
        </SimplifiedDiv>
      </SimplifiedDiv>
    </SimplifiedDiv>
  );
};

export default Information;
