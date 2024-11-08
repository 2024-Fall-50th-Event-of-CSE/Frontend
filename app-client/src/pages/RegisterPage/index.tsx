import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
    return (
        <div>
            <div className="my-2">
                <Label>이름</Label>
                <Input type="text" placeholder="이름을 입력하세요"></Input>
            </div>

            <div className="my-2">
                <Label>학번</Label>
                <Input type="text" placeholder="학번을 입력하세요"></Input>
            </div>

            <div className="my-2">
                <Label>전화번호</Label>
                <Input
                    type="text"
                    placeholder="하이픈(-)을 제외한 전화번호를 입력하세요 "
                ></Input>
            </div>

            <div className="my-2">
                <Button className="w-full">제출</Button>
            </div>
        </div>
    );
}
