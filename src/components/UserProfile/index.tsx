import React from "react";
import { Button } from "antd";
import { useRouter } from "next/router";
import InputBar from "@components/Input";
import LabelBar from "@components/LabelBar";
import MobileNumber from "@components/MobileNumber";
import SelectBar from "@components/Select";
import showToast from "src/utils/toast.utils";
import { city, state } from "src/utils/getCityStateOptions";
import { UserPanelRoutes, option } from "../../Containers/constants";
import SelectCounty from "@components/SelectCounty";

const UserProfile: React.FC = () => {
    const router = useRouter();
    return (
        <div className="workspace-wrapper p-8 mobile-down:p-4">
            <div className="flex justify-between w-846 max-w-full">
                <p className="file-head text-25 text-black font-bold mb-4">
                    User Profile
                </p>
            </div>
            <form>
                <p className="file-head font-DMSans font-bold text-sm text-black-charcol">
                    Personal Details
                </p>
                <div className="transaction-block p-8 border border-blue-100 rounded-md w-846 max-w-full mb-7 mobile-down:p-4">
                    <div className="form-wrap flex space-x-6 mb-7 mobile-down:flex-col mobile-down:space-x-0">
                        <div className="form flex-grow basis-1/2 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="First Name " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Enter First Name *"}
                                type="text"
                            />
                        </div>
                        <div className="form flex-grow basis-1/2 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="Last Name " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Enter Last Name *"}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="form-wrap flex space-x-6 mb-7 mobile-down:flex-col mobile-down:space-x-0">
                        <div className="form flex-grow basis-1/2 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="Email Address " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Enter Email Address *"}
                                type="text"
                            />
                        </div>
                        <div className="form flex-grow basis-1/2 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="Phone Number " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <MobileNumber
                                placeholder="Enter Phone Number *"
                                options={option}
                            />
                        </div>
                    </div>

                    <div className="form-wrap flex space-x-6 mb-7 mobile-down:flex-col mobile-down:space-x-0">
                        <div className="form flex-grow basis-2/3 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="Address " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Enter Address *"}
                                type="text"
                            />
                        </div>
                        <div className="form flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="County" />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <SelectCounty />
                        </div>
                    </div>
                    <div className="form-wrap flex space-x-6 mobile-down:flex-col mobile-down:space-x-0">
                        <div className="form flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="City" />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Enter City *"}
                                type="text"
                            />
                        </div>
                        <div className="form flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="State " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <SelectBar
                                placeholder="Enter State *"
                                options={state}
                            />
                        </div>
                        <div className="form flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="Zip " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Enter Zip *"}
                                type="Current Status *"
                            />
                        </div>
                    </div>
                </div>

                <p className="file-head font-DMSans font-bold text-sm text-black-charcol">
                    Change Password
                </p>
                <div className="transaction-block p-8 border border-blue-100 rounded-md w-846 max-w-full mb-7 mobile-down:p-4">
                    <div className="form-wrap flex space-x-6 mb-7 mobile-down:flex-col mobile-down:space-x-0">
                        <div className="form flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="Current Password " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Enter Current Password *"}
                                type="text"
                            />
                        </div>
                        <div className="form flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="New Password " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Enter New Password *"}
                                type="text"
                            />
                        </div>
                        <div className="form flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                            <LabelBar labelText="Confirm Password " />{" "}
                            <span className="inline-block text-red-600">*</span>
                            <InputBar
                                placeholder={"Confirm Password *"}
                                type="text"
                            />
                        </div>
                    </div>
                </div>

                <div className="btn-wrap flex justify-end w-846 max-w-full ">
                    <div className="stepbar-wrapper">
                        <Button
                            type="primary"
                            ghost
                            className="mr-4"
                            onClick={() => {
                                router.push(UserPanelRoutes.activeFileList);
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => {
                                showToast(
                                    "success",
                                    "Profile Details Saved Successfully.",
                                );
                                router.push(UserPanelRoutes.activeFileList);
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
