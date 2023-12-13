import { QRCodeIcon, SearchIcon } from "@/icons";

export const SearchBar = () => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
            </div>
            <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 font-normal border border-gray-300 focus:border-gray-500 focus:outline-none"
                placeholder="Search"
                required
            />
            <div className="text-gray absolute cursor-pointer end-2.5 bottom-0.5 font-medium text-sm px-2 py-2">
                <QRCodeIcon />
            </div>
        </div>
    );
};
