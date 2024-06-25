import { getSearch } from "@/redux/features/search/search.api";
import Cars from "./Cars";
import Filter from "./Filter";
import Googlemap from "./Googlemap";

export default async function CarSearch({
  searchParams,
}: {
  searchParams: any;
}) {
  const { location } = searchParams;
  let filters: any = { sort: "rentPerDay" };
  if (searchParams.category) {
    filters = { ...filters, category: searchParams.category };
  }
  if (searchParams.ac === "true") {
    filters = { ...filters, ac: searchParams.ac };
  }
  if (searchParams.automatic === "true") {
    filters = { ...filters, automatic: searchParams.automatic };
  }
  const data = await getSearch({ id: location, params: filters });
  // console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-2 md:mx-24 mx-2">
      {/* left part of design */}
      <div className="overflow-hidden">
        <div className="overflow-hidden hidden">
          {(data?.cars[0]?.location as any)?.mapIframe && (
            <Googlemap iframe={(data?.cars[0]?.location as any)?.mapIframe} />
          )}
        </div>
        <div className="md:block hidden">
          <Filter />
        </div>
      </div>
      {/* right part of design */}
      <div className="col-span-1 lg:col-span-3">
        <Cars data={data} />
      </div>
    </div>
  );
}
