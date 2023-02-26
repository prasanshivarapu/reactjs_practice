const Notification = (props) => {
  const { text1, text2, text3 } = props;
  //  Write your code here.
  return (
    <div className={`head1 mainhead  ${text2}`}>
      <img src={text3} className="image" />
      <h1 className="heading3">{text1}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg1">
    <div className="bg2">
      <h1 className="heading">Notification</h1>
      <Notification
        text1="Information"
        text2="subheading"
        text3="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        text1="Selection"
        text2="subheading1"
        text3="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        text1="About"
        text2="subheading2"
        text3="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        text1="Contactus"
        text2="subheading3"
        text3="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
