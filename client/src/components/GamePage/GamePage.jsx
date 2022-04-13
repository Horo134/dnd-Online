import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import axios from 'axios';
import { spacing } from '@mui/system';

export default function GamePage() {

  const gamee = useSelector(state => state.oneGame);

  const dispatch = useDispatch();
  const [allBoards, setAllBoards] = useState([]);
  const [oneGameBoard, setOneGameBoard] = useState([]);
  const [gameBoardCoordinates, setGameBoardCoordinates] = useState({});
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/boards/all')
      .then((boardsFromServer) => {
        console.log(boardsFromServer.data);
        setAllBoards(boardsFromServer.data)
      })
  }, []);

  const getGameHundler = (id) => {
    console.log(id);
    const game = JSON.parse(allBoards.filter(el => el.id === id)[0].board);
    dispatch({type: 'SET_ONE_GAME', payload: game})
    // setOneGameBoard(game)
  }

  function getTDHandler(e) {
    const x = e.target.parentNode.rowIndex;
    const y = e.target.cellIndex; 
    setGameBoardCoordinates({ x, y });
    console.log('xy', x, y, imgSrc);
    dispatch({ type: 'SET_ATTR', payload: {x, y, imgSrc}});
  }

  function getImgSrcHundler (e) {
    setImgSrc(e.target.alt);
  }

  console.log('*****************', gamee);

  return (
    <>
      {/* <div className={style.topPanel}>top panel</div> */}
      <div className={style.gamePage}>
        <div className={style.leftSide}>
          <p>left side</p>
          <div className={style.chooseBoard}>
            <p>chosse board</p>
            {allBoards.map((board) => <button key={board.id} onClick={() => getGameHundler(board.id)}>{board.title}</button>)}
          </div>
        </div>
        <div className={style.mainSide}>
          <p>main gamePage</p>
          <div className={style.gameBox}>
            <table className={style.tableBox} onClick={(e) => getTDHandler(e)}>
              <thead></thead>
              <tbody>
                { gamee.length ?
                  gamee.map(e => <tr>{e.map(el => <td className={style.bgImg} style={{ backgroundImage: `url(${el.bgImg})` }}>{el.attr ? <img src={el.attr} alt="dnd online" style={{backgroundColor: '#ffffff00'}} /> : <span></span>}</td>)}</tr>) :
                  <span>Chosse a game from left side</span>
                }
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <div className={style.rightSide}>right side</div>
      </div>
      <div className={style.footerPanel}>
        <span>bottom panel</span>
        <img src="./images/5.png" alt="./images/5.png" onClick={getImgSrcHundler} />
        <img src="./images/5.png" alt="./images/5.png" onClick={getImgSrcHundler} />
      </div>
    </>
  )
}
