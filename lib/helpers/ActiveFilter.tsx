import { Dispatch, SetStateAction } from "react";

/**
 * Reset the display array to show all (state)
 * @param list 
 * @param setState 
 */
export const filterAll = (
    list: any[],
    setState: Dispatch<SetStateAction<any[]>>,
    setFilter:  Dispatch<SetStateAction<"INACTIVE" | "ACTIVE" | "">>
) => {
    let new_list: any[] = [];

    list.forEach(item => {
        new_list = [
            ...new_list,
            item
        ]
    })

    setFilter("");
    setState(new_list);
};

/**
 * Filter Active/Iniactive based on status. Modify state to display new array.
 * @param list 
 * @param type 
 * @param setState 
 */
export const filterActive = (
    list: any[],
    type: "INACTIVE" | "ACTIVE" | "",
    setState: Dispatch<SetStateAction<any[]>>,
    setFilter:  Dispatch<SetStateAction<"INACTIVE" | "ACTIVE" | "">>
) => {
    let new_list: any[] = [];
    console.log(list);
    console.log(type);

    list.forEach(item => {
        if (item?.status && type == "ACTIVE") {
            new_list = [
                ...new_list,
                item
            ]
        } 

        if (!item?.status && type == "INACTIVE") {
            new_list = [
                ...new_list,
                item
            ]
        }
    })
    setFilter(type);
    setState(new_list);
};
