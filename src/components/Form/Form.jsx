import React, { useState } from "react";
import "./Form.scss";
const Form = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Group, setGroup] = useState("Group");
  const [Check, setCheck] = useState("yes");
  const [data, setData] = useState([]);
  const handelSubmit = (e) => {
    e.preventDefault();
    let user = {
      Firstname: Firstname,
      Lastname: Lastname,
      Group: Group,
      Check: Check,
    };
    setData([...data, user]);
    setFirstname("");
    setLastname("");
    setGroup("");
    setCheck("");
  };
  const DeletData = (id) => {
    let dataCard = data.filter((_, i) => i !== id);
    setData(dataCard);
  };
  let dataItem = data?.map((el, id) => (
    <div
      key={id}
      style={{
        display: "flex",
        alignItems: "start",
        gap: "20px",
      }}>
      <p style={{ width: "200px" }}>{el.Firstname}</p>
      <p style={{ width: "200px" }}>{el.Lastname}</p>
      <p style={{ width: "200px" }}>{el.Group}</p>
      <p style={{ width: "200px" }}>{el.Check}</p>
      <button
        onClick={() => DeletData(id)}
        style={{
          background: "#ff0000",
          width: "100px",
          height: "40px",
          color: "#fff",
          cursor: "pointer",
          borderRadius: "5px",
          marginLeft: "-50px",
        }}>
        Delete
      </button>
    </div>
  ));
  return (
    <>
      <div className="form">
        <form
          onSubmit={handelSubmit}
          className="d-flex"
          style={{ marginTop: "10px" }}>
          <input
            type="text"
            placeholder="Firstname"
            className={"p-1"}
            style={{
              width: "200px",
              marginRight: "20px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #333",
            }}
            value={Firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Lastname"
            value={Lastname}
            onChange={(e) => setLastname(e.target.value)}
            style={{
              width: "200px",
              marginRight: "20px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #333",
            }}
            required
          />
          <select
            name="group"
            className=""
            style={{
              width: "200px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #333",
            }}
            value={Group}
            onChange={(e) => setGroup(e.target.value)}>
            <option value="React N58" id="1">
              React N58
            </option>
            <option value="React N53" id="2">
              React N53
            </option>
            <option value="React N50" id="3">
              React N50
            </option>
            <option value="React N45" id="4">
              React N45
            </option>
          </select>
          <input
            type="checkbox"
            value={Check ? "yes" : "no"}
            onChange={(e) => setCheck(e.target.value)}
            className=""
            style={{ width: "20px", marginLeft: "20px", cursor: "pointer" }}
          />
          <button
            style={{
              width: "100px",
              background: "aqua",
              borderRadius: "5px",
              marginLeft: "150px",
            }}>
            Add
          </button>
        </form>
        <div
          className="students-list d-flex g-20"
          style={{ marginTop: "10px", gap: "20px" }}>
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
