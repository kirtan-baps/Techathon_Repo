import "./Home.css";

import Fileupload from "./Fileupload";



function Home({ account, provider, contract }) {


  return (
    <div className="web-display">
      <div>
        <section className="Parent">
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
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;