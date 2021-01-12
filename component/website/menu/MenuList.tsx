
import CONFIG from "web.config";
import {useState, useEffect, useRef} from "react";
import { useRouter } from "next/router";
import { assertInputObjectType } from "graphql";
import asset from "plugins/assets/asset";

export default function menuCustomList () {
  const node = useRef();
  const router = useRouter();
  const baseUrlShare = CONFIG.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="menuCustomList">
      <div ref={node}>
            <a onClick={()=>router.push("/")} className="logoDesktop">
              <img src={asset("/image/demo/logo1.png")}/>
            </a>
            <a href={baseUrlShare}>
                <span role="img" aria-label="Trang chủ"></span>
                Trang chủ
            </a>
            <a href={baseUrlShare}>
                <span role="img" aria-label="Sản phẩm"></span>
                Sản phẩm
            </a>
            <a href={baseUrlShare}>
                <span role="img" aria-label="Dịch vụ"></span>
                Dịch vụ
            </a>
            <a href={baseUrlShare}>
                <span role="img" aria-label="Bản giá"></span>
                Bản giá
            </a>
            <a href={baseUrlShare+"/gallery"}>
                <span role="img" aria-label="Tin tức"></span>
                Tin tức
            </a>
            <a href={baseUrlShare+"/gallery"}>
                <span role="img" aria-label="Giới thiệu"></span>
                Giới thiệu
            </a>
            <a onClick={()=>router.push("/gifts")}>
                <span role="img" aria-label="Quà tặng"></span>
                Liên hệ
            </a>
      </div>
      <style jsx>{`
        .menuCustomList{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            /* background-color: #a5c9ca; */
            padding:20px 0;
            color: #000;
            >div{
              display: flex;
            }
            a{
                color: #000;
                padding: 5px 10px;
                font-size: 0.85vw;
                margin: 0 20px;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                &:hover{
                  transition: 0.2s;
                  color: seagreen;
                }
            }
        }
        .logoDesktop{
          img{
            display: block;
            width: 170px;
          }
        }
        @media screen and (min-width : 1023px){
          .menuCustomList{
            display: flex;
          }
        }
      `}</style>
    </div>
  )  
}
