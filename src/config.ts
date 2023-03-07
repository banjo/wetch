import { version } from "../package.json";

export const cliConfig = {
    name: "wetch",
    version,
    help: {
        description: `Watch and execute commands on file changes. 
Provide the command as flags or use interactive prompt to select files and command.`,
        usage: "wetch [options]",
        examples: ["wetch", "wetch --command=npm_run_build --files=src/index.ts,src/utils.ts"],
    },
    flags: {
        deep: {
            type: Number,
            description: "How deep to search for files",
            default: 2,
        },
        command: {
            type: String,
            description: "The command you want to execute, separated by underscores",
        },
        files: {
            type: String,
            description: "The files you want to watch, separated by commas in one string",
        },
    },
};
