import React from "react";
import usersCollectionRef from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import styles from "./chinhnhanh.module.css";
import icon from "../../images/icon.png";
import DieuHuong from "../../components/DieuHuong/Dieuhuong";
import Homeindex from "../.././layout/home/homeindex"
import axios from 'axios'
function ChiNhanh() {
  const navigate = useNavigate();
  const [cacChiNhanh, setCacChiNhanh] = useState([]);
  const [Data6, setData6] = useState([]);
  const [Loadchinhnhanh, setLoadchinhnhanh] = useState(false);
  const [isToggled, setisToggled] =useState(false);

  const usersCollectionRef = collection(db, "CacChiNhanh");

  var idd=localStorage.getItem("Idchu")
  console.log("Trang 1 ",idd)

  const Getgruop = async () => {

    const url = `http://localhost:5001/Gruop/${idd}`
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
             
              Getgruop();
            });

let soluong=0;
  return (
    <>
    {/* <h1>trang chinh</h1> */}
    <button className={styles.AddChiNhanh} >
        Tạo Group
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
            <h4 style={{color: "white"}} className={styles.mainContent}>Tên Group: {soluong++}</h4>
          </div>
          
        ))}

        <div>
        {/* {isToggled && <Homeindex isToggled={isToggled}/>} */}
        </div>
      </div>
      
      
    </>
  );
}
// export  {isToggled};
export default ChiNhanh;

