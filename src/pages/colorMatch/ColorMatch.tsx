import { useState, useEffect } from "react";
import "./colorMatch.css";

const coloredBoxList = [
  {
    id: 1,
    color: "red",
  },
  {
    id: 2,
    color: "green",
  },
  {
    id: 3,
    color: "yellow",
  },
  {
    id: 4,
    color: "blue",
  },
  {
    id: 5,
    color: "black",
  },
];

const textBoxList = [
  {
    id: 1,
    color: "blue",
    meaning: "red",
  },
  {
    id: 2,
    color: "green",
    meaning: "blue",
  },
  {
    id: 3,
    color: "red",
    meaning: "yellow",
  },
  {
    id: 4,
    color: "yellow",
    meaning: "green",
  },
  {
    id: 5,
    color: "yellow",
    meaning: "black",
  },
];

coloredBoxList.sort(() => Math.random() - 0.6);
textBoxList.sort(() => Math.random() - 0.6);

const ColorMatch = () => {
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(-1);
  const [timer, setTimer] = useState<string>("1:30");
  const [displayModel, setDisplayModel] = useState<boolean>(true);

  const [boxList, setBoxList] = useState(coloredBoxList);
  const [textList, setTextBoxList] = useState(textBoxList);

  useEffect(() => {
    let timerId: number;

    const startTimer = () => {
      let minute: number = 1;
      let second = 30;

      setScore(0);

      timerId = setInterval(() => {
        second--;

        if (second == 0) {

            if(minute <= 0 && second <= 0){
                setDisplayModel(true);
                clearInterval(timerId);
            }else{
                minute--;
                second = 60;
            }
        }

        let min = minute <= 9 ? "0" + minute : minute;
        let sec = second <= 9 ? "0" + second : second;

        setTimer(`${min}:${sec}`);

      }, 1000);
    };

    if(!displayModel){
        startTimer();
    }

    return () => {
      clearInterval(timerId);
    };
  }, [displayModel]);

  const clickHandler = (ans: string) => {
    let currBox = boxList[currIndex];
    let currText = textList[currIndex];

    if (ans === "yes" && currBox.color === currText.meaning) {
      setScore((pre) => pre + 5);
    }

    setCurrIndex((preIndex) => {
      if (preIndex === boxList.length - 1) {
        //re-shuffle colors
        textList.sort(() => Math.random() - 0.6);
        boxList.sort(() => Math.random() - 0.6);

        setBoxList(boxList);
        setTextBoxList(textList);

        return 0;
      }
      return preIndex + 1;
    });
  };

  const startGame = () =>{
    setDisplayModel(false);
  }

  let playBtnText = score < 0 ? 'Start' : 'Replay'

  return (
    <div className="container">
        {
            displayModel && ( <div className="model">
               { score>=0 && <p>You scored {score} points</p> }
            <button onClick={startGame}>
                {playBtnText}
            </button>
            <button>Quit</button>
          </div>)
        }
     
      <div className="color-container">
        <div className="color-header">
          <p>Timer - {timer}</p>

          <p>score - {score}</p>
          <p>Does the meaning match the box color?</p>
        </div>

        <div className="box-wrapper">
          <div
            className="box box-color"
            style={{ backgroundColor: boxList[currIndex].color }}
          ></div>
          <div className="box">
            <p
              className="box-text"
              style={{ color: textList[currIndex].color }}
            >
              {textList[currIndex].meaning}
            </p>
          </div>
        </div>

        <div className="color-actions">
          <button onClick={() => clickHandler("no")}>NO</button>
          <button onClick={() => clickHandler("yes")}>YES</button>
        </div>
      </div>
    </div>
  );
};

export default ColorMatch;
