import React from "react";
import fs from "fs";
import path from "path";
import type { GetStaticProps, GetStaticPaths } from "next";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { ParsedUrlQuery } from "querystring";
// import { Container } from './styles';

const blog: React.FC<{ data: any; content: any }> = ({ data, content }) => {
  return (
    <>
      <Markdown>
        {content}
      </Markdown>
    </>
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
  const { content } = matter(data_post);

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
