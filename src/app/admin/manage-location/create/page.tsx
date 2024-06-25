"use client";
import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import LocationForm from "@/components/form/Body/LocationForm";
import Form from "@/components/form/Form";
import { useRouter } from "@/lib/router-events";
import { useAddLocationMutation } from "@/redux/features/location/location.api";
import addLocationValidation from "@/schema/addLocation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message } from "antd";

const CreateCategoryPage = () => {
  const router = useRouter();
  const [addLocation] = useAddLocationMutation();
  const submitHandler = async (data: any) => {
    message.loading("Adding...");
    try {
      const res = await addLocation({ data }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to add location has been sent successful");
        router.push("/admin/manage-location");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to add new location! try again");
    }
  };
  return (
    <div>
      <ActionBar title="Create Location">
        <div className=" ">
          <BreadCrumb items={[{ label: "Management" }, { label: "Manage Location" }, { label: "Add" }]} />
        </div>
      </ActionBar>
      <Form submitHandler={submitHandler} resolver={zodResolver(addLocationValidation)}>
        <LocationForm />
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateCategoryPage;
