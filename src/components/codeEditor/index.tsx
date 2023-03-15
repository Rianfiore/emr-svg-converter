import dynamic from "next/dynamic";

export const CodeEditor = dynamic(() => import("./models"), { ssr: false });
