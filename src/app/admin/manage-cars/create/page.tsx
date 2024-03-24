"use client";
import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import CarForm from "@/components/form/Body/CarForm";
import Form from "@/components/form/Form";
import { useRouter } from "@/lib/router-events";
import { useAddCarMutation } from "@/redux/features/car/car.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message } from "antd";
import addCarValidation from "../../../../schema/addCar.schema";

const CreateCarPage = () => {
  const router = useRouter();
  const [addCar] = useAddCarMutation();
  const submitHandler = async (data: any) => {
    const obj = { ...data };
    const file = obj["image"];
    delete obj["image"];
    const payload = JSON.stringify(obj);
    if (!file) {
      message.warning("Please upload Image");
      throw new Error("Please upload Image");
    }
    const formData = new FormData();
    formData.append("image", file as Blob);
    formData.append("payload", payload);

    

    try {
      message.loading("Adding...");
      const res = await addCar({ data: formData }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to add car has been sent successful");
        router.push("/admin/manage-cars");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to add new car! try again");
    }
  };
  return (
    <div>
      <ActionBar title="Create Location">
        <div className=" ">
          <BreadCrumb items={[{ label: "Management" }, { label: "Manage Location" }, { label: "Add" }]} />
        </div>
      </ActionBar>
      <Form submitHandler={submitHandler} resolver={zodResolver(addCarValidation)}>
        <CarForm />
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateCarPage;
