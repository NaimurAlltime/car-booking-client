import CarSearch from "@/components/sections/CarSearch/CarSearch";

const SearchResultPage = ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams);
  return (
    <div className="md:mt-28 mt-10 container mx-auto px-5">
      <CarSearch searchParams={searchParams} />
    </div>
  );
};

export default SearchResultPage;
