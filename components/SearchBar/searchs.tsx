'use client'

import { FormEvent } from "react";

export const searchs = {
    searchDivision: (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        console.log('Division');
    },

    searchGroup: (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        console.log('Group');
    },

    default: (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        console.log('search');
    }
}
