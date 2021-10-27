import React from "react";
import Image from "next/image";
import { Container, Info, Date } from "./styles";

const PostCard: React.FC<{
  title: string;
  image: string;
  description: string;
  date: string;
  onClick: any;
}> = ({ title, image, description, date, onClick }) => {
  return (
    <Container onClick={onClick}>
      <img alt={title} src={image} />
      <Info>
        <Date>{date}</Date>
        <h2>{title}</h2>
        <p>{description}</p>
      </Info>
    </Container>
  );
};

export default PostCard;
