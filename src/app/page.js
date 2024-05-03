import Content from "./content";

// revalidate the page every 1 hour
export const revalidate = 3600;

function Page() {
  return <Content />;
}

export default Page;
