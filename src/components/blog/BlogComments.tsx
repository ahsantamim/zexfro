"use client";

interface BlogCommentsProps {
  postId: string;
}

export function BlogComments({ postId }: BlogCommentsProps) {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8">Comments</h2>
      <p className="text-gray-600">Comments section will be implemented here</p>
    </section>
  );
}
