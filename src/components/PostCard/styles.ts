import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 20px;
  cursor: pointer;
  background-color: var(--background-gray);
  border-radius: 3px;

  img {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`;

export const Info = styled.div`
  padding: 1.5rem;
  border-radius: 3px;
  height: auto;

  h2 {
    font-size: 1.25rem;
    word-wrap: break-word;
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
