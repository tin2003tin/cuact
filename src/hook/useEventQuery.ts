import axios from "axios";

export default async function useEventQuery(id: string) {
    const res = await axios.get(`https://cuact.vercel.app/api/event/${id}`);
    return res.data;
}