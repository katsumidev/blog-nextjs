import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import type { GetStaticProps, GetStaticPaths } from "next";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { ParsedUrlQuery } from "querystring";
import hljs from "highlight.js";
import {
  Container,
  PostTitle,
  PostSubTitle,
  PostImage,
  PostContent,
  PostData,
} from "../../styles/pages/Blog";
import { AiFillCalendar } from "../../styles/Icons";

const blog: React.FC<{ data: any; content: any }> = ({ data, content }) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <Container>
      <PostData>
        <span>
          <AiFillCalendar />
          <sub>{data.date}</sub>
        </span>
        <PostTitle>{data.title}</PostTitle>
        <PostSubTitle>{data.subtitle}</PostSubTitle>
      </PostData>
      <PostImage alt={data.title} src={data.image} />
      <PostContent>
        <Markdown>{content}</Markdown>
      </PostContent>
    </Container>
  );
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams; // extrai o id do path vindo do contexto da função getStaticPaths

  const data_post = fs.readFileSync(
    path.join("src/posts", `${id}.md`),
    "utf-8"
  ); // lê o arquivo com esse id

  const { data } = matter(data_post); // extrai o frontmatter dele e converte no objeto data
  const { content } = matter(data_post); // extrai o conteudo do markdown e joga no objeto content

  return {
    props: {
      // retorna os dados
      content,
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src/posts")); // lê todos os arquivos nesse diretório

  const paths = files.map((post) => ({
    params: {
      id: post.replace(".md", ""),
    },
  })); // para cada arquivo cria um path que retorna um id, que é o slug do post

  return {
    // retorna todos os paths
    paths,
    fallback: false,
  };
};

export default blog;
