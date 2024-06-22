"use client";
import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import { useGetSingleCarQuery } from "@/redux/features/car/car.api";
import { Col, Row, Skeleton } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const params = useParams();
  const { data: session } = useSession();
  const { isLoading, data } = useGetSingleCarQuery(
    {
      id: params.id as string,
      params: {
        populate: "location",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.id || !session?.accessToken,
    }
  );

  // get car data
  const car = data?.car;

  return (
    <div>
      <ActionBar title="Car Details">
        <BreadCrumb
          items={[
            { label: "Management" },
            { label: "Manage Car" },
            { label: "Details" },
          ]}
        />
      </ActionBar>
      {isLoading || !car ? (
        <Skeleton active />
      ) : (
        <div>
          <Row gutter={[20, 20]}>
            <Col span={24} md={10}>
              <Image
                src={car?.imageUrl}
                alt=""
                width={600}
                height={600}
                className="shadow-md w-full h-full"
                layout="responsive"
              />
            </Col>
            <Col span={24} md={14}>
              <div className="md:p-5">
                <div>
                  <div>
                    <h1 className="text-primary mb-5">{car?.title}</h1>
                    <div className="flex flex-col gap-5">
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">
                          Description:
                        </p>
                        <p className="text-secondary">{car?.description}</p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">
                          Location:
                        </p>
                        <p className="text-secondary">
                          {(car?.location as any)?.name as string}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">
                          Rent Per Day:
                        </p>
                        <p className="text-secondary">{car?.rentPerDay}</p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">
                          Availability:
                        </p>
                        <p className="text-secondary">
                          {car?.isAvailable ? "available" : "not available"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Seats:</p>
                        <p className="text-secondary">
                          <p className="hover:text-primary text-secondary hover:underline">
                            {car?.seats}
                          </p>
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Bags</p>
                        <p className="hover:text-primary text-secondary hover:underline">
                          {car?.bags}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Dors</p>
                        <p className="hover:text-primary text-secondary hover:underline">
                          {car?.dors}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">AC</p>
                        <p className="hover:text-primary text-secondary hover:underline">
                          {car?.ac ? "available" : "not available"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Engine</p>
                        <p className="hover:text-primary text-secondary hover:underline">
                          {car?.automatic ? "Auto" : "Manual"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Fuel</p>
                        <p className="hover:text-primary text-secondary hover:underline">
                          {car?.fuel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
