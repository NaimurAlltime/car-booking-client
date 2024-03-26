import { getSearch } from "@/redux/features/search/search.api";
import Cars from "./Cars";
import Container from "./Container";
import Filter from "./Filter";
import Googlemap from "./Googlemap";

export default async function CarSearch({ searchParams }: { searchParams: any }) {
  const { location } = searchParams;
  const data = await getSearch({ id: location , params: {
  } });
  console.log(data);
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-2">
        {/* left part of design */}
        <div className="overflow-hidden">
          {(data?.cars[0]?.location as any)?.mapIframe  && <Googlemap  iframe={(data?.cars[0]?.location as any)?.mapIframe} />}
          <Filter />
        </div>
        {/* right part of design */}
        <div className="col-span-1 lg:col-span-3">
          <Cars data={data}/>
        </div>
      </div>
    </Container>
  );
}
