import axios from "axios";

export default async function useEventQuery(id: string) {
    const res = await axios.get(`${process.env.BACKEND_URL}/api/event/${id}`);
    return res.data;
}