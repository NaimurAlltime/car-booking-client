"use client";

import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import CarForm from "@/components/form/Body/CarForm";
import Form from "@/components/form/Form";
import { useRouter } from "@/lib/router-events";
import { useGetSingleCarQuery, useUpdateCarMutation } from "@/redux/features/car/car.api";
import { Button, Skeleton, message } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationEditPage = () => {
  const router = useRouter();
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});
  const params = useParams();
  const { data: session } = useSession();
  const [updateCar] = useUpdateCarMutation();
  const { isLoading, data } = useGetSingleCarQuery(
    {
      id: params.id as string,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.id || !session?.accessToken,
    }
  );
  useEffect(() => {
    if (!data?.car) return;
    const defaultValues = {
      title: data?.car?.title,
      description: data?.car?.description,
      location: data?.car?.location,
      image: data?.car?.imageUrl,
      rentPerDay: data?.car?.rentPerDay,
      seats: data?.car?.seats,
      bags: data?.car?.bags,
      dors: data?.car?.dors,
      fuel: data?.car?.fuel,
      ac: data?.car?.ac,
      automatic: data?.car?.automatic,
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
      const file = obj["image"];
      delete obj["image"];
      const payload = JSON.stringify(obj);
      const formData = new FormData();
      if (file) {
        formData.append("image", file as Blob);
        
      }
      formData.append("payload", payload);
      message.loading("Updating...");
      try {
        const res = await updateCar({
          id: params.id as string,
          data: formData,
        }).unwrap();
        if (!!res) {
          message.destroy();
          message.success("Your request to update car has been sent successful");
          router.push("/admin/manage-cars");
        }
      } catch (err: any) {
        message.destroy();
        message.warning("Failed to update car! try again");
      }
    } else {
      router.push("/admin/manage-cars");
      message.success("Updated without any changes");
    }
  };
  return (
    <div>
      <ActionBar title="Car Edit">
        <BreadCrumb items={[{ label: "Management" }, { label: "Manage Car" }, { label: "Edit" }]} />
      </ActionBar>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
          <div>
            <CarForm />
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
