import { url } from "./api";

const OPTIONS = {
    "access-control-allow-origin" : "*",
    "Content-type": "application/json; charset=UTF-8"
};

export const fetchGetCarsList = async (callback?: any) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: OPTIONS
        })
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        
        callback(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const fetchCreateNewCar = async (body: any, callback: any) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: OPTIONS,
            body: JSON.stringify(body),
        })
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        callback()
    } catch (error) {
        console.error('Error:', error);
    }
};

export const fetchUpdateCar = async (id: string, body: any, callback: any) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: OPTIONS,
            body: JSON.stringify(body),
        })
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        callback()
    } catch (error) {
        console.error('Error:', error);
    }
};