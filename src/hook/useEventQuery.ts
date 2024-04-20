import axios from "axios";

export default async function useEventQuery(eventId: string) {
    const res = await axios.get(`http://localhost:3000/api/event/${eventId}`)
    return res.data;
}