import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 20px;
  cursor: pointer;
  background-color: #eee;
  border-radius: 12px;

  img {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;

export const Info = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  height: 200px;

  h2 {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-weight: 900;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin: 10px 0;
  }
`;

export const Date = styled.p`
  font-weight: 200;
  opacity: 0.7;
`;
