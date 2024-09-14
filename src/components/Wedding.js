import React from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
import WeddingImage from '../assets/imgs/wedding.png'
import Map1Image from '../assets/imgs/qr-map01.jpg'
import Map2Image from '../assets/imgs/qr-map01.jpg'

const StyledWrapper = styled.section`
  z-index: 1;
  position: relative;
  width: 100%;
  margin: auto;
  max-width: 1800px;
  background-color: #fff;
  padding: 0.3rem 0;
  background: url('ANH_PHONG_2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .wrapper {
    max-width: 1400px;
    margin: 0.2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .box {
      min-height: 4.4rem;
      width: 4rem;
      background-color: rgba(2, 2, 2, 0.5);
      z-index: 9;
      color: #fff;
      padding: 0.25rem 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.2rem;
      border-radius: 5px;
      /* border: 2px solid rgba(2,2,2,.5); */
      &:first-child {
        margin: 0 0.25rem 0 0;
      }
      @media screen and (max-width: 768px) {
        &:first-child {
          margin: 0 0 0.25rem 0;
        }
      }
      .title {
        font-size: 0.3rem;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid rgba(222, 222, 222, 0.4);
        padding-bottom: 0.2rem;
      }
      .items {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.2rem 0;
        .item {
          display: flex;
          align-items: flex-start;
          margin: 0.1rem 0;

          .label {
            color: #ccc;
            white-space: nowrap;
            &:after {
              content: '：';
            }
          }
          .txt {
            white-space: nowrap;
            font-weight: 600;
            &.loc {
              display: flex;
              flex-direction: column;
              .map {
                margin-top: 0.12rem;
                width: 2.4rem;
                height: 2.4rem;
                img {
                  width: 100%;
                  height: 100%;
                  border: 1px solid #ccc;
                  border-radius: 10px;
                }
                &:hover img {
                  box-shadow: 0px 1px 20px black;
                }
              }
            }
          }
          @media screen and (max-width: 768px) {
            flex-direction: column;
            .label {
              margin-bottom: 0.12rem;
            }
          }
        }
      }
    }
  }
`
export default function Wedding() {
  return (
    <StyledWrapper>
      <Title title="Lễ cưới t" />
      <div className="wrapper">
        <div className="box">
          <h3 className="title">Chú rể</h3>
          <ul className="items">
            <li className="item">
              <span className="label">Thời gian</span>
              <span className="txt">2024.09.23 13:30</span>
            </li>
            <li className="item">
              <span className="label">Địa điểm</span>
              <div className="txt loc">
                <span>Từ Phong-Cách Bi-Quế Võ-Bắc Ninh</span>
                <a target="_blank" className="map" href={'https://www.google.com/maps/place/C%E1%BB%ADa+h%C3%A0ng+g%C3%A0+v%E1%BB%8Bt+To%C3%A0n+H%C6%B0%E1%BB%9Dng/@21.127429,106.1800074,16z/data=!4m15!1m8!3m7!1s0x313574e8f2f82703:0xcba74c0c7f16b51!2zVOG7qyBQaG9uZywgQ8OhY2ggQmksIFF14bq_IFbDtSBEaXN0cmljdCwgQmFjIE5pbmggUHJvdmluY2UsIFZpZXRuYW0!3b1!8m2!3d21.1279659!4d106.1852958!16s%2Fg%2F1tmxc0kv!3m5!1s0x3135759231053df5:0x211e1fa933412181!8m2!3d21.1275048!4d106.1872099!16s%2Fg%2F11vq7lk0sx?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'}>
                  <img src={Map1Image} alt="map" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="box">
          <h3 className="title">Cô dâu</h3>
          <ul className="items">
            <li className="item">
              <span className="label">Thời gian</span>
              <span className="txt">2024.09.23 11:00</span>
            </li>
            <li className="item">
              <span className="label">Địa điểm</span>
              <div className="txt loc">
                <span>Thống Nhất-Trung Giã-Sóc Sơn-Hà Nội</span>
                <a target="_blank" className="map" href={'https://www.google.com/maps/place/SPA+H%E1%BA%A0NH+BEAUTY/@21.3088849,105.8704528,18.27z/data=!4m15!1m8!3m7!1s0x31351c993286baed:0xb278939da0c11538!2zxJAuIFRo4buRbmcgTmjhuqV0LCBUcnVuZyBHacOjLCBTw7NjIFPGoW4sIEjDoCBO4buZaSwgVmlldG5hbQ!3b1!8m2!3d21.3104505!4d105.87052!16s%2Fg%2F11r97crxld!3m5!1s0x31351d88948f8763:0x62d387d84ec7185e!8m2!3d21.3092299!4d105.8715588!16s%2Fg%2F11vsfmyv77?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'}>
                  <img src={Map2Image} alt="map" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  )
}
