import "./styles.css";

const onClickPlay = () => {};

export const App = () => {
  return (
    <main id="main1">
      <div className="imgarea">
        <img className="img current" src="./images/img01.jpg" alt="image01" />
        <img className="img" src="./images/img02.jpg" alt="image02" />
        <img className="img" src="./images/img03.jpg" alt="image03" />
        <img className="img" src="./images/img04.jpg" alt="image04" />
      </div>
      <ul className="dot"></ul>
      <div className="btnarea">
        <button className="prev">prev</button>
        <button className="pause">play</button>
        <button onClick={onClickPlay} className="next">
          next
        </button>
      </div>
    </main>
  );
};
