import UpdateUser from "@/component/UpdateUser";

interface PageProps {
  params: {
    id: string;
  };
}

async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <UpdateUser id={id} />
    </div>
  );
}

export default Page;
