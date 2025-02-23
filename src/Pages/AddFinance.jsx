import React from "react";
import "../PageCss/AddFinance.css"
import { useNavigate } from "react-router-dom";

const AddFinance = () => {
  const navigate = useNavigate();

  return (
    <div className="add-finance-container">
      <h2>Add Finance Record</h2>
      <form>
        <label>Date</label>
        <input type="date" required />

        <label>Title</label>
        <input type="text" placeholder="Enter title" required />

        <label>Amount</label>
        <input type="number" placeholder="Enter amount" required />

        <label>Type</label>
        <select required>
          <option value="">Select Type</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <label>Catalog</label>
        <select required>
          <option value="">Select Catalog</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Rent">Rent</option>
          <option value="Salary">Salary</option>
        </select>

        <div className="form-buttons">
          <button type="button" className="cancel-btn" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFinance;
