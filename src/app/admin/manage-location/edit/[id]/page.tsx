"use client";

import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import LocationForm from "@/components/form/Body/LocationForm";
import Form from "@/components/form/Form";
import { useRouter } from "@/lib/router-events";
import { useGetSingleLocationQuery, useUpdateLocationMutation } from "@/redux/features/location/location.api";
import { Button, Skeleton, message } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationEditPage = () => {
  const router = useRouter();
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});
  const params = useParams();
  const { data: session } = useSession();
  const [updateLocation] = useUpdateLocationMutation();
  const { isLoading, data } = useGetSingleLocationQuery(
    {
      id: params.id as string,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.id || !session?.accessToken,
    }
  );
  useEffect(() => {
    if (!data?.location) return;
    const defaultValues = {
      name: data?.location?.name,
    };
    setDefaultValues(defaultValues);
  }, [data]);

  const submitHandler = async (values: any) => {
    const changedProperties: any = Object.fromEntries(
      Object.keys(values)
        .filter((key) => values[key] !== defaultValues[key])
        .map((key) => [key, values[key]])
    );

    if (Object.keys(changedProperties).length > 0) {
      const obj = { ...changedProperties };
      const file = obj["icon"];
      delete obj["icon"];
      const formData = new FormData();
      if (file) {
        formData.append("icon", file as Blob);
      }
      for (const [key, value] of Object.entries(obj)) {
        formData.append(key, value as string);
      }
      message.loading("Updating...");
      try {
        const res = await updateLocation({
          id: params.id as string,
          data: changedProperties,
        }).unwrap();
        if (!!res) {
          message.destroy();
          message.success("Your request to update location has been sent successful");
          router.push("/admin/manage-location");
        }
      } catch (err: any) {
        message.destroy();
        message.warning("Failed to update location! try again");
      }
    } else {
      router.push("/admin/manage-location");
      message.success("Updated without any changes");
    }
  };
  return (
    <div>
      <ActionBar title="Location Edit">
        <BreadCrumb items={[{ label: "Management" }, { label: "Manage Location" }, { label: "Edit" }]} />
      </ActionBar>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
          <div>
            <LocationForm />
          </div>
          <div style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default LocationEditPage;
