// import { Backdrop } from "@mui/material";
// import { BallTriangle } from "react-loader-spinner";
import style from "../styles/Loader.module.css";
import styled from "styled-components";
export default function Loader() {
  return (
    // <Backdrop open={true} sx={{zIndex:9999}}>
    //   <BallTriangle
    //     height={100}
    //     width={100}
    //     radius={5}
    //     color="#fff"
    //     ariaLabel="ball-triangle-loading"
    //     wrapperClass={{}}
    //     wrapperStyle=""
    //     visible={true}
    //   />
    // </Backdrop>
    <Backdrop>
      <LoaderComponent>
        <div className={style.ldsGrid}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoaderComponent>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
const LoaderComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
