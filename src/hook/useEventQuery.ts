import axios from "axios";

export default async function useEventQuery(id: string) {
    const res = await axios.get(`http://localhost:3000/api/event/${id}`);
    return res.data;
}