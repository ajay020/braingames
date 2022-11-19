import { ItemType } from "../blockContainer/BlockContainer";
import "./block.css";

type PropType = {
  data: ItemType;
  flipBlockId: number | null;
  handleClick: (id: number) => void;
};

const Block = ({ data, flipBlockId, handleClick }: PropType) => {
  let blockStyle;
  let display;
  if (data.matched === "correct") {
    blockStyle = "correct";
  } else if (data.matched === "incorrect") {
    blockStyle = "incorrect";
  } else if (flipBlockId === data.id) {
    display = "show";
  } else {
    blockStyle = "";
  }

  return (
    <div className={`block`} onClick={() => handleClick(data.id)}>
      <div className={`layer ${blockStyle} ${display}`}></div>
      {/* <p>{data.src}</p> */}
      <img src={data.src} alt="" />
    </div>
  );
};

export default Block;
