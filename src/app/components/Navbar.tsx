export default function Navbar() {
    return (
        <nav className="sticky flex justify-between bg-white shadow-md p-4 items-center rounded-b-lg">
            <a className="text-pink-400 font-black text-3xl" href="/">CUact</a>
            <ul className="flex flex-row text-black gap-2">
                <li><a href="/">Calendar</a></li>
                <li><a href="/about">Notifications</a></li>
                <li><a href="/contact">Profile</a></li>
            </ul>
        </nav>
    );
}