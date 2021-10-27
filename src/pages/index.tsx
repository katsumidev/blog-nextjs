import type { GetStaticProps, NextPage } from "next";
import fs from "fs";
import React, { ReducerAction } from "react";
import path from "path";
import Header from "../components/Header";
import matter from "gray-matter";
import PostCard from "../components/PostCard";
import { Wrapper } from "../styles/pages/Home";
import { useRouter, NextRouter } from "next/router";

const Home: React.FC<{ posts: any }> = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Wrapper>
        {posts.map((post: any, index: any) => {
          return (
            <PostCard
              key={index}
              date={post.data.date}
              title={post.data.title}
              image={post.data.image}
              description={post.data.description}
              onClick={() => router.push(`/blog/${post.slug}`)}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", ""); // pega o nome do arquivo e retira a extensão

    const markdownMetaData = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    ); // lê o arquivo no formato utf-8 e o salva na variavel markdownMeta

    // desestrutura o arquivo em um objeto contendo o frontmatter do arquivo.
    const { data } = matter(markdownMetaData);

    return {
      slug,
      data,
    };
  });

  // passa os dados como props para a criação da página estática
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
};

export default Home;
