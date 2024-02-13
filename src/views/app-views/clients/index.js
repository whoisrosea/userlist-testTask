import React, { useEffect, useState } from "react";
import { Card, Table, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteUser, editUser, loadUsersRequest } from "redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";
import Loading from "components/shared-components/Loading";

function UserList() {
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(loadUsersRequest());
    }
  }, []);

  const deleteUserById = (userId) => {
    dispatch(deleteUser(userId));
    message.success(`Deleted user ${userId}`, 2);
  };

  const showUserProfile = (userInfo) => {
    setUserProfileVisible(true);
    setSelectedUser(userInfo);
  };

  const closeUserProfile = () => {
    setUserProfileVisible(false);
    setSelectedUser(null);
  };

  const tableColumns = [
    {
      title: "User",
      dataIndex: "name",
      render: (name, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={
              "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            }
            name={name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Website",
      dataIndex: "website",
      render: (website) => (
        <a
          onClick={(e) => e.stopPropagation()}
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      ),
    },
    {
      title: "Company",
      dataIndex: ["company", "name"],
      sorter: (a, b) => a.company.name.localeCompare(b.company.name),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, record) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                showUserProfile(record);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                deleteUserById(record.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const history = useHistory();

  const onRowClick = (record) => {
    history.push(`/app/main/clients/profileedit/${record.id}`);
  };

  return (
    <>
      {users.length === 0 ? (
        <Loading />
      ) : (
        <Card bodyStyle={{ padding: "0px" }}>
          <Table
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  onRowClick(record);
                },
              };
            }}
            columns={tableColumns}
            dataSource={users}
            rowKey="id"
          />
          <UserView
            data={selectedUser}
            visible={userProfileVisible}
            close={closeUserProfile}
          />
        </Card>
      )}
    </>
  );
}

export default UserList;
