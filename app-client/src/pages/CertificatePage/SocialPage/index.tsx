import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageUp } from "lucide-react";

export default function CertificateSocialPage() {
    return (
        <div>
            <div className="aspect-square">
                <Card className="w-full aspect-square flex flex-col justify-center items-center">
                    <ImageUp className="m-5 w-[30px] h-[30px]" />
                    <h2 className="text-xl font-bold">SNS 에 사진을 공유하고</h2>
                    <h2 className="text-xl font-bold">해당 화면을 캡쳐해 인증해주세요</h2>
                    <p>운영진 확인 후, 스탬프 적립됩니다</p>
                </Card>
            </div>
            <div className="my-2">
                <Button className="w-full">제출</Button>
            </div>
        </div>
    );
}
