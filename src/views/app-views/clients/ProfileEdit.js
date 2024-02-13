import React, { useEffect, useState } from "react";
import { Form, Button, Input, Row, Col, message } from "antd";
import Flex from "components/shared-components/Flex";
import { useDispatch, useSelector } from "react-redux";
import { editUser, loadUsersRequest } from "redux/actions/Users";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProfileEdit = () => {
  const history = useHistory();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({ address: {}, company: {} });

  useEffect(() => {
    const user = users.find((item) => item.id.toString() === id);
    if (user) {
      setProfile(user);
    }
  }, [users, id]);

  const handleInputChange = (name, value) => {
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleAddressChange = (name, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      address: { ...prevProfile.address, [name]: value },
    }));
  };

  const handleCompanyChange = (name, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      company: { ...prevProfile.company, [name]: value },
    }));
  };
  const onFinish = (values) => {
    const key = "updatable";
    setProfile({ ...profile, ...values });
    message.loading({ content: "Updating...", key });
    dispatch(editUser(profile));
    setTimeout(() => {
      history.push("/app/main/clients/clientslist");
      message.success({ content: "Profile updated!", key, duration: 2 });
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="profile-edit">
      <Flex
        alignItems="center"
        mobileFlex={false}
        className="text-center text-md-left"
      ></Flex>
      <Form
        name="basicInformation"
        layout="vertical"
        initialValues={profile}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Name">
              <Input
                value={profile.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Username">
              <Input
                value={profile.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Street">
              <Input
                value={profile.address.street || ""}
                onChange={(e) => handleAddressChange("street", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Suite">
              <Input
                value={profile.address.suite || ""}
                onChange={(e) => handleAddressChange("suite", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="City">
              <Input
                value={profile.address.city || ""}
                onChange={(e) => handleAddressChange("city", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Zipcode">
              <Input
                value={profile.address.zipcode || ""}
                onChange={(e) => handleAddressChange("zipcode", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Phone">
              <Input
                value={profile.phone || ""}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Website">
              <Input
                value={profile.website || ""}
                onChange={(e) => handleInputChange("website", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item label="Company Name">
              <Input
                value={profile.company.name || ""}
                onChange={(e) => handleCompanyChange("name", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item label="Catch Phrase">
              <Input
                value={profile.company.catchPhrase || ""}
                onChange={(e) =>
                  handleCompanyChange("catchPhrase", e.target.value)
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item label="BS">
              <Input
                value={profile.company.bs || ""}
                onChange={(e) => handleCompanyChange("bs", e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
        <Button
          style={{ marginLeft: 8 }}
          onClick={() => history.push("/app/main/clients/clientslist")}
        >
          Close
        </Button>
      </Form>
    </div>
  );
};

export default ProfileEdit;
