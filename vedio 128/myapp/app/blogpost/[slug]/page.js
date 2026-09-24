const languages = ["python", "javascript", "java", "cpp", "cs"];

export default async function Page({ params }) {
  const { slug } = await params;

  if (!languages.includes(slug)) {
    return <div>Post not found</div>;
  }

  return <div>My Post: {slug}</div>;
}