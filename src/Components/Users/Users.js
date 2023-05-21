import React, { useEffect, useState } from "react";
import ErrorBox from "../Errorbox/Errorbox";
import "./Users.css";
import DeleteModal from "./../DeleteModal/DeleteModal";
import EditModal from "./../EditModal/EditModal";
import DetailsModal from "./../DetailsModal/DetailsModal";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [mainUserID, setMainUserID] = useState(null);
  const [mainUserInfos, setMainUserInfos] = useState([]);

  const [userNewFirstname, setUserNewFirstname] = useState("");
  const [userNewLastname, setUserNewLastname] = useState("");
  const [userNewUsername, setUserNewUsername] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");
  const [userNewScore, setUserNewScore] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
    fetch(`http://localhost:8000/api/users`)
      .then((res) => res.json())
      .then((result) => setUsers(result));
  }

  const closeDeleteModal = () => setIsShowDeleteModal(false);
  const closeEditModal = () => setIsShowEditModal(false);
  const closeDetailsModal = () => setIsShowDetailsModal(false);

  const updateUser = (event) => {
    event.preventDefault();
    console.log();
    const userNewInfos = {
      firsname: userNewFirstname,
      lastname: userNewLastname,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };

    fetch(`http://localhost:8000/api/users/${mainUserID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getAllUsers();
      });
  };

  const removeUser = () => {
    console.log("کاربر ریمو شد");
    fetch(`http://localhost:8000/api/users/${mainUserID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowDeleteModal(false);
        getAllUsers();
      });
  };

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کاربران</h1>
      {users.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th> یوزرنیم </th>
              <th> رمز عبور </th>
              <th> شماره تماس </th>
              <th> ایمیل </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firsname} {user.lastname}
                </td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setMainUserID(user.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setMainUserInfos(user);
                      console.log(user);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    onClick={() => {
                      setMainUserID(user.id);
                      setIsShowEditModal(true);
                      setUserNewFirstname(user.firsname);
                      setUserNewLastname(user.lastname);
                      setUserNewUsername(user.username);
                      setUserNewPassword(user.password);
                      setUserNewPhone(user.phone);
                      setUserNewCity(user.city);
                      setUserNewEmail(user.email);
                      setUserNewAddress(user.address);
                      setUserNewBuy(user.buy);
                      setUserNewScore(user.score);
                    }}
                  >
                    ویرایش کاربر
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کاربری یافت نشد" />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از حذف اطمینان دارید ؟ "
          cancelAction={closeDeleteModal}
          submitAction={removeUser}
        >
          {" "}
        </DeleteModal>
      )}
      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateUser}>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewFirstname(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewFirstname}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewLastname(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewLastname}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewUsername(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewUsername}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewPassword(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewPassword}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewPhone(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewPhone}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewCity(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewCity}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewEmail(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewEmail}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <textarea
              onChange={(event) => setUserNewAddress(event.target.value)}
              className="edit-user-info-input"
              value={userNewAddress}
            ></textarea>
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewScore(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewScore}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </span>
            <input
              type="text"
              onChange={(event) => setUserNewBuy(event.target.value)}
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید."
              value={userNewBuy}
            />
          </div>
        </EditModal>
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>شهر</th>
                <th>آدرس</th>
                <th>امتیاز</th>
                <th>میزان خرید</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{mainUserInfos.city}</td>
                <td>{mainUserInfos.address}</td>
                <td>{mainUserInfos.score}</td>
                <td>{mainUserInfos.buy}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
    </div>
  );
}
