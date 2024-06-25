import HeadingBox from "@/components/common/HeaderBox";
import CarSearch from "@/components/sections/CarSearch/CarSearch";
const SearchResultPage = ({ searchParams }: { searchParams: any }) => {
  return (
    <div className="md:mt-28 mt-10 container mx-auto px-5">
      <div className="md:mx-24 mx-2 mt-20 md:mt-2">
        <HeadingBox queryParams={searchParams} />
      </div>
      <CarSearch searchParams={searchParams} />
    </div>
  );
};

export default SearchResultPage;
