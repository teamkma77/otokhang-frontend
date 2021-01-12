
import CONFIG from "../../../web.config";
import { useRouter } from "next/router";
import PopupRule from "components/website/popup/PopupRule";
import {useRef, useState, useEffect } from "react";


const Menu = ({ open,setOpen, status, setContext }) => {
  const router = useRouter();
  const handleClick = ()=>{
    setOpen(!open);
    setContext(true);
  }

  const baseUrlShare = CONFIG.NEXT_PUBLIC_BASE_URL;

  // console.log(router);
  return (
    <div className ={"StyledMenu"} open={open}>
        {/* <a onClick={()=>router.push("/")}>
            <span role="img" aria-label="Trang chủ"></span>
            Trang chủ
        </a> */}
         <a href={baseUrlShare}>
            <span role="img" aria-label="Chọn chủ đề"></span>
            Chọn chủ đề
        </a>
        {/* <a onClick={()=>router.push("/")}>
            <span role="img" aria-label="Chọn chủ đề"></span>
            Chọn chủ đề
        </a> */}

        {/* <a onClick={()=>router.push("/gallery")}>
            <span role="img" aria-label="Thư viện lời chúc"></span>
            Thư viện lời chúc
            </a> */}

        <a href={baseUrlShare+"/gallery"}>
            <span role="img" aria-label="Thư viện lời chúc"></span>
            Thư viện lời chúc
        </a>
        {/* <a onClick={()=>router.push("/create")}>
            <span role="img" aria-label="Tạo câu chúc"></span>
            Tạo câu chúc
        </a> */}
        <a onClick={()=>router.push("/gifts")}>
            <span role="img" aria-label="Quà tặng"></span>
            Danh sách quà tặng
        </a>
        <a onClick={handleClick}>
            <span role="img" aria-label={"T&C"}></span>
            {"Thể lệ chương trình"}
        </a>
        <style jsx>{`
            .StyledMenu{
                z-index: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: #002f0cf5;
                transform: ${ open ? 'translateX(0)' : 'translateX(-100%)'};
                height: 100vh;
                text-align: left;
                padding: 2rem;
                position: absolute;
                top: 0;
                left: 0;
                transition: transform 0.3s ease-in-out;

                @media (max-width: 576px) {
                    width: 100%;
                    }

                a {
                    font-size: 2rem;
                    text-transform: uppercase;
                    padding: 1rem 0;
                    font-weight: bold;
                    letter-spacing: 0.2rem;
                    color: #fff;
                    text-decoration: none;
                    transition: color 0.3s linear;

                    @media (max-width: 576px) {
                    font-size: 1.5rem;
                    text-align: center;
                    }

                    &:hover {
                    color: #343078;
                    }
                }
                }    
        `}</style>
    </div>
  )
}


const Burger = ({ open, setOpen }) => {
  return (
    <div className={"StyledBurger"} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
      <style jsx>{`
        .StyledBurger{
            position: absolute;
            top: 5%;
            left: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;

            &:focus {
                outline: none;
            }

            div {
                width: 2rem;
                height: 0.25rem;
                background: ${open ? '#FFF' : '#EFFFFA'};
                border-radius: 10px;
                transition: all 0.3s linear;
                position: relative;
                transform-origin: 1px;

                :first-child {
                transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
                }

                :nth-child(2) {
                opacity: ${ open ? '0' : '1'};
                transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
                }

                :nth-child(3) {
                transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
                }
            }
            }
      `}</style>
    </div>
  )
}


export default function MenuDemo () {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const [status, setStatus] = useState(false);

  useEffect(()=>{
    console.log(status);
  },[status])
  
  const handleOutSidePopup = () => setStatus(false);

  const Popup = (statusShowPopup) => {

      switch (statusShowPopup) {

          case true:

              return <PopupRule
                  statusShow={true}
                  handleOutSiteClose={handleOutSidePopup}
              >
              </PopupRule>

          default:

              return <PopupRule statusShow={false}></PopupRule>

      }
  }

  return (
    <div className="menuCustom_su">
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu 
          open={open} 
          setOpen={setOpen} 
          status={status}
          setContext={setStatus} 
        />
      </div>
      {
        Popup(status)
      }
      {/* {
        status
        ? <PopupRule statusShow={true}></PopupRule>
        :<PopupRule statusShow={false}></PopupRule>
      } */}
    </div>
  )  
}



const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};