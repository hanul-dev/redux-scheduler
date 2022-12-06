import React, { Children, useState } from "react";
import styled from "styled-components";
import usePortal from "react-useportal";
import { addSchedule } from "../redux/modules/dateReducer";

const Modal = ({ modal, inputSchedule, setDisplay, setContent }) => {
  const { Portal } = usePortal();

  let styles = { modal };
  return (
    <Portal>
      <StbackDrop {...styles} onClick={() => setDisplay(false)}></StbackDrop>
      <Stmodal {...styles}>
        <form onSubmit={inputSchedule}>
          <input
            type="text"
            name="schedule"
            placeholder="일정을 입력하세요"
            onChange={e => setContent(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              setDisplay(false);
            }}
          >
            저장
          </button>
          <button type="button" onClick={() => setDisplay(false)}>
            닫기
          </button>
        </form>
      </Stmodal>
    </Portal>
  );
};
// display: ${({ modal }) => {
//   return modal ? "flex" : "none";
// }};
const StbackDrop = styled.div`
  display: ${({ modal }) => {
    return modal ? "flex" : "none";
  }};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Stmodal = styled.div`
  display: ${({ modal }) => {
    return modal ? "flex" : "none";
  }};
  flex-direction: column;
  justify-contents: center;
  align-items: center;

  width 350px;
  height: 250px;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  z-index: 1000;
`;

export default Modal;
