import styles from './slab.module.css'

const Slab = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Add your logic here to handle the form submission
    // You can access the form data using event.target.elements
    console.log('Form submitted');
  };
  
  return<div class="main-container">
  <form onSubmit={handleSubmit}>
  <div class={styles.salaryCalculatorNav}>
    <header>Salary Calculator</header>
  </div>
  <div class={styles.container}>
    <h2>Zomato Salary Calculator</h2>
    <table>
      <tr>
        <th>Order From</th>
        <th>Order To</th>
        <th>Weekday Amount</th>
        <th>Weekend Amount</th>
      </tr>
      {/* <!-- Repeat the following row structure for each Zomato order slab --> */}
      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Monday to Friday" /></td>
        <td><input type="text" placeholder="Saturday-Sunday" /></td>
      </tr>

      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Monday to Friday" /></td>
        <td><input type="text" placeholder="Saturday-Sunday" /></td>
      </tr>

      {/* <!-- Repeat the following row structure for each Zomato order slab --> */}
      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Monday to Friday" /></td>
        <td><input type="text" placeholder="Saturday-Sunday" /></td>
      </tr>
    </table>

    <h2>Swiggy Salary Calculator</h2>
    <table>
      <tr>
        <th>Order From</th>
        <th>Order To</th>
        <th>Weekday Amount</th>
        <th>Weekend Amount</th>
      </tr>
      {/* <!-- Repeat the following row structure for each Zomato order slab --> */}
      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Monday to Friday" /></td>
        <td><input type="text" placeholder="Saturday-Sunday" /></td>
      </tr>

      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Monday to Friday" /></td>
        <td><input type="text" placeholder="Saturday-Sunday" /></td>
      </tr>

      {/* <!-- Repeat the following row structure for each Zomato order slab --> */}
      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Monday to Friday" /></td>
        <td><input type="text" placeholder="Saturday-Sunday" /></td>
      </tr>
    </table>
    <h2>Penlty Calculator</h2>
    <table>
      <tr>
        <th>Bad Order</th>
        <th>Bad Order Amount</th>
        <th>Rejection</th>
        <th>Rejection Amount</th>
      </tr>
      {/* <!-- Repeat the following row structure for each Zomato order slab --> */}
      <tr>
        <td><input type="text" placeholder="Bad Order" /></td>
        <td><input type="text" placeholder="Bad Order Amount" /></td>
        <td><input type="text" placeholder="Rejection" /></td>
        <td><input type="text" placeholder="Rejection Amount" /></td>
      </tr>
    </table>
    <h2>Flipkart Salary Calculator</h2>
    <table>
      <tr>
        <th>Order From</th>
        <th>Order To</th>
        <th>Amount1</th>
      </tr>
      {/* <!-- Repeat the following row structure for each Zomato order slab --> */}
      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Amount1" /></td>
      </tr>

      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Amount1" /></td>
      </tr>

      {/* <!-- Repeat the following row structure for each Zomato order slab --> */}
      <tr>
        <td><input type="text" placeholder="Order From" /></td>
        <td><input type="text" placeholder="Order To" /></td>
        <td><input type="text" placeholder="Amount1" /></td>
      </tr>
    </table>
    <button type="submit">Submit</button>
  </div>
  </form>
</div>
};

export default Slab;
