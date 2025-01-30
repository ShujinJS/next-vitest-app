export default async function Layout({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug, "this returns the slug param of the route");
  return <>My Feed {slug}</>;
}
