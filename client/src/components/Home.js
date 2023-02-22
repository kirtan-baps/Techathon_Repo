import "./Home.css";

import Fileupload from "./Fileupload";



function Home({ account, provider, contract }) {


  return (
    <div className="web-display">
      <div>
        <section className="Parent">
          {/* <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"></img> */}
          <section className="child">
            <div className="Information">
              <p className="content-info">
                Hello, <span className="infoAcc" >{account}</span> <br></br>
                This is DeCentralized file storing and sharing app, Where you can securely store and share your images.
              </p>
            </div>
            <Fileupload account={account}
              provider={provider}
              contract={contract}></Fileupload>
          </section>
          <div className="img">
            {/* <img className="Img-eth" src="https://gifdb.com/images/high/ethereum-crypto-currency-ze5wridyq212wbi8.gif" alt="Etherium"></img> */}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;