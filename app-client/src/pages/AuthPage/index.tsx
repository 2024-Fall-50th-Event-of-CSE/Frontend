import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const navigate = useNavigate();

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

            <div>
                <Button className="w-full" onClick={() => navigate("/mypage")}>
                    검색
                </Button>
            </div>
        </div>
    );
}
