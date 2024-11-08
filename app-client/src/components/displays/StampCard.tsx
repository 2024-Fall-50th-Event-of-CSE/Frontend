import { Card, CardContent } from "@/components/ui/card";

import logoStamp from "@/assets/logo.webp";

export interface StampCardProps {
    icon?: React.ReactNode;
    imgSrc?: string;
    name: string;
    description?: string;
    active?: boolean;
    onClick?: React.MouseEventHandler;
}

export const StampCard = ({
    icon,
    name,
    description,
    active = true,
    onClick,
}: StampCardProps) => {
    return (
        <Card
            className={`h-[80px] border-[2px] flex m-1 px-2 items-center justify-center hover:cursor-pointer relative`}
            onClick={onClick}
        >
            <div className="">{icon}</div>
            <CardContent className="m-2 p-0 w-full">
                <h2 className="text-xl font-bold">{name}</h2>
                {description && <p>{description}</p>}
                {active && (
                    <img
                        src={logoStamp}
                        alt=""
                        className="w-[50px] aspect-square rotate-[30deg] absolute top-1 right-2"
                    />
                )}
            </CardContent>
        </Card>
    );
};
