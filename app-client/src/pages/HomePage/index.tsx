import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="">
            <Button
                variant="default"
                className="w-full my-1"
                onClick={() => navigate("/register")}
            >
                신청
            </Button>
            <Button
                variant="default"
                className="w-full my-1"
                onClick={() => navigate("/login")}
            >
                인증
            </Button>
        </div>
    );
}
