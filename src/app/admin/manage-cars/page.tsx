"use client";
import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import Table from "@/components/common/Table";
import { useDebounced } from "@/hooks/useDebounced";
import { Link, useRouter } from "@/lib/router-events";
import {
  getCars,
  useDeleteCarMutation,
  useGetCarsQuery,
} from "@/redux/features/car/car.api";
import { ICar } from "@/types/ApiResponse";
import { Button, Input, Modal, TableColumnProps, message } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useCSVDownloader } from "react-papaparse";
const { confirm } = Modal;

const ManageCarPage = () => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const [csvJson, setCsvJson] = useState<ICar[]>([] as ICar[]);
  const { data: session } = useSession();
  const query: Record<string, any> = {};
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // car data queray params
  query["limit"] = size;
  query["page"] = page;
  query["sort"] =
    !!sortBy && !!sortOrder && sortOrder === "asc"
      ? sortBy
      : sortOrder === "desc"
      ? `-${sortBy}`
      : undefined;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchKey"] = debouncedTerm;
  }

  const [deleteCar] = useDeleteCarMutation();
  const { data, isLoading } = useGetCarsQuery(
    { params: { ...query, populate: "location-locations" } },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const cars = data?.cars;
  const meta = data?.meta;

  const columns: TableColumnProps<any>[] = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Location",
      dataIndex: "location",
      render: function (data: any) {
        return <div>{data[0]?.name}</div>;
      },
    },
    {
      title: "Seats",
      dataIndex: "seats",
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "_id",
      className: "text-center",
      render: function (data: string) {
        return (
          <div className="flex justify-center items-center gap-5">
            <Button
              size="small"
              onClick={() => router.push(`/admin/manage-cars/details/${data}`)}
            >
              view
            </Button>
            <Button
              size="small"
              onClick={() => router.push(`/admin/manage-cars/edit/${data}`)}
            >
              edit
            </Button>
            <Button size="small" onClick={() => showDeleteCarModal(data)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const showDeleteCarModal = (data: string) => {
    confirm({
      title: "Are you sure delete this car?",
      content: "Press 'Yes' to delete or 'No' to back to previous page",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDeleteCar(data);
      },
    });
  };

  const handleDeleteCar = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteCar({ id });
      if (!!res) {
        message.destroy();
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to delete! try again");
    }
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    if (!(order === undefined || field === undefined)) {
      setSortBy(field as string);
      setSortOrder(order === "ascend" ? "asc" : "desc");
    }
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const generateCSV = async () => {
    message.loading({ content: "Generating CSV...", key: "csv" });
    const csvData = await getCars({});
    setCsvJson(csvData.cars);
    message.success({ content: "CSV Generated", key: "csv" });
  };

  return (
    <div>
      <ActionBar title="Manage Car">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0  justify-between items-center">
          <BreadCrumb items={[{ label: "Management" }, { label: "Car" }]} />
          <div className="w-full md:w-1/4">
            <Input
              type="text"
              size="middle"
              value={searchTerm}
              placeholder="Search..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <Link href="/admin/manage-cars/create">
            <Button type="primary">Add Car</Button>
          </Link>

          {csvJson.length > 0 ? (
            <CSVDownloader
              type={Type.Link}
              filename={"car"}
              bom={true}
              data={csvJson}
            >
              <Button style={{ margin: "0px 5px" }} type="primary">
                Download CSV
              </Button>
            </CSVDownloader>
          ) : (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={generateCSV}
            >
              Generate CSV
            </Button>
          )}
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <AiOutlineReload />
            </Button>
          )}
        </div>
      </ActionBar>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={cars}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageCarPage;
