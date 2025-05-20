import { Loader2 } from "lucide-react";

export function ScreenLoader() {
    return (
        <div className="size-full grid place-items-center">
            <Loader2 className="size-24 animate-spin text-primary" />
        </div>
    )
}