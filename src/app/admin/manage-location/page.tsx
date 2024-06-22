"use client";
import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import Table from "@/components/common/Table";
import { useDebounced } from "@/hooks/useDebounced";
import { Link, useRouter } from "@/lib/router-events";
import {
  getLocations,
  useDeleteLocationMutation,
  useGetLocationsQuery,
} from "@/redux/features/location/location.api";
import { ILocation } from "@/types/ApiResponse";
import { Button, Input, Modal, TableColumnProps, message } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useCSVDownloader } from "react-papaparse";
const { confirm } = Modal;

const ManageLocationPage = () => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const [csvJson, setCsvJson] = useState<ILocation[]>([] as ILocation[]);
  const { data: session } = useSession();
  const query: Record<string, any> = {};
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const [deleteLocation] = useDeleteLocationMutation();
  const { data, isLoading } = useGetLocationsQuery(
    { params: { ...query, populate: "cars" } },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const locations = data?.locations;
  const meta = data?.meta;

  const columns: TableColumnProps<any>[] = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Number of Cars",
      dataIndex: "cars",
      render: function (data: any[]) {
        return (
          <div className="flex justify-center items-center">{data?.length}</div>
        );
      },
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
              onClick={() =>
                router.push(`/admin/manage-location/details/${data}`)
              }
            >
              view
            </Button>
            <Button
              size="small"
              onClick={() => router.push(`/admin/manage-location/edit/${data}`)}
            >
              edit
            </Button>
            <Button size="small" onClick={() => showDeleteLocationModal(data)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const showDeleteLocationModal = (data: string) => {
    confirm({
      title: "Are you sure delete this location?",
      content: "Press 'Yes' to delete or 'No' to back to previous page",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDeleteLocation(data);
      },
    });
  };

  const handleDeleteLocation = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteLocation({ id });
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

  // gemerate csv
  const generateCSV = async () => {
    message.loading({ content: "Generating CSV...", key: "csv" });
    const csvData = await getLocations({});
    setCsvJson(csvData.locations);
    message.success({ content: "CSV Generated", key: "csv" });
  };

  return (
    <div>
      <ActionBar title="Manage Location">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0  justify-between items-center">
          <BreadCrumb
            items={[{ label: "Management" }, { label: "Location" }]}
          />
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
          <Link href="/admin/manage-location/create">
            <Button type="primary">Add Location</Button>
          </Link>

          {csvJson.length > 0 ? (
            <CSVDownloader
              type={Type.Link}
              filename={"location"}
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
        dataSource={locations}
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

export default ManageLocationPage;
