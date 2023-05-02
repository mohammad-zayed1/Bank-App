import { useState } from "react";

const Main = () => {
  const [accounts, setAccount] = useState([]);
  const [counter, setCounter] = useState(1);
  const [newAccount, setNewAccount] = useState({
    id: "",
    userName: "",
    number: "",
    type: "",
  });


  function handleSubmit(event) {
    event.preventDefault();

    setAccount((prevAccounts) => {
      return [...prevAccounts, { ...newAccount, id: counter }];
    });
    setCounter((prevCount) => prevCount + 1);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewAccount((prevData) => ({
      ...prevData,
      id: counter,
      [name]: value,
    }));
  }

  function handleDelete(event) {
    setAccount((prevAccounts) => {
      return prevAccounts.filter((account) => account.id != event.target.id);
    });
  }

  // mapping in array and return new card that display account info
  const card = accounts.map((account) => {
    return (
      <div key={account.id} className="card">
        <h3>{account.userName}</h3>
        <ul>
          <li>
            <b>User-Id: </b>
            {account.id}
           
          </li>
          <li>
            <b>Account-Type:</b> {account.type}
          </li>
          <li>
            {" "}
            <b>Account-Number:</b> {account.number}
          </li>
        </ul>
        <button id={account.id} className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
  });
  return (
    <main>
      <form action="#" onSubmit={handleSubmit}>
        <h2>Add New Account</h2>
        <input
          type="text"
          name="userName"
          value={newAccount.userName}
          placeholder="User name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          value={newAccount.type}
          placeholder="Account Type"
          onChange={handleChange}
        />
        <input
          type="text"
          name="number"
          value={newAccount.number}
          placeholder="Account number"
          onChange={handleChange}
        />

        <button>Add</button>
      </form>
      <div className="cards-box">{card}</div>
    </main>
  );
};

export default Main;
