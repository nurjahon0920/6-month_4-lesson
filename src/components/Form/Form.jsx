import React, { useState } from "react";
import "./Form.scss";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Group, setGroup] = useState("Rus");
  const [Check, setCheck] = useState("on");
  const [data, setData] = useState([]);
  const handelSubmit = (e) => {
    e.preventDefault();
    let user = {
      name: name,
      email: email,
      Group: Group,
      Check: Check,
    };
    setData([...data, user]);
    setName("");
    setEmail("");
    setGroup("");
    setCheck("");
  };
  const DeletData = (id) => {
    let dataCard = data.filter((_, i) => i !== id);
    setData(dataCard);
  };
  let dataItem = data?.map((el, id) => (
    <div key={id}>
      <p>{el.name}</p>
      <p>{el.email}</p>
      <p>{el.Group}</p>
      <p>{el.Check}</p>
      <button onClick={() => DeletData(id)}>Delete</button>
    </div>
  ));
  return (
    <>
      <div className="form">
        <form onSubmit={handelSubmit} className="d-flex g-20">
          <input
            type="text"
            placeholder="Name"
            className={"p-1"}
            style={{ width: "200px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={"bg-info"}
            style={{ width: "200px" }}
            required
          />
          <select
            name="Rus"
            className=""
            style={{ width: "200px" }}
            id=""
            value={Group}
            onChange={(e) => setGroup(e.target.value)}>
            <option value="React N58">React N58</option>
            <option value="React N53">React N53</option>
            <option value="React N50">React N50</option>
            <option value="React N45">React N45</option>
          </select>
          <input
            type="checkbox"
            value={Check ? "on" : "ok"}
            onChange={(e) => setCheck(e.target.value)}
            className=""
            style={{ width: "20px" }}
          />
          <button style={{ width: "200px" }}>Add</button>
        </form>
        <div className="students-list d-flex" style={{ marginTop: "10px" }}>
          <div
            className="text-secondary-emphasis mb-3"
            style={{ fontWeight: "bolder", width: "200px" }}>
            Firstname
          </div>
          <div
            className="text-secondary-emphasis mb-3"
            style={{ fontWeight: "bolder", width: "200px" }}>
            Lastname
          </div>
          <div
            className="text-secondary-emphasis mb-3"
            style={{ fontWeight: "bolder", width: "200px" }}>
            Group
          </div>
          <div
            className="text-secondary-emphasis mb-3"
            style={{ fontWeight: "bolder", width: "200px" }}>
            Does work?
          </div>
        </div>
        {dataItem}
      </div>
    </>
  );
};
export default Form;
