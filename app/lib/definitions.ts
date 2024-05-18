export type Pokemon = {
    Pokedex_Number: number;
    Name: string;
    Type_1: string;
    Type_2?: string;
    Total_Stats: number;
    HP: number;
    Attack: number;
    Defense: number;
    Sp_Atk: number;
    Sp_Def: number;
    Speed: number;
    Generation: number;
    Legendary: boolean;
}

export interface IBadge {
    text: string;
    filled?: boolean;
}

export interface IButton {
    text: string;
    type: string;
    href: string
    filled?: boolean;
    icon?: JSX.Element;
}

export interface ICard {
    indicator?: string;
    badge?: IBadge;
    image?: string,
    title: string;
    subtitle?: string;
    body: string;
    btn?: IButton;

}