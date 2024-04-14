import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";
import "./global.css";
import { CircleAlert, CircleCheck, Info, XCircle, XIcon } from "lucide-react";

const alertVariants = cva("inc-p-3 inc-rounded-lg inc-w-full inc-flex inc-flex-col inc-items-center inc-px-2", {
    variants: {
        variant: {
            info: "inc-bg-info-accent inc-text-info",
            danger: "inc-bg-danger-accent inc-text-danger",
            warning: "inc-bg-warning-accent inc-text-warning",
            success: "inc-bg-success-accent inc-text-success",
        },
    },
    defaultVariants: {
        variant: "info",
    },
});

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    showIcon?: boolean;
    dismissable?: boolean;
    onDismissed: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant, children, dismissable = false, showIcon = true, onDismissed, ...props }, ref) => {
    const [dismissed, setDismissed] = React.useState<boolean>(false);

    let icon: React.ReactElement<any, any> = <Info />;
    if (variant === "info") {
        icon = <Info size={24} className="inc-fill-info inc-stroke-info-accent" />;
    } else if (variant === "danger") {
        icon = <XCircle size={24} className="inc-fill-danger inc-stroke-danger-accent" />;
    } else if (variant === "warning") {
        icon = <CircleAlert size={24} className="inc-fill-warning inc-stroke-warning-accent" />;
    } else if (variant === "success") {
        icon = <CircleCheck size={24} className="inc-fill-success inc-stroke-success-accent" />;
    }

    return (
        <div className={cn(alertVariants({ variant, className }))} ref={ref} {...props}>
            <div className="inc-flex inc-flex-row inc-space-x-2">
                {showIcon && <div className="inc-mr-2">{icon}</div>}
                {children}
                {dismissable && (
                    <button onClick={onDismissed}>
                        <XIcon size={24} className="inc-stroke-gray-400" />
                    </button>
                )}
            </div>
        </div>
    );
});

Alert.displayName = "Alert";

export { Alert, alertVariants };
