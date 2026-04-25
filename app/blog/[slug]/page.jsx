import Image from "next/image";
import Heading from "@/components/Heading";
import { getPost, getSlugs } from "@/lib/post";
import ShareLinkButton from "@/components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({slug}));
}

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
      <div className="flex gap-3 pb-2 items-baseline">
        <p className="italic text-sm pb-2">
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
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
