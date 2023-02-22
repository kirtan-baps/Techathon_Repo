import { useState, useEffect } from "react";
import "./myaccess.css";
const MyAccess = ({ contract }) => {
  // const sharing = async () => {
  //   const address = document.querySelector(".address-share").value;
  //   console.log(address);
  //   await contract.allow(address);
  // };
  // useEffect(() => {
  //   const accessList = async () => {
  //     const addressList = await contract.shareAccess();
  //     let select = document.querySelector("#disp");
  //     const options = addressList;

  //     for (let i = 0; i < options.length; i++) {
  //       let opt = options[i];
  //       let e1 = document.createElement("li");
  //       e1.textContent = opt;
  //       e1.value = opt;
  //       select.appendChild(e1);
  //     }

  //   };
  //   contract && accessList();
  // }, [contract]);
  const sharing = async () => {
    // e.preventDefault();
    const address = document.querySelector(".address-share").value;
    console.log(address);
    await contract.allow(address);
    // setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#disp");
      const options = addressList;
      console.log("LOL@");

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("li");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <div>
      <center>
        <h1>Share Access</h1>
        <center>
          <form>
            <input
              type="text"
              name="text"
              // id="txt"
              className="address-share"
              placeholder="Enter address here"
              required
            ></input>
            <br></br>
            <button className="share-btn" onClick={() => sharing()}>
              Share
            </button>

          </form>
          {/* <button className="share-btn" onClick={() => accessList()}>
              Show address
            </button> */}
          {/* <div className="body"> */}
          {/* <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <button onClick={() => sharing()}>Share</button> */}
          <div className="share-cont">
            <ul id="disp">{/* <li className='address'></li> */}</ul>
          </div>
        </center>
      </center>
    </div>
  );
};

export default MyAccess;


// API Key: e2d500192275a26bfb54
//  API Secret: 61171f1e5a5cba1797a85044becc8fafbb9ec2fa8107a046cf4a003eaa46aa54
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2MzAwZWMyZC1kMzIzLTQ5ZjAtOTUwMC01NzExZTZhZjIwMjciLCJlbWFpbCI6InNpY2FubzE3MTJAbXVzdGJlaXQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImUyZDUwMDE5MjI3NWEyNmJmYjU0Iiwic2NvcGVkS2V5U2VjcmV0IjoiNjExNzFmMWU1YTVjYmExNzk3YTg1MDQ0YmVjYzhmYWZiYjllYzJmYTgxMDdhMDQ2Y2Y0YTAwM2VhYTQ2YWE1NCIsImlhdCI6MTY3NzA3MjE0NH0.CDbGgBcvklPLt44HycC9e0gbB6hHAtwVzDUG1Ip6Vx4