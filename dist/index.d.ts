import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const alertVariants: (props?: ({
    variant?: "info" | "danger" | "warning" | "success" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    dismissable?: boolean;
    showIcon?: boolean;
    onDismissed: () => void;
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;

export { Alert, type AlertProps, alertVariants };
