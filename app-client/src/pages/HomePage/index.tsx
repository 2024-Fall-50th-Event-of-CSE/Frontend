import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <div className="">
            <Button variant="default" className="w-full my-1">
                신청
            </Button>
            <Button variant="default" className="w-full my-1">
                인증
            </Button>
        </div>
    );
}
