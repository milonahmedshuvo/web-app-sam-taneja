"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import { RxSwitch } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ModalComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="px-4 py-2 flex cursor-pointer items-center gap-2 transition-all duration-300 !text-[#2c65af]"
        onClick={showModal}
      >
        {" "}
        Interests <RxSwitch className="!text-2xl text-gray-400" />{" "}
      </button>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        style={{ paddingLeft: 0, paddingRight: 0 }}
        bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}
        closable={false}
      >
        <div className="bg-[#2c65af] p-4 text-white flex justify-evenly items-center rounded">
          <div className="flex flex-col items-center">
            <IoNotificationsOutline className="text-6xl text-white"></IoNotificationsOutline>
            <div className=" mt-2">
              <p className="leading-0 text-xs">CREATE ALERTS &</p>
              <p className="leading-2 text-xs">AVE SEARCHES</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <IoNotificationsOutline className="text-6xl text-white"></IoNotificationsOutline>
            <div className=" mt-2">
              <p className="leading-0 text-xs">CREATE ALERTS &</p>
              <p className="leading-2 text-xs">AVE SEARCHES</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2c65af] p-4 text-white flex justify-evenly items-center rounded">
          <div className="flex flex-col items-center">
            <IoNotificationsOutline className="text-6xl text-white"></IoNotificationsOutline>
            <div className=" mt-2">
              <p className="leading-0 text-xs">CREATE ALERTS &</p>
              <p className="leading-2 text-xs">AVE SEARCHES</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <IoNotificationsOutline className="text-6xl text-white"></IoNotificationsOutline>
            <div className=" mt-2">
              <p className="leading-0 text-xs">CREATE ALERTS &</p>
              <p className="leading-2 text-xs">AVE SEARCHES</p>
            </div>
          </div>
        </div>

        <h2 className="text-[#2c65af] text-center font-semibold text-2xl !mt-7">
          Create My Profile / Log In
        </h2>
        <p className="text-center text-[#303437] text-md">
          Welcome to DealNews! Sign in with
        </p>

        <div className="">
          <button className="border w-[334px] !mx-auto justify-center !my-3 !text-[#3586c3] px-6 py-3 flex items-center gap-3 border-gray-300 rounded ">
            {" "}
            <FaGoogle></FaGoogle> Continue with Google
          </button>

          <button className="border w-[334px] !mx-auto !my-3 !bg-[#4267b2] !text-white px-6 py-3 flex items-center justify-center gap-3 border-[#4267b2] rounded ">
            {" "}
            <FaGoogle></FaGoogle> Continue with Facebook
          </button>
        </div>

        <div className="flex items-center justify-center">
          <hr className="w-20" />
          <p className="uppercase mx-4 !mt-4">or</p>
          <hr className="w-20" />
        </div>

        <button className="border w-[334px] !mx-auto justify-center !my-3 !text-[#00a863] bg-white hover:bg-[#cce7d3] px-6 py-3 flex items-center gap-3 border-[#00a863] rounded  ">
          {" "}
          <MdEmail className="!text-xl"></MdEmail> Continue with Google
        </button>

        <p className="text-[#2c65af] text-md hover:underline font-semibold !mt-8 text-center">
          Terms and Conditions
        </p>
      </Modal>
    </>
  );
};

export default ModalComponent;
