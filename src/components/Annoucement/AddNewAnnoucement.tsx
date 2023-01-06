import React, { useState } from "react";
import { Button, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { useRouter } from "next/router";
import InputBar from "@components/Input";
import LabelBar from "@components/LabelBar";
import SelectBar from "@components/Select";
import TeaxtAreaBar from "@components/TextArea";
import showToast from "src/utils/toast.utils";
import { AdminPanelRoutes } from "@containers/constants";

const AddNewAnnoucement: React.FC = () => {
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const router = useRouter();

    const onChange1 = (e: RadioChangeEvent) => {
        console.log("radio checked", e.target.value);
        setValue1(e.target.value);
    };

    const onChange2 = (e: RadioChangeEvent) => {
        console.log("radio checked", e.target.value);
        setValue2(e.target.value);
    };

    return (
        <div className="workspace-wrapper p-8 mobile-down:p-4">
            <p className="file-head text-sm text-black-charcol font-bold mb-1 ">
                Announcement
            </p>
            <div className="transaction-block p-8 border border-blue-100 rounded-md w-846 max-w-full mb-7 mobile-down:p-4">
                <div className="form-wrap flex space-x-6 mb-7 mobile-down:flex-col mobile-down:mb-0 mobile-down:space-x-0">
                    <div className="form flex-grow basis-1/2 mobile-down:basis-0 mobile-down:mb-3">
                        <LabelBar labelText="Type" />{" "}
                        <span className="inline-block text-red-600">*</span>
                        <SelectBar options={[]} />
                    </div>
                    <div className="form flex-grow basis-1/2 mobile-down:basis-0 mobile-down:mb-3">
                        <LabelBar labelText="Subject" />{" "}
                        <span className="inline-block text-red-600">*</span>
                        <InputBar
                            placeholder={"Enter Subject * "}
                            type="text"
                        />
                    </div>
                </div>
                <div className="form-wrap flex space-x-6 mb-7 mobile-down:flex-col mobile-down:mb-0 mobile-down:space-x-0">
                    <div className="form flex-grow basis-1/2 mobile-down:basis-0 mobile-down:mb-3">
                        <LabelBar labelText="Message" />{" "}
                        <span className="inline-block text-red-600">*</span>
                        <TeaxtAreaBar
                            placeholder="Enter Message*"
                            name={"textarea"}
                            textAreaid={"Message"}
                            rowNumber={10}
                        />
                    </div>
                </div>
            </div>

            <p className="file-head text-sm text-black-charcol font-bold mb-1 ">
                Recepients
            </p>
            <div className="transaction-block p-8 border border-blue-100 rounded-md w-846 max-w-full mb-7 mobile-down:p-4">
                <div className="form-wrap flex space-x-6 mb-7 mobile-down:flex-col mobile-down:mb-0 mobile-down:space-x-0">
                    <div className="form flex-col flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                        <LabelBar labelText="Send To" />
                        <div className="flex-wrap mt-2">
                            <Radio.Group onChange={onChange1} value={value1}>
                                <Radio value={1}>All</Radio>
                                <Radio value={2}>Group</Radio>
                                <Radio value={3}>Individual</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="form flex-grow basis-2/3 mobile-down:basis-0 mobile-down:mb-3">
                        <LabelBar labelText="Select" />{" "}
                        <span className="inline-block text-red-600">*</span>
                        <SelectBar options={[]} />
                    </div>
                </div>
            </div>
            <p className="file-head text-sm text-black-charcol font-bold mb-1 ">
                Schedule
            </p>
            <div className="transaction-block p-8 border border-blue-100 rounded-md w-846 max-w-full mb-7 mobile-down:p-4">
                <div className="form-wrap flex space-x-6 mb-7 mobile-down:flex-col mobile-down:mb-0 mobile-down:space-x-0">
                    <div className="form flex-col flex-grow basis-1/3 mobile-down:basis-0 mobile-down:mb-3">
                        <LabelBar labelText="Options" />
                        <div className="flex-wrap mt-2">
                            <Radio.Group onChange={onChange2} value={value2}>
                                <Radio value={1}>Now</Radio>
                                <Radio value={2}>Specific Time</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="form flex-grow basis-2/3 mobile-down:basis-0 mobile-down:mb-3">
                        <LabelBar labelText="Date & Time" />{" "}
                        <span className="inline-block text-red-600">*</span>
                        <SelectBar options={[]} />
                    </div>
                </div>
            </div>
            <div className="btn-wrap flex justify-end w-846 max-w-full ">
                <Button
                    type="primary"
                    ghost
                    className="mr-4"
                    onClick={() => {
                        router.push(AdminPanelRoutes.announcement);
                    }}
                >
                    Cancel
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        router.push(AdminPanelRoutes.announcement);
                        showToast(
                            "success",
                            "New Announcement Added Successfully.",
                        );
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default AddNewAnnoucement;
