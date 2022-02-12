import React, { CSSProperties } from 'react';
import AntAlert from 'antd/lib/alert';

interface IAlertProps {
    className?: string;
    style?: CSSProperties;
    type?: 'success' | 'info' | 'warning' | 'error';
    showIcon?: boolean;
    closable?: boolean;
    message: React.ReactNode;
    description?: React.ReactNode;
}

export const Alert: React.FC<IAlertProps> = (props) => {
    return <AntAlert {...props} />;
};