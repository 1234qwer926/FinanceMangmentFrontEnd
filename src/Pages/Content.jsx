import React from 'react';
import "../PageCss/Explore.css";
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="explore-container">
      <div className="filter-container">
        <input type="date" placeholder="Filter by Date" />
        <input type="text" placeholder="Search by Title" />
        <select>
          <option value="">Filter by Type</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <select>
          <option value="">Filter by Catalog</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Rent">Rent</option>
          <option value="Salary">Salary</option>
        </select>
        <button className="add-btn">
          <Link to="/AddFinance" className="link-btn">+ Add</Link>
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Catalog</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-02-22</td>
              <td>Salary</td>
              <td>$5000</td>
              <td>Income</td>
              <td>Job</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2025-02-21</td>
              <td>Groceries</td>
              <td>$100</td>
              <td>Expense</td>
              <td>Food</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
