interface PhoneInfo {
    ICON: React.ReactNode;
    PREFIX: string;
    NUMBER: string;
}

interface MenuInfo {
    TEXT: string;
    PHONE: PhoneInfo;
}

export interface HeaderInfo {
    LOGO: React.ReactNode;
    MENU: MenuInfo;
}

export type IPlan = {
    name: string;
    price: number;
    description: string[];
    age: number;
    selected?: boolean
}