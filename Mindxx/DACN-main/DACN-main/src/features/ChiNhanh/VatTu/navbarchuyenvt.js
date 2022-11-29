
// import  './navbarchuyenvt.css'

import styles from "../chinhnhanh.module.css";
import React, {useEffect, useState} from 'react';
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import icon from "../../../images/icon1.png";

import DieuHuong from "../../../components/DieuHuong/Dieuhuong"
// import BanHang from './BanHang'
// import Cart from './cart'
import VatTu from './VatTu'
import PhieuChuyen from './PhieuChuyen'
import ThongBaoChuyen from './ThongBaoChuyen'



const Navbarchuyenvt = () => {
  const [Data6, setData6] = useState([]);

  var idd=localStorage.getItem("Idchu")
  console.log("Trang 1 ",idd)
  
  const GetTask = async () => {

    const url = `http://localhost:5001/Task/${idd}`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                      setData6(data)
                      console.log("Trang ",data)
                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }

            useEffect(() => {
             
              GetTask();
            });

            let soluong=0;

  return (
    <>
    {/* <h1>trang chinh</h1> */}
    <button className={styles.AddChiNhanh} >
        Tạo Task
      </button>

      <div className={styles.mainHeader}>
        {Data6.map((chiNhanh) => (
          <div
            key={chiNhanh._id}
            className={styles.left}
            
          >
            <img
              src={icon}
              alt="images"
              style={{
                width: "150px",
                height: "150px",
                position: "relative",
                left: "50px",
              }}
            />
            <h4 style={{color: "white"}} className={styles.mainContent}>Stt Task: {soluong++}</h4>
            <h5 style={{color: "white"}} className={styles.mainContent}>title: {chiNhanh.title}</h5>
            <h5 style={{color: "white"}} className={styles.mainContent}>describe: {chiNhanh.description}</h5>
            <h5 style={{color: "white"}} className={styles.mainContent}>type: {chiNhanh.type}</h5>
            <h5 style={{color: "white"}} className={styles.mainContent}>Hoan thanh: {chiNhanh.complete}</h5>
          </div>
          
        ))}

        <div>
        {/* {isToggled && <Homeindex isToggled={isToggled}/>} */}
        </div>
      </div>
      
      
    </>
  );
};

export default Navbarchuyenvt;