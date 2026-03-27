import Image from "next/image";
import Heading from "@/components/Heading";
import { getPost } from "@/lib/post";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="italic text-sm pb-2">
        {post.date} - {post.author}
      </p>
      <Image
        src={post.image}
        alt="image-1"
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      <article
        className="max-w-screen-sm prose prose-neutral"
        dangerouslySetInnerHTML={{ __html: post.body }}
      ></article>
    </>
  );
}
