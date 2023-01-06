import React from "react";
import { images } from "src/config/images";

interface Props {
    text: string;
    total: number;
    data: Record<string, any>;
    gradientClass: string;
}

export const Card: React.FC<Props> = ({
    text,
    total,
    data,
    gradientClass,
}: Props) => {
    return (
        <div
            className={`relative basis-1/2 flex flex-col justify-between px-6 py-4 mb-20 item w-auto h-auto flex-grow font-bold rounded-md   ${gradientClass} `}
        >
            <div className="top-block">
                <p className="text-base text-white lgdesktop-down:text-sm">
                    {text}
                </p>
                <p className="text-white text-50 lgdesktop-down:text-32 ipad-down:text-25">
                    {total}
                </p>
            </div>
            <div className="bottom-block flex space-x-6">
                {Object.keys(data).map((item: string) => {
                    return (
                        <div
                            key={item}
                            className="flex flex-col item w-auto flex-grow"
                        >
                            <span className="text-sm text-white lgdesktop-down:text-sm">
                                {item}
                            </span>
                            <p className="text-27 text-white lgdesktop-down:text-32 ipad-down:text-25">
                                {data[item]}
                            </p>
                        </div>
                    );
                })}
            </div>

            <span className="absolute left-0 right-0 top-0 opacity-10">
                <img
                    src={images.CurvVectore}
                    className="m-auto w-full"
                    alt="access-denied-img"
                />
            </span>
        </div>
    );
};
