import { useState } from "react";
import Block from "../block/Block";
import './blockContainer.css';

import wink from '../../assets/images/wink.png';
import angle from '../../assets/images/angle.png';
import cool from '../../assets/images/cool.png';
import fear from '../../assets/images/fear.png';
import grin from '../../assets/images/grin.png';
import love from '../../assets/images/love.png';
import sad from '../../assets/images/sad.png';
import tears from '../../assets/images/tears.png';



const list : ItemType[] = [
    {id:1, src: wink, matched: ""},
    {id:2, src: wink, matched: ""},
    {id:3, src: angle, matched: ""},
    {id:4, src: angle, matched: ""},
    {id:5, src: cool, matched: ""},
    {id:6, src: cool, matched: ""},
    {id:7, src: fear, matched: ""},
    {id:8, src: fear, matched: ""},
    {id:9, src: grin, matched: ""},
    {id:10, src: grin, matched: ""},
    {id:11, src: love, matched: ""},
    {id:12, src: love, matched: ""},
    {id:13, src: sad, matched: ""},
    {id:14, src: sad, matched: ""},
    {id:15, src: tears, matched: ""},
    {id:16, src: tears, matched: ""},

];

export type ItemType ={
    id:number,
    src: string,
    matched: string 
}

const BlockContainer = () => {
    list.sort(() => Math.random() - 0.6 );
    const [items, setItems] = useState([...list])
    const [steps, setSteps] = useState<number|0>(0);
    const [correctCount, setCorrectCount] = useState<number|0>(0);

    const [selectedId, setSelectedId] = useState<number|null>(null);

    const handleClick = (currId : number)=>{
       
        if(!isAlreadyMatched(currId)){
            if(!selectedId){
                setSelectedId(currId);
            }else if(currId !== selectedId){
                 setSteps(preStep => preStep + 1);
                 checkForMatching(currId);

            }
        }
    }

    function isAlreadyMatched(id:number){
        let found = items.find(item => item.id === id  && item.matched === 'correct');
        return found;
    }

    function checkForMatching(currId:number){
        let ob1 = items.find(item => item.id === selectedId);
        let ob2 = items.find(item => item.id === currId);
        console.log(ob1?.src, ob2?.src);
        
        if(ob1 && ob2){
           if(ob1.src === ob2.src)  {
            ob1.matched = "correct";
            ob2.matched = "correct";
            setCorrectCount(prev=> prev+1);
           }else{
            ob1.matched = "incorrect";
            ob2.matched = "incorrect";
            resetStyle(ob1, ob2);
           }

          let updatedItems = items.map(item => {
            if(item.id === ob1?.id) return ob1;
            else if(item.id === ob2?.id) return ob2;
            return item;
          });

          setSelectedId(null);
          setItems(updatedItems);
        }
    }

    function resetStyle(ob1: ItemType, ob2: ItemType){
        setTimeout(()=>{
            ob1.matched = "";
            ob2.matched = "";
            let updatedItems = items.map(item => {
                if(item.id === ob1?.id) return ob1;
                else if(item.id === ob2?.id) return ob2;
                return item;
            });
            setItems(updatedItems);
        }, 500)
    }

    const resetGame  = () =>{
        let newlist = items.map(item => { return { ...item, matched:"" } } );
        newlist.sort(() => Math.random() - 0.6)
        setItems(newlist);
        setSelectedId(null);
        setSteps(0);
        setCorrectCount(0);
    }

    return ( <> 
    <div className="container">
                { correctCount === items.length/2 && <p className="successTxt">Great! You took {steps} steps to solve. </p>}
                <div className="header">
                    <button onClick={resetGame}>Reset</button>
                    <span>Steps - {steps}</span>
                </div>
                
                <div className="blockContainer">
                    {
                        items.map(item => <Block key={item.id} flipBlockId = {selectedId} data={item} handleClick = {handleClick} />)
                    }
                </div>
    </div> </>);
}
 
export default BlockContainer;