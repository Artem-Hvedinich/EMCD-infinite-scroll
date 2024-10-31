import {User} from "~/types";

export const fetchUsers = async (results: number):
    Promise<User[] | undefined> => {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${results}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};
