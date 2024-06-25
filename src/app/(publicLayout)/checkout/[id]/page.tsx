import HeadingBox from "@/components/common/HeaderBox";
import CheckoutSection from "@/components/sections/Payment/CheckoutSection";

const CheckoutPage = ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) => {
  return (
    <div>
      <div className="md:mt-28 mt-20 container mx-auto px-5">
        <HeadingBox queryParams={searchParams} />
        <CheckoutSection carId={id} queryParams={searchParams} />
      </div>
    </div>
  );
};

export default CheckoutPage;
