import { StampCard } from "@/components/displays/StampCard";
import { CircleHelp, DollarSign, ExternalLink, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
    const navigate = useNavigate();

    const name = "김동환";
    const userStamp = 0;
    const requiredStamp = 3;
    const totalStamp = 4;

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">{name} 님의 스탬프 현황</h1>

            <div className="">
                <StampCard
                    icon={<ExternalLink />}
                    name="SNS"
                    description="SNS 에 사진을 공유하고 해당 화면을 캡쳐해주세요"
                    onClick={() => navigate("/certificate/social")}
                />
                <StampCard
                    icon={<CircleHelp />}
                    name="퀴즈"
                    description="간단한 퀴즈를 풀고 정답을 제출해주세요"
                    onClick={() => navigate("/certificate/quiz")}
                />
                <StampCard
                    icon={<DollarSign />}
                    name="캐치캐쉬"
                    description="숨겨진 보물을 찾아 인증해주세요"
                    onClick={() => navigate("/certificate/cash")}
                />
                <StampCard
                    icon={<GraduationCap />}
                    name="세미나"
                    description="세미나를 신청해주세요"
                    onClick={() => navigate("/certificate/seminar")}
                />
            </div>

            <p className="text-center text-xl font-bold">
                {totalStamp} 중 {requiredStamp} 개 이상을 완수하세요!
            </p>
            <p className="text-center">
                {requiredStamp} 이상 완수 시, 12월 4일, 5일, 6일 17시 ~ 18시 과방에서 인증
            </p>
        </div>
    );
}
