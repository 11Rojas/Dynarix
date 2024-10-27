import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

const Header: React.FC = () => {
    return (
        <header className="absolute top-0 z-20 p-4 px-6 bg-black h-16 w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center gap-2">
                    <img
                        src="/favicon.svg"
                        alt="logo"
                        loading="eager"
                        className="size-10"
                    />
                    <h4 className="text-[#3FA9F5] font-extrabold uppercase text-xl">Dinaryx</h4>
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex flex-row text-secundary gap-20 uppercase font-extrabold">
                        <a href="#Roadmap">Roadmap</a>
                        <a href="#Tokenomics">Tokenomics</a>
                        <a href="#">Whitepaper</a>
                    </ul>
                </nav>
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none items-center text-[#3FA9F5] uppercase font-extrabold hidden md:flex">
                        <span>Social media</span>
                        <svg
                            className="ml-1 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black text-white border-[#222121]">
                        <DropdownMenuItem>
                            <img src="/twitter.svg" className="size-4" loading="eager" alt="Twitter icon" />
                            X
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <img src="/discord.svg" className="size-4" loading="eager" alt="Discord icon" />
                            Discord
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <img src="/telegram.svg" className="size-4" loading="eager" alt="Telegram icon" />
                            Telegram
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="w-3/4 h-[0.5px] bg-secundary/80 mx-auto mt-1"></div>
        </header>
    );
};

export default Header;

