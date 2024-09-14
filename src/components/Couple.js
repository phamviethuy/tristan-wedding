import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
import FrameImage from '../assets/imgs/frame.png'

const StyledWrapper = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 0.3rem 0;
  .cp {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 414px) {
      flex-direction: column;
      margin: 0;
    }
    .profile {
      color: #222;
      padding: 0.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 0.4rem;
      .pic {
        width: 2.8rem;
        height: 2.8rem;
        background-repeat: no-repeat;
        background-size: 80%, 100%;
        background-position: center;
        overflow: hidden;
        &.boy {
          background-image: url('chandung02.jpg'),
            url(${FrameImage});
        }
        &.girl {
          background-image: url('chandung01.jpg'),
            url(${FrameImage});
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-family: "Playwrite CU", cursive;
        font-size: 0.4rem;
        padding: 0.2rem 0;
        margin: 0.2rem 0;
      }
      .intro {
        font-size: 0.18rem;
        white-space: nowrap;
      }
    }
  }
`
const tips = {
  h: {
    m: 'phải',
    w: 'trái'
  },
  v: {
    m: 'dưới',
    w: 'trên'
  }
}
export default function Couple({ popupDan }) {
  const [pos, setPos] = useState('h')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 414) {
        setPos('v')
      }
    }
  }, [])
  const handleDC = () => {
    popupDan('双击666')
  }
  return (
    <StyledWrapper>
      <Title title="Chú rể · Cô dâu" />
      <div className="cp">
        <div className="profile">
          <div className="pic boy" onDoubleClick={handleDC}>
            <img src={FrameImage} alt="man" />
          </div>
          <div className="name">Phạm Viết Huy🤵🏻</div>
          <div className="intro">
          Tôi có ba thứ không thể thiếu: nước, không khí và người phụ nữ bên {tips[pos].m}
          </div>
        </div>
        <div className="profile">
          <div className="pic girl" onDoubleClick={handleDC}>
            <img src={FrameImage} alt="man" />
          </div>
          <div className="name">Nguyễn Thị Phương👰🏻</div>
          <div className="intro">
            Tôi có ba thứ không thể thiếu: nước, không khí và người đàn ông bên {tips[pos].w}
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}
