import React from 'react'
import styled, { keyframes } from 'styled-components'
import Title from './SectionTitle'
const AniBeating = keyframes`
    from{
        opacity:.1;
    }
    to{
        opacity:1;
    }
`
const StyledWrapper = styled.section`
  width: 100%;
  background-color: #eee;
  padding: 0.3rem 0;
  .tl {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .items {
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 0.4rem;
        .content {
          position: relative;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #eef;
          padding: 0.2rem;
          border-radius: 0.12rem;
          width: 4rem;
          .title {
            font-size: 0.3rem;
          }
          .date {
            margin: 0.1rem 0;
            font-style: oblique;
            font-size: 0.12rem;
            color: #666;
          }
          .desc {
            height: 1.5rem;
            overflow: scroll;
            line-height: 1.5;
            margin-top: 0.12rem;
            font-size: 0.15rem;
            display: flex;
            flex-direction: column;
            span {
              margin-bottom: 0.1rem;
            }
          }
        }
        &:nth-child(even) {
          flex-direction: row-reverse;
        }
        .heart {
          margin: 0 0.2rem;
          font-size: 0.3rem;
          animation: ${AniBeating} 1s ease-in-out infinite;
          animation-direction: alternate;
          animation-delay: inherit;
        }
        .pic {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          img {
            z-index: 8;
            border-radius: 50%;
            border: 3px solid #999;
            width: 2rem;
            height: 2rem;
            object-fit: cover;
          }
        }
        @media screen and (max-width: 414px) {
          flex-direction: column-reverse;
          .heart {
            margin: 0.2rem 0;
          }
          &:nth-child(even) {
            flex-direction: column-reverse;
          }
        }
      }
    }
  }
`
const prefix =
  'https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/story.'
const items = [
  {
    title: 'Gặp gỡ：Lá bài số phận',
    datetime: '2019.06',
    desc: `<span>Năm 2019, tôi được làm hàng xóm với một cô sinh viên. </span><span>Chúng tôi làm quen nhau bằng một buổi học toán ♠, ♣, ♥, ♦</span><span>Từ đó chúng tôi chính thức quen biết.</span>`,
    picture: `anh01.jpg`
  },
  {
    title: 'Tìm hiểu：Hương vị tình yêu',
    datetime: '2020.12.20',
    desc: `<span>Chua, cay, ngọt, bùi ,... không thiếu một vị nào</span>
    <span>Chúng tôi đã dắt tay nhau đi qua rất nhiều cung bậc cảm xúc vui có, buồn có, bực tức có,
     hạnh phúc có...</span>
  `,
    picture: `anh02.jpg`
  },
  {
    title: 'Ở bên nhau：Khoảnh khắc bình yên',
    datetime: '2024.09.03',
    desc: `
    <span>Chính vì những điều đó đã làm chúng tôi hiểu nhau hơn và quyết định cùng nhau mở một cánh cửa mới mang tên gia đình</span>
    <span>Chúng tôi chính thức về chung 1 nhà。`,
    picture: `anh03.jpg`
  }
]
function createMarkup(html) {
  return { __html: html }
}

export default function Couple() {
  return (
    <StyledWrapper>
      <Title title="Câu chuyện của chúng tôi" />
      <div className="tl">
        <ul className="items">
          {items.map(({ title, datetime, desc, picture }, idx) => (
            <li key={title} className="item">
              <div className="pic">
                <img src={picture} alt="picture" />
              </div>
              <i className="heart">💓</i>
              <div
                className="content"
                style={{ animationDelay: `0.${idx * 5}s` }}
              >
                <h4 className="title">{title}</h4>
                <time className="date">{datetime}</time>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={createMarkup(desc)}
                ></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledWrapper>
  )
}
