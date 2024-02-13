import React from "react";
import { Avatar, Drawer, Divider } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const UserView = ({ data, visible, close }) => {

  return (
    <Drawer
      width={300}
      placement="right"
      onClose={close}
      closable={false}
      visible={visible}
    >
      <div className="text-center mt-3">
        <Avatar
          size={80}
          src={
            "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          }
        />
        <h3 className="mt-2 mb-0">{data?.name}</h3>
        <span className="text-muted">{data?.username}</span>

      </div>
      <Divider dashed />
      <div>
        <h6 className="text-muted text-uppercase mb-3">Contact Information</h6>
        <p>
          <MailOutlined />
          <span className="ml-3 text-dark">{data?.email}</span>
        </p>
        <p>
          <PhoneOutlined />
          <span className="ml-3 text-dark">{data?.phone}</span>
        </p>
        <p>
          <HomeOutlined />
          <span className="ml-3 text-dark">{`${data?.address?.street}, ${data?.address?.suite}, ${data?.address?.city}, ${data?.address?.zipcode}`}</span>
        </p>
        <p>
          <GlobalOutlined />
          <a
            href={`http://${data?.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-dark"
          >
            {data?.website}
          </a>
        </p>
      </div>
      <Divider dashed />
      <div className="mt-5">
        <h6 className="text-muted text-uppercase mb-3">Company</h6>
        <p>
          <span className="ml-3 text-dark">{data?.company?.name}</span>
        </p>
        <p>
          <span className="ml-3 text-dark">{data?.company?.catchPhrase}</span>
        </p>
        <p>
          <span className="ml-3 text-dark">{data?.company?.bs}</span>
        </p>
      </div>
    </Drawer>
  );
};

export default UserView;

