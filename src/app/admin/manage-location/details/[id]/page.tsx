"use client";
import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import { useGetSingleLocationQuery } from "@/redux/features/location/location.api";
import { Card, List, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

const LocationDetailsPage = () => {
  const params = useParams();
  const { data: session } = useSession();
  const { isLoading, data } = useGetSingleLocationQuery(
    {
      id: params.id as string,
      params: {
        populate: "cars",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.id || !session?.accessToken,
    }
  );

  const location = data?.location;

  return (
    <div>
      <ActionBar title="Location Details">
        <BreadCrumb items={[{ label: "Management" }, { label: "Manage Category" }, { label: "Details" }]} />
      </ActionBar>
      <Card bordered loading={isLoading}>
        <List>
          <List.Item>
            <Typography.Text strong>Name: </Typography.Text>
            <Typography.Text className="w-3/5">{location?.name}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Available Cars: </Typography.Text>
            <Typography.Text className="w-3/5">
              <span className="cursor-pointer text-blue-400 underline">view</span>
            </Typography.Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default LocationDetailsPage;
